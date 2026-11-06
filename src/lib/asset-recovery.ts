/**
 * Se un CSS o un JS del sito non arriva, la pagina si ricarica da sola.
 *
 * Ogni deploy cambia i nomi dei file in /_next/static e cancella i vecchi. Chrome
 * pero' riprende dal disco l'HTML di una pagina gia' vista senza chiedere niente
 * al server quando si torna indietro o si ripristina una scheda, e lo fa con
 * qualsiasi Cache-Control tranne no-store (provato il 06/11/2026, anche con
 * max-age=0, must-revalidate). Quell'HTML chiede file che non esistono piu': 404,
 * pagina senza stile, finche' non si ricarica. Le intestazioni non lo possono
 * evitare, e no-store costerebbe il ritorno istantaneo alle pagine gia' viste.
 *
 * Quindi la cura e' quella che faceva gia' chi ricaricava a mano, ma prima che
 * si veda: si nasconde la pagina e si ricarica. Due tentativi al massimo per
 * pagina in un minuto: il secondo aspetta due secondi, per il caso in cui il
 * file manchi perche' il deploy si sta ancora propagando. Se manca davvero, la
 * pagina torna visibile cosi' com'e' e non si gira in tondo.
 *
 * Il JS conta solo finche' la pagina si sta caricando: dopo, un 404 viene dai
 * precaricamenti di altre pagine, che non rompono quella aperta. Per lo stesso
 * motivo i <link rel="preload"> non contano.
 *
 * Deve stare inline e senza dipendenze: i file esterni sono proprio quelli che
 * possono mancare. Va in ogni layout con <html>, vedi AssetRecoveryScript.
 */
export const ASSET_RECOVERY_SCRIPT = `(function(){
var KEY='gt-asset-reload',MAX=2,FINESTRA=60000,PAUSA=2000,avviato=false,radice=document.documentElement;
function nostro(u){return typeof u==='string'&&u.indexOf('/_next/static/')!==-1}
function recupera(){
if(avviato)return;
avviato=true;
var ora=Date.now(),via=location.pathname,fatti=0;
try{
var s=JSON.parse(sessionStorage.getItem(KEY)||'{}');
if(s.p===via&&ora-s.t<FINESTRA)fatti=s.n||0;
if(fatti>=MAX)return;
sessionStorage.setItem(KEY,JSON.stringify({p:via,t:ora,n:fatti+1}));
}catch(e){return}
radice.style.visibility='hidden';
setTimeout(function(){location.reload()},fatti*PAUSA);
}
addEventListener('error',function(e){
var t=e.target;
if(!t||!t.tagName)return;
if(t.tagName==='LINK'){if(t.rel==='stylesheet'&&!t.disabled&&nostro(t.href))recupera()}
else if(t.tagName==='SCRIPT'&&document.readyState!=='complete'&&nostro(t.src))recupera();
},true);
addEventListener('load',function(){
var l=document.querySelectorAll('link[rel="stylesheet"]');
for(var i=0;i<l.length;i++)if(!l[i].disabled&&!l[i].sheet&&nostro(l[i].href))recupera();
});
addEventListener('pageshow',function(e){if(e.persisted){avviato=false;radice.style.visibility=''}});
})();`;
