'use client';

import { motion } from 'framer-motion';

// "Scena del contenzioso": il problema reso come confronto reale. Le accuse del
// cliente entrano una a una (chat-bubble), poi la tua parola contro la sua e la
// frase che colpisce. Niente card numerate da template.
const COPY: Record<string, { client: string; bubbles: string[]; you: string; line: string; punch: string }> = {
  it: { client: 'Il cliente', bubbles: ['Il lavoro non è stato completato.', 'Gli orari non tornano.', 'Questo non lo pago.'], you: 'Tu', line: 'La tua parola contro la sua.', punch: 'E spesso vince lui.' },
  en: { client: 'The client', bubbles: ["The job wasn't completed.", "The hours don't add up.", "I'm not paying for this."], you: 'You', line: 'Your word against theirs.', punch: 'And they usually win.' },
  de: { client: 'Der Kunde', bubbles: ['Die Arbeit wurde nicht abgeschlossen.', 'Die Zeiten stimmen nicht.', 'Das bezahle ich nicht.'], you: 'Du', line: 'Deine Aussage gegen seine.', punch: 'Und meistens gewinnt er.' },
  fr: { client: 'Le client', bubbles: ["Le travail n'a pas été terminé.", 'Les horaires ne correspondent pas.', 'Ça, je ne le paie pas.'], you: 'Vous', line: 'Votre parole contre la sienne.', punch: "Et c'est souvent lui qui gagne." },
  es: { client: 'El cliente', bubbles: ['El trabajo no se completó.', 'Los horarios no cuadran.', 'Esto no lo pago.'], you: 'Tú', line: 'Tu palabra contra la suya.', punch: 'Y suele ganar él.' },
  pt: { client: 'O cliente', bubbles: ['O trabalho não foi concluído.', 'Os horários não batem certo.', 'Isto não vou pagar.'], you: 'Você', line: 'A sua palavra contra a dele.', punch: 'E quem costuma ganhar é ele.' },
  nl: { client: 'De klant', bubbles: ['Het werk is niet afgerond.', 'De uren kloppen niet.', 'Dit betaal ik niet.'], you: 'Jij', line: 'Jouw woord tegen het zijne.', punch: 'En meestal wint hij.' },
  ru: { client: 'Клиент', bubbles: ['Работа не была выполнена.', 'Часы не сходятся.', 'За это я не плачу.'], you: 'Вы', line: 'Ваше слово против его слова.', punch: 'И обычно выигрывает он.' },
  da: { client: 'Kunden', bubbles: ['Arbejdet blev ikke udført.', 'Timerne stemmer ikke.', 'Det her betaler jeg ikke.'], you: 'Dig', line: 'Dit ord mod hans.', punch: 'Og som regel vinder han.' },
  sv: { client: 'Kunden', bubbles: ['Jobbet blev inte slutfört.', 'Tiderna stämmer inte.', 'Det här betalar jag inte.'], you: 'Du', line: 'Ditt ord mot hans.', punch: 'Och oftast vinner han.' },
  nb: { client: 'Kunden', bubbles: ['Jobben ble ikke fullført.', 'Timene stemmer ikke.', 'Dette betaler jeg ikke.'], you: 'Du', line: 'Ditt ord mot hans.', punch: 'Og som regel vinner han.' },
};

export default function DisputeScene({ locale, title, subtitle }: { locale: string; title: string; subtitle: string }) {
  const c = COPY[locale] ?? COPY.en;

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-text-secondary font-light">{subtitle}</p>
        </div>

        {/* Le accuse del cliente */}
        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">{c.client}</p>
        <div className="space-y-3">
          {c.bubbles.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.28, type: 'spring', stiffness: 120, damping: 16 }}
              className={i % 2 === 1 ? 'flex justify-end' : 'flex justify-start'}
            >
              <div className="relative max-w-[82%] bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm text-slate-800 text-base md:text-lg">
                <span className="text-slate-300 mr-1">&ldquo;</span>{b}<span className="text-slate-300 ml-1">&rdquo;</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* La tua parola contro la sua */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.95 }}
          className="mt-12 text-center"
        >
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">{c.you}</p>
          <div className="mx-auto w-44 border-t-2 border-dashed border-slate-300 mb-5" />
          <p className="text-lg text-slate-500">{c.line}</p>
          <p className="text-2xl md:text-3xl font-bold text-rose-600 mt-2">{c.punch}</p>
        </motion.div>
      </div>
    </section>
  );
}
