/**
 * Nastro che scorre della direzione L, nei tre colori del marchio.
 * Le parole sono quelle delle garanzie gia' pubblicate sul sito.
 */
const VOCI = [
  ['PROVA GPS', ''],
  ['REPORT SIGILLATO', 'g'],
  ['VERIFICA INDIPENDENTE', 'b'],
  ['NESSUNA SORVEGLIANZA', ''],
  ['DATI IN EUROPA', 'g'],
  ['FUNZIONA OFFLINE', 'b'],
];

export default function LNastro() {
  const giro = [...VOCI, ...VOCI];
  return (
    <div className="l-tape">
      <div className="run">
        {giro.map(([t, c], i) => (
          <span key={i} className={c}>{t}</span>
        ))}
      </div>
    </div>
  );
}
