import type * as React from "react";

type RichTextProps = {
  html?: string | null;
  className?: string;
  as?: React.ElementType;
  allowedTags?: string[];
};

const EVENT_ATTR_REGEX = /^on/i;
const ATTRIBUTE_REGEX = /\s+([a-z0-9-:]+)(?:=("(?:[^"]*)"|'(?:[^']*)'|[^\s>]+))?/gi;
const TAG_REGEX = /<\/?([a-z0-9-]+)([^>]*)>/gi;

const DEFAULT_ALLOWED_TAGS = ["p", "br", "strong", "b", "em", "i", "u", "span", "div", "a", "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6"];

function sanitizeHtml(html: string, allowedTags?: string[]) {
  const tagsToAllow = allowedTags && allowedTags.length > 0 ? allowedTags : DEFAULT_ALLOWED_TAGS;
  if (!tagsToAllow || tagsToAllow.length === 0) {
    return html;
  }
  const allowed = new Set(tagsToAllow.map((tag) => tag.toLowerCase()));
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
  const Component: React.ElementType = as as React.ElementType;

  const sanitizedHtml = sanitizeHtml(html, allowedTags);
  return (
    <Component
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
