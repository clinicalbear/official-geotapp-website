type RichTextProps = {
  html?: string | null;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  allowedTags?: string[];
};

const EVENT_ATTR_REGEX = /^on/i;
const ATTRIBUTE_REGEX = /\s+([a-z0-9-:]+)(?:=("(?:[^"]*)"|'(?:[^']*)'|[^\s>]+))?/gi;
const TAG_REGEX = /<\/?([a-z0-9-]+)([^>]*)>/gi;

function sanitizeHtml(html: string, allowedTags?: string[]) {
  if (!allowedTags || allowedTags.length === 0) {
    return html;
  }
  const allowed = new Set(allowedTags.map((tag) => tag.toLowerCase()));
  return html.replace(TAG_REGEX, (match, rawTag: string, rawAttrs: string) => {
    const tag = rawTag.toLowerCase();
    const isClosing = match.startsWith("</");
    if (!allowed.has(tag)) {
      return "";
    }
    if (tag === "br") {
      return isClosing ? "" : "<br />";
    }
    if (isClosing) {
      return `</${tag}>`;
    }

    if (!rawAttrs) {
      return `<${tag}>`;
    }

    const preservedAttrs: string[] = [];
    rawAttrs.replace(ATTRIBUTE_REGEX, (_, attrName: string, attrValue = "") => {
      const name = attrName.toLowerCase();
      if (EVENT_ATTR_REGEX.test(name)) {
        return "";
      }
      if (name === "style" || name === "class" || name.startsWith("data-")) {
        preservedAttrs.push(`${name}${attrValue ? `=${attrValue}` : ""}`);
      }
      return "";
    });

    const attrsString =
      preservedAttrs.length > 0 ? ` ${preservedAttrs.join(" ")}` : "";
    return `<${tag}${attrsString}>`;
  });
}

export function RichText({
  html,
  className,
  as = "div",
  allowedTags,
}: RichTextProps) {
  if (!html) return null;
  const Component = as as keyof JSX.IntrinsicElements;
  const sanitizedHtml = sanitizeHtml(html, allowedTags);
  return <Component className={className} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
