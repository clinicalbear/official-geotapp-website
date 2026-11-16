import Link from 'next/link';
import './novita-strumenti.css';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { SettoreSlug } from '@/content/settori/types';
import { getNovitaCopy } from '@/content/settori/novita';
import { COMMON_TOOLS, HERO_TOOL, IMPIANTI_RIMANDI, SETTORE_TOOLS, TOOL_SHOTS, shotSrc } from '@/content/settori/novita/registry';
import type { NovitaCopy, ToolKey } from '@/content/settori/novita/types';
import { HeroShots, ToolMedia, type Shot } from './NovitaMedia';

function alt(tpl: string, tool: string, i: number, n: number) {
  const a = tpl.replace('{tool}', tool);
  return n > 1 ? `${a} (${i + 1}/${n})` : a;
}

/** Schermate di uno strumento, con testo alternativo e didascalia (dalla scheda comune, se c'e'). */
function shotsOf(k: ToolKey, copy: NovitaCopy, locale: AppLocale): { flow: Shot[]; phone: Shot[] } {
  const title = copy.tools[k].title;
  const s = TOOL_SHOTS[k];
  const make = (kind: Shot['kind'], ids: string[]): Shot[] =>
    ids.map((id, i) => ({
      id,
      kind,
      src: shotSrc(locale, id),
      alt: copy.shots[id] ?? alt(kind === 'flow' ? copy.ui.altFlow : copy.ui.altPhone, title, i, ids.length),
      caption: copy.shots[id],
    }));
  return { flow: make('flow', s.flow), phone: make('phone', s.phone) };
}

/**
 * Immagine dell'hero: la schermata Flow dello strumento di apertura e, sfalsato in basso a
 * destra, il telefono con la schermata TimeTracker dello stesso strumento.
 */
export async function NovitaHero({ settore, locale }: { settore: SettoreSlug; locale: AppLocale }) {
  const k = HERO_TOOL[settore];
  if (!k) return null;
  const copy = await getNovitaCopy(locale);
  const { flow, phone } = shotsOf(k, copy, locale);
  if (!flow[0]) return null;
  return <HeroShots flow={flow[0]} phone={phone[0]} />;
}

function Tool({ k, copy, locale, rev, common }: { k: ToolKey; copy: NovitaCopy; locale: AppLocale; rev: boolean; common?: boolean }) {
  const t = copy.tools[k];
  const { flow, phone } = shotsOf(k, copy, locale);
  const ui = copy.ui;
  return (
    <article className={`nv-tool${rev ? ' nv-rev' : ''}`} id={`strumento-${k}`}>
      <div className="nv-text">
        {common ? <p className="nv-tag">{ui.allSectors}</p> : null}
        <h3>{t.title}</h3>
        <p>{t.body}</p>
        {t.note ? <p className="nv-note">{t.note}</p> : null}
        {phone.length === 0 ? <p className="nv-flowonly">{ui.flowOnly}</p> : null}
      </div>
      <ToolMedia
        flow={flow}
        phone={phone}
        labels={{
          moreShots: ui.moreShots,
          enlarge: ui.enlarge,
          close: ui.close,
          prev: ui.prev,
          next: ui.next,
          flowCaption: ui.flowCaption,
          phoneCaption: ui.phoneCaption,
        }}
      />
    </article>
  );
}

/**
 * Cuore della pagina di settore: una fascia per strumento, con le schermate vere. Server
 * component: i testi per lingua restano sul server (la pagina e' un componente client e li
 * riceve gia' resi).
 */
export default async function NovitaStrumenti({ settore, locale }: { settore: SettoreSlug; locale: AppLocale }) {
  const def = SETTORE_TOOLS[settore];
  if (!def) return null;
  const copy = await getNovitaCopy(locale);
  const sec = copy.sections[def.section];
  const tools = [...def.tools, ...COMMON_TOOLS.filter((k) => !def.tools.includes(k))];
  const dict = getDictionary(locale) as any;
  return (
    <section className="sec nv-novita st-alt" id="nuovi-strumenti">
      <div className="w">
        <div className="st-head nv-head">
          <div>
            <p className="kk k">{copy.ui.kicker}</p>
            <h2>{sec.title}</h2>
          </div>
          <p className="nv-intro">{sec.intro}</p>
        </div>
        {tools.map((k, i) => (
          <Tool key={k} k={k} copy={copy} locale={locale} rev={i % 2 === 1} common={!def.tools.includes(k)} />
        ))}
        {sec.outro ? <p className="nv-intro nv-outro">{sec.outro}</p> : null}
        {def.section === 'impianti' ? (
          <p className="nv-links">
            <span>{copy.ui.seeAlso}</span>
            {IMPIANTI_RIMANDI.map((s) => (
              <Link key={s} href={localizePath(`/settori/${s}`, locale)}>
                {dict?.navbar?.sectors?.[s] ?? s}
              </Link>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  );
}
