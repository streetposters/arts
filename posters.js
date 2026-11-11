/* ---------- Data + generated poster art (original, monochrome) ----------
   To use real poster photos later, add  img:"posters/07.jpg"  to any entry in P. */
const TONES={
  light:{bg:"#fbfbfb",fg:"#0c0c0d",g1:"#8b8b92",g2:"#dcdce0"},
  dark:{bg:"#0c0c0d",fg:"#f3f3f4",g1:"#7a7a82",g2:"#26262a"},
  mid:{bg:"#d6d6da",fg:"#0c0c0d",g1:"#6c6c73",g2:"#efeff1"}
};
const CATS=[
  {id:"cars",ar:"سيارات",en:"Cars",code:"CAR"},
  {id:"sports",ar:"رياضة",en:"Sports",code:"SPT"},
  {id:"gaming",ar:"ألعاب",en:"Gaming",code:"GAM"},
  {id:"anime",ar:"أنمي",en:"Anime",code:"ANI"},
  {id:"motorcyles",ar:"دراجات نارية",en:"Motorcycles",code:"MOT"},
  {id:"expressions",ar:"عبارات",en:"Expressions",code:"EXP"},
  {id:"boys",ar:"أولاد",en:"Boys",code:"BOY"},
  {id:"girls",ar:"بنات",en:"Girls",code:"GRL"},
  {id:"others",ar:"أخرى",en:"Others",code:"OTH"}
];
const PER_CAT=36;   /* 3 pages x 12 posters */
 
const IMAGES={
  cars:[
    "posters.cars/cars1.jpg",
    "posters.cars/cars2.jpg",
    "posters.cars/cars3.jpg",
    "posters.cars/cars4.jpg",
    "posters.cars/cars5.jpg",
    "posters.cars/cars6.jpg",
    "posters.cars/cars7.jpg",
    "posters.cars/cars8.jpg",
    "posters.cars/cars9.jpg",
    "posters.cars/cars10.jpg",
    "posters.cars/cars11.jpg",
    "posters.cars/cars12.jpg",
    "posters.cars/cars13.jpg",
    "posters.cars/cars14.jpg",
    "posters.cars/cars15.jpg",
    "posters.cars/cars16.jpg",
    "posters.cars/cars17.jpg",
    "posters.cars/cars18.jpg",
    "posters.cars/cars19.jpg",
    "posters.cars/cars20.jpg",
    "posters.cars/cars21.jpg",
    "posters.cars/cars22.jpg",
    "posters.cars/cars23.jpg",
    "posters.cars/cars24.jpg",
    "posters.cars/cars25.jpg",
    "posters.cars/cars26.jpg",
    "posters.cars/cars27.jpg",
    "posters.cars/cars28.jpg",
    "posters.cars/cars29.jpg",
    "posters.cars/cars30.jpg",
    "posters.cars/cars31.jpg",
    "posters.cars/cars32.jpg",
    "posters.cars/cars33.jpg",
    "posters.cars/cars34.jpg",
    "posters.cars/cars35.jpg",
    "posters.cars/cars36.jpg"
  ],
  sports:[
    "posters.sports/sports1.jpg",
    "posters.sports/sports2.jpg",
    "posters.sports/sports3.jpg",
    "posters.sports/sports4.jpg",
    "posters.sports/sports5.jpg",
    "posters.sports/sports6.jpg",
    "posters.sports/sports7.jpg",
    "posters.sports/sports8.jpg",
    "posters.sports/sports9.jpg",
    "posters.sports/sports10.jpg",
    "posters.sports/sports11.jpg",
    "posters.sports/sports12.jpg",
    "posters.sports/sports13.jpg",
    "posters.sports/sports14.jpg",
    "posters.sports/sports15.jpg",
    "posters.sports/sports16.jpg",
    "posters.sports/sports17.jpg",
    "posters.sports/sports18.jpg",
    "posters.sports/sports19.jpg",
    "posters.sports/sports20.jpg",
    "posters.sports/sports21.jpg",
    "posters.sports/sports22.jpg",
    "posters.sports/sports23.jpg",
    "posters.sports/sports24.jpg",
    "posters.sports/sports25.jpg",
    "posters.sports/sports26.jpg",
    "posters.sports/sports27.jpg",
    "posters.sports/sports28.jpg",
    "posters.sports/sports29.jpg",
    "posters.sports/sports30.jpg",
    "posters.sports/sports31.jpg",
    "posters.sports/sports32.jpg",
    "posters.sports/sports33.jpg",
    "posters.sports/sports34.jpg",
    "posters.sports/sports35.jpg",
    "posters.sports/sports36.jpg"
  ],
  gaming:[
    "posters.gaming/gaming1.jpg",
    "posters.gaming/gaming2.jpg",
    "posters.gaming/gaming3.jpg",
    "posters.gaming/gaming4.jpg",
    "posters.gaming/gaming5.jpg",
    "posters.gaming/gaming6.jpg",
    "posters.gaming/gaming7.jpg",
    "posters.gaming/gaming8.jpg",
    "posters.gaming/gaming9.jpg",
    "posters.gaming/gaming10.jpg",
    "posters.gaming/gaming11.jpg",
    "posters.gaming/gaming12.jpg",
    "posters.gaming/gaming13.jpg",
    "posters.gaming/gaming14.jpg",
    "posters.gaming/gaming15.jpg",
    "posters.gaming/gaming16.jpg",
    "posters.gaming/gaming17.jpg",
    "posters.gaming/gaming18.jpg",
    "posters.gaming/gaming19.jpg",
    "posters.gaming/gaming20.jpg",
    "posters.gaming/gaming21.jpg",
    "posters.gaming/gaming22.jpg",
    "posters.gaming/gaming23.jpg",
    "posters.gaming/gaming24.jpg",
    "posters.gaming/gaming25.jpg",
    "posters.gaming/gaming26.jpg",
    "posters.gaming/gaming27.jpg",
    "posters.gaming/gaming28.jpg",
    "posters.gaming/gaming29.jpg",
    "posters.gaming/gaming30.jpg",
    "posters.gaming/gaming31.jpg",
    "posters.gaming/gaming32.jpg",
    "posters.gaming/gaming33.jpg",
    "posters.gaming/gaming34.jpg",
    "posters.gaming/gaming35.jpg",
    "posters.gaming/gaming36.jpg"
  ],
  anime:[
    "posters.anime/anime1.jpg",
    "posters.anime/anime2.jpg",
    "posters.anime/anime3.jpg",
    "posters.anime/anime4.jpg",
    "posters.anime/anime5.jpg",
    "posters.anime/anime6.jpg",
    "posters.anime/anime7.jpg",
    "posters.anime/anime8.jpg",
    "posters.anime/anime9.jpg",
    "posters.anime/anime10.jpg",
    "posters.anime/anime11.jpg",
    "posters.anime/anime12.jpg",
    "posters.anime/anime13.jpg",
    "posters.anime/anime14.jpg",
    "posters.anime/anime15.jpg",
    "posters.anime/anime16.jpg",
    "posters.anime/anime17.jpg",
    "posters.anime/anime18.jpg",
    "posters.anime/anime19.jpg",
    "posters.anime/anime20.jpg",
    "posters.anime/anime21.jpg",
    "posters.anime/anime22.jpg",
    "posters.anime/anime23.jpg",
    "posters.anime/anime24.jpg",
    "posters.anime/anime25.jpg",
    "posters.anime/anime26.jpg",
    "posters.anime/anime27.jpg",
    "posters.anime/anime28.jpg",
    "posters.anime/anime29.jpg",
    "posters.anime/anime30.jpg",
    "posters.anime/anime31.jpg",
    "posters.anime/anime32.jpg",
    "posters.anime/anime33.jpg",
    "posters.anime/anime34.jpg",
    "posters.anime/anime35.jpg",
    "posters.anime/anime36.jpg"
  ],
  motorcyles:[
    "posters.motorcyles/motorcyles1.jpg",
    "posters.motorcyles/motorcyles2.jpg",
    "posters.motorcyles/motorcyles3.jpg",
    "posters.motorcyles/motorcyles4.jpg",
    "posters.motorcyles/motorcyles5.jpg",
    "posters.motorcyles/motorcyles6.jpg",
    "posters.motorcyles/motorcyles7.jpg",
    "posters.motorcyles/motorcyles8.jpg",
    "posters.motorcyles/motorcyles9.jpg",
    "posters.motorcyles/motorcyles10.jpg",
    "posters.motorcyles/motorcyles11.jpg",
    "posters.motorcyles/motorcyles12.jpg",
    "posters.motorcyles/motorcyles13.jpg",
    "posters.motorcyles/motorcyles14.jpg",
    "posters.motorcyles/motorcyles15.jpg",
    "posters.motorcyles/motorcyles16.jpg",
    "posters.motorcyles/motorcyles17.jpg",
    "posters.motorcyles/motorcyles18.jpg",
    "posters.motorcyles/motorcyles19.jpg",
    "posters.motorcyles/motorcyles20.jpg",
    "posters.motorcyles/motorcyles21.jpg",
    "posters.motorcyles/motorcyles22.jpg",
    "posters.motorcyles/motorcyles23.jpg",
    "posters.motorcyles/motorcyles24.jpg",
    "posters.motorcyles/motorcyles25.jpg",
    "posters.motorcyles/motorcyles26.jpg",
    "posters.motorcyles/motorcyles27.jpg",
    "posters.motorcyles/motorcyles28.jpg",
    "posters.motorcyles/motorcyles29.jpg",
    "posters.motorcyles/motorcyles30.jpg",
    "posters.motorcyles/motorcyles31.jpg",
    "posters.motorcyles/motorcyles32.jpg",
    "posters.motorcyles/motorcyles33.jpg",
    "posters.motorcyles/motorcyles34.jpg",
    "posters.motorcyles/motorcyles35.jpg",
    "posters.motorcyles/motorcyles36.jpg"
  ],
  expressions:[
    "posters.expressions/expressions1.jpg",
    "posters.expressions/expressions2.jpg",
    "posters.expressions/expressions3.jpg",
    "posters.expressions/expressions4.jpg",
    "posters.expressions/expressions5.jpg",
    "posters.expressions/expressions6.jpg",
    "posters.expressions/expressions7.jpg",
    "posters.expressions/expressions8.jpg",
    "posters.expressions/expressions9.jpg",
    "posters.expressions/expressions10.jpg",
    "posters.expressions/expressions11.jpg",
    "posters.expressions/expressions12.jpg",
    "posters.expressions/expressions13.jpg",
    "posters.expressions/expressions14.jpg",
    "posters.expressions/expressions15.jpg",
    "posters.expressions/expressions16.jpg",
    "posters.expressions/expressions17.jpg",
    "posters.expressions/expressions18.jpg",
    "posters.expressions/expressions19.jpg",
    "posters.expressions/expressions20.jpg",
    "posters.expressions/expressions21.jpg",
    "posters.expressions/expressions22.jpg",
    "posters.expressions/expressions23.jpg",
    "posters.expressions/expressions24.jpg",
    "posters.expressions/expressions25.jpg",
    "posters.expressions/expressions26.jpg",
    "posters.expressions/expressions27.jpg",
    "posters.expressions/expressions28.jpg",
    "posters.expressions/expressions29.jpg",
    "posters.expressions/expressions30.jpg",
    "posters.expressions/expressions31.jpg",
    "posters.expressions/expressions32.jpg",
    "posters.expressions/expressions33.jpg",
    "posters.expressions/expressions34.jpg",
    "posters.expressions/expressions35.jpg",
    "posters.expressions/expressions36.jpg"
  ],
  boys:[
    "posters.boys/boys1.jpg",
    "posters.boys/boys2.jpg",
    "posters.boys/boys3.jpg",
    "posters.boys/boys4.jpg",
    "posters.boys/boys5.jpg",
    "posters.boys/boys6.jpg",
    "posters.boys/boys7.jpg",
    "posters.boys/boys8.jpg",
    "posters.boys/boys9.jpg",
    "posters.boys/boys10.jpg",
    "posters.boys/boys11.jpg",
    "posters.boys/boys12.jpg",
    "posters.boys/boys13.jpg",
    "posters.boys/boys14.jpg",
    "posters.boys/boys15.jpg",
    "posters.boys/boys16.jpg",
    "posters.boys/boys17.jpg",
    "posters.boys/boys18.jpg",
    "posters.boys/boys19.jpg",
    "posters.boys/boys20.jpg",
    "posters.boys/boys21.jpg",
    "posters.boys/boys22.jpg",
    "posters.boys/boys23.jpg",
    "posters.boys/boys24.jpg",
    "posters.boys/boys25.jpg",
    "posters.boys/boys26.jpg",
    "posters.boys/boys27.jpg",
    "posters.boys/boys28.jpg",
    "posters.boys/boys29.jpg",
    "posters.boys/boys30.jpg",
    "posters.boys/boys31.jpg",
    "posters.boys/boys32.jpg",
    "posters.boys/boys33.jpg",
    "posters.boys/boys34.jpg",
    "posters.boys/boys35.jpg",
    "posters.boys/boys36.jpg"
  ],
  girls:[
    "posters.girls/girls1.jpg",
    "posters.girls/girls2.jpg",
    "posters.girls/girls3.jpg",
    "posters.girls/girls4.jpg",
    "posters.girls/girls5.jpg",
    "posters.girls/girls6.jpg",
    "posters.girls/girls7.jpg",
    "posters.girls/girls8.jpg",
    "posters.girls/girls9.jpg",
    "posters.girls/girls10.jpg",
    "posters.girls/girls11.jpg",
    "posters.girls/girls12.jpg",
    "posters.girls/girls13.jpg",
    "posters.girls/girls14.jpg",
    "posters.girls/girls15.jpg",
    "posters.girls/girls16.jpg",
    "posters.girls/girls17.jpg",
    "posters.girls/girls18.jpg",
    "posters.girls/girls19.jpg",
    "posters.girls/girls20.jpg",
    "posters.girls/girls21.jpg",
    "posters.girls/girls22.jpg",
    "posters.girls/girls23.jpg",
    "posters.girls/girls24.jpg",
    "posters.girls/girls25.jpg",
    "posters.girls/girls26.jpg",
    "posters.girls/girls27.jpg",
    "posters.girls/girls28.jpg",
    "posters.girls/girls29.jpg",
    "posters.girls/girls30.jpg",
    "posters.girls/girls31.jpg",
    "posters.girls/girls32.jpg",
    "posters.girls/girls33.jpg",
    "posters.girls/girls34.jpg",
    "posters.girls/girls35.jpg",
    "posters.girls/girls36.jpg"
  ],
  others:[
    "posters.others/others1.jpg",
    "posters.others/others2.jpg",
    "posters.others/others3.jpg",
    "posters.others/others4.jpg",
    "posters.others/others5.jpg",
    "posters.others/others6.jpg",
    "posters.others/others7.jpg",
    "posters.others/others8.jpg",
    "posters.others/others9.jpg",
    "posters.others/others10.jpg",
    "posters.others/others11.jpg",
    "posters.others/others12.jpg",
    "posters.others/others13.jpg",
    "posters.others/others14.jpg",
    "posters.others/others15.jpg",
    "posters.others/others16.jpg",
    "posters.others/others17.jpg",
    "posters.others/others18.jpg",
    "posters.others/others19.jpg",
    "posters.others/others20.jpg",
    "posters.others/others21.jpg",
    "posters.others/others22.jpg",
    "posters.others/others23.jpg",
    "posters.others/others24.jpg",
    "posters.others/others25.jpg",
    "posters.others/others26.jpg",
    "posters.others/others27.jpg",
    "posters.others/others28.jpg",
    "posters.others/others29.jpg",
    "posters.others/others30.jpg",
    "posters.others/others31.jpg",
    "posters.others/others32.jpg",
    "posters.others/others33.jpg",
    "posters.others/others34.jpg",
    "posters.others/others35.jpg",
    "posters.others/others36.jpg"
  ],
};
 
const COVERS={
  cars:"interface/interface8.png",
  sports:"interface/interface7.png",
  gaming:"interface/interface.png",
  anime:"interface/interface1.png",
  motorcyles:"interface/interface2.png",
  expressions:"interface/interface3.png",
  boys:"interface/interface4.png",
  girls:"interface/interface5.png",
  others:"interface/interface6.png",
};
 
const COVER_ART={cars:"road",sports:"pitch",gaming:"sprite",anime:"moon",motorcycles:"wheel",expressions:"quote",boys:"pole",girls:"bloom",others:"mountains"};
 
const PHRASES=[
  {ar:["هدوء كثير،","وعمل أكثر"],en:["QUIET MIND.","LOUD WORK."]},
  {ar:["كل صباح","صفحة جديدة"],en:["EVERY MORNING,","A BLANK PAGE."]},
  {ar:["اصنع مساحتك","الخاصة"],en:["MAKE ROOM","FOR YOUR OWN."]},
  {ar:["خطوة صغيرة","كل يوم"],en:["ONE SMALL STEP","EVERY DAY."]},
  {ar:["الصبر","مفتاح الفرج"],en:["PATIENCE","OPENS DOORS."]},
  {ar:["كن أنت","دائماً"],en:["ALWAYS","BE YOU."]},
  {ar:["ابدأ الآن","ولا تنتظر"],en:["START NOW.","DON'T WAIT."]},
  {ar:["الحلم يبدأ","بالعمل"],en:["DREAMS START","WITH ACTION."]},
  {ar:["ما يستحق","يستحق التعب"],en:["WHAT MATTERS","TAKES EFFORT."]},
  {ar:["قلب هادئ","وعقل صافٍ"],en:["CALM HEART.","CLEAR MIND."]},
  {ar:["لا تتوقف","حتى تفخر"],en:["DON'T STOP","TILL PROUD."]},
  {ar:["النجاح","عادة"],en:["SUCCESS","IS A HABIT."]}
];
const THEMED={
  cars:["road","wheel","speed"],sports:["pitch","court","track"],gaming:["sprite","pad"],
  anime:["moon","sprite","reel"],motorcycles:["wheel","speed","road"],boys:["pole","scissors","mirror"],
  girls:["bloom","arches","moon"],others:["mountains","waves","phases","star","mihrab","calli"]
};
const FILL=["star","calli","beam","clapper","reel","vinyl","wave","eq","pole","scissors","mirror","bloom","arches","moon","mountains","waves","phases","pitch","court","track","sprite","pad","road","wheel","speed","mihrab"];
const TN=["light","dark","mid"];
const P=[];
CATS.forEach((c,ci)=>{
  const pool=(THEMED[c.id]||[]).slice();
  FILL.forEach(a=>{if(pool.length<12&&!pool.includes(a))pool.push(a)});
  for(let i=1;i<=PER_CAT;i++){
    const k=(i-1)%12,t=Math.floor((i-1)/12);
    const p={cat:c.id,i:i,n:ci*PER_CAT+i,code:c.code+"-"+String(i).padStart(2,"0"),ar:" بوستر "+i,en:c.en,tone:TN[(t+k)%3]};
    if(c.id==="expressions"){p.art="quote";p.q=PHRASES[k]}else p.art=pool[k];
    const img=(IMAGES[c.id]||[])[i-1];
    if(img)p.img=img;
    P.push(p);
  }
});
 
function rng(seed){let a=seed>>>0;return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const pad=n=>String(n).padStart(2,"0");
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const r1=n=>Math.round(n*10)/10;
const MONO="font-family:'IBM Plex Mono',monospace";
const KUFI="font-family:'Reem Kufi','IBM Plex Sans Arabic',sans-serif";
function sparkle(x,y,s,f){return `<path d="M${x} ${y-s}Q${x} ${y} ${x+s} ${y}Q${x} ${y} ${x} ${y+s}Q${x} ${y} ${x-s} ${y}Q${x} ${y} ${x} ${y-s}Z" fill="${f}"/>`}
function star8(cx,cy,R,r){const pts=[];for(let i=0;i<16;i++){const a=Math.PI/8*i-Math.PI/2;const d=i%2?r:R;pts.push(r1(cx+d*Math.cos(a))+","+r1(cy+d*Math.sin(a)))}return pts.join(" ")}
function arch(cx,base,w,apex){const x1=cx-w/2,x2=cx+w/2,ys=apex+w*0.9,cy=apex+(ys-apex)*0.5;return `M${x1} ${base}V${ys}Q${x1} ${cy} ${cx} ${apex}Q${x2} ${cy} ${x2} ${ys}V${base}Z`}
 
/* Each motif draws inside a 300 x 372 area; the caption band sits below. */
const ART={
road(c,u){
  let s=`<defs><clipPath id="c${u}"><rect width="300" height="200"/></clipPath></defs><g clip-path="url(#c${u})"><circle cx="150" cy="138" r="76" fill="${c.fg}"/>`;
  for(let i=0;i<7;i++)s+=`<rect x="60" y="${128+i*11}" width="180" height="${r1(1.5+i*1.3)}" fill="${c.bg}"/>`;
  s+=`</g><line x1="0" y1="200" x2="300" y2="200" stroke="${c.fg}" stroke-width="1.6"/>`;
  for(let i=-8;i<=8;i++)s+=`<line x1="150" y1="200" x2="${150+i*64}" y2="372" stroke="${c.fg}" stroke-width="1"/>`;
  for(let k=1;k<=6;k++){const y=r1(200+172*Math.pow(k/6,1.8));s+=`<line x1="0" x2="300" y1="${y}" y2="${y}" stroke="${c.g1}" stroke-width="1"/>`}
  return s;
},
wheel(c){
  let s=`<circle cx="150" cy="180" r="126" fill="none" stroke="${c.fg}" stroke-width="20"/><circle cx="150" cy="180" r="108" fill="none" stroke="${c.g1}" stroke-width="1.5"/>`;
  for(let i=0;i<12;i++){const a=i*Math.PI/6;s+=`<line x1="${r1(150+30*Math.cos(a))}" y1="${r1(180+30*Math.sin(a))}" x2="${r1(150+100*Math.cos(a))}" y2="${r1(180+100*Math.sin(a))}" stroke="${c.fg}" stroke-width="${i%2?3:6}" stroke-linecap="round"/>`}
  s+=`<circle cx="150" cy="180" r="28" fill="${c.fg}"/><circle cx="150" cy="180" r="12" fill="${c.bg}"/>`;
  for(let i=0;i<5;i++){const a=i*Math.PI*2/5-Math.PI/2;s+=`<circle cx="${r1(150+20*Math.cos(a))}" cy="${r1(180+20*Math.sin(a))}" r="2.6" fill="${c.bg}"/>`}
  return s;
},
speed(c,u,p){
  const r=rng(p.n*97);let s="";
  for(let i=0;i<15;i++){const h=2+Math.round(r()*8),x1=r1(20+r()*120),x2=r1(170+r()*110),y=26+i*22;s+=`<rect x="${x1}" y="${y}" width="${r1(x2-x1)}" height="${h}" rx="${h/2}" fill="${i%4===0?c.g1:c.fg}"/>`}
  s+=`<circle cx="226" cy="190" r="54" fill="${c.bg}"/><circle cx="226" cy="190" r="46" fill="none" stroke="${c.fg}" stroke-width="3"/><circle cx="226" cy="190" r="14" fill="${c.fg}"/>`;
  return s;
},
pitch(c){
  let s=`<g fill="none" stroke="${c.fg}" stroke-width="2"><rect x="36" y="30" width="228" height="312"/><line x1="36" y1="186" x2="264" y2="186"/><circle cx="150" cy="186" r="36"/><rect x="84" y="30" width="132" height="54"/><rect x="116" y="30" width="68" height="20"/><rect x="84" y="288" width="132" height="54"/><rect x="116" y="322" width="68" height="20"/><path d="M120 84A36 36 0 0 0 180 84"/><path d="M120 288A36 36 0 0 1 180 288"/></g>`;
  s+=`<circle cx="150" cy="186" r="4" fill="${c.fg}"/><circle cx="182" cy="240" r="10" fill="${c.fg}"/>`;
  return s;
},
court(c){
  return `<g fill="none" stroke="${c.fg}" stroke-width="2"><rect x="40" y="30" width="220" height="312"/><path d="M110 30A40 40 0 0 0 190 30"/><rect x="110" y="202" width="80" height="140"/><path d="M110 202A40 40 0 0 1 190 202"/><path d="M62 342V290A100 100 0 0 1 238 290V342"/><line x1="130" y1="330" x2="170" y2="330" stroke-width="4"/></g><circle cx="150" cy="318" r="9" fill="none" stroke="${c.fg}" stroke-width="3"/><circle cx="150" cy="140" r="14" fill="${c.fg}"/>`;
},
track(c){
  let s="";
  for(let i=0;i<6;i++){const w=232-i*28,h=304-i*28;s+=`<rect x="${34+i*14}" y="${34+i*14}" width="${w}" height="${h}" rx="${w/2}" fill="${i===5?c.g2:"none"}" stroke="${c.fg}" stroke-width="1.6"/>`}
  s+=`<line x1="34" y1="186" x2="118" y2="186" stroke="${c.fg}" stroke-width="3.5"/>`;
  return s;
},
sprite(c,u,p){
  const r=rng(p.n*31+7),cell=15,cols=11,rows=11,x0=(300-cols*cell)/2,y0=70;let s="";
  for(let i=0;i<26;i++){const x=Math.floor(r()*19)*15+7.5,y=Math.floor(r()*23)*15+5;if(y>y0-10&&y<y0+rows*cell+10&&x>x0-12&&x<x0+cols*cell+12)continue;s+=`<rect x="${x}" y="${y}" width="${r()>.7?6:3}" height="3" fill="${c.g1}"/>`}
  const half=[];for(let y=0;y<rows;y++){const row=[];for(let x=0;x<6;x++){let on=r()>.48;if(x>=4&&y>1&&y<rows-2)on=on||r()>.35;row.push(on)}half.push(row)}
  half[3][2]=true;half[3][3]=true;half[4][5]=true;
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){const sx=x<6?x:10-x;if(half[y][sx])s+=`<rect x="${x0+x*cell}" y="${y0+y*cell}" width="${cell-1}" height="${cell-1}" fill="${c.fg}"/>`}
  s+=`<rect x="${x0+2*cell}" y="${y0+3*cell}" width="${cell-1}" height="${cell-1}" fill="${c.bg}"/><rect x="${x0+8*cell}" y="${y0+3*cell}" width="${cell-1}" height="${cell-1}" fill="${c.bg}"/>`;
  for(let row=0;row<2;row++)for(let i=0;i<20;i++){if(r()>.25)s+=`<rect x="${i*15}" y="${312+row*15}" width="14" height="14" fill="${row?c.g2:c.g1}"/>`}
  return s;
},
pad(c){
  let s=`<rect x="60" y="100" width="56" height="16" rx="6" fill="${c.g1}"/><rect x="184" y="100" width="56" height="16" rx="6" fill="${c.g1}"/><rect x="34" y="112" width="232" height="140" rx="66" fill="${c.fg}"/>`;
  s+=`<rect x="73" y="171" width="44" height="14" rx="3" fill="${c.bg}"/><rect x="88" y="156" width="14" height="44" rx="3" fill="${c.bg}"/>`;
  [[212,158],[232,178],[192,178],[212,198]].forEach(([x,y])=>{s+=`<circle cx="${x}" cy="${y}" r="8" fill="${c.bg}"/>`});
  s+=`<circle cx="130" cy="222" r="12" fill="none" stroke="${c.bg}" stroke-width="3"/><circle cx="170" cy="222" r="12" fill="none" stroke="${c.bg}" stroke-width="3"/><rect x="138" y="176" width="10" height="5" rx="2" fill="${c.g1}"/><rect x="152" y="176" width="10" height="5" rx="2" fill="${c.g1}"/>`;
  s+=`<text x="150" y="312" text-anchor="middle" font-size="14" letter-spacing="6" fill="${c.fg}" style="${MONO}">PRESS START</text>`;
  return s;
},
star(c){
  let s=`<circle cx="150" cy="180" r="136" fill="none" stroke="${c.g1}" stroke-width="1"/>`;
  s+=`<polygon points="${star8(150,180,130,92)}" fill="none" stroke="${c.fg}" stroke-width="1.6"/>`;
  s+=`<polygon points="${star8(150,180,100,70)}" fill="${c.g2}" stroke="${c.fg}" stroke-width="1.6"/>`;
  s+=`<polygon points="${star8(150,180,68,48)}" fill="${c.fg}"/>`;
  s+=`<circle cx="150" cy="180" r="22" fill="${c.bg}"/><circle cx="150" cy="180" r="8" fill="${c.fg}"/>`;
  return s;
},
mihrab(c){
  let s=`<path d="${arch(150,360,200,40)}" fill="none" stroke="${c.fg}" stroke-width="2"/><path d="${arch(150,360,156,84)}" fill="${c.g2}" stroke="${c.fg}" stroke-width="1.5"/><path d="${arch(150,360,112,128)}" fill="${c.fg}"/>`;
  s+=`<line x1="20" y1="360" x2="280" y2="360" stroke="${c.fg}" stroke-width="2"/>`;
  s+=`<circle cx="150" cy="248" r="24" fill="${c.bg}"/><circle cx="159" cy="243" r="20" fill="${c.fg}"/>`+sparkle(178,222,8,c.bg);
  return s;
},
calli(c){
  let s=`<circle cx="150" cy="180" r="120" fill="none" stroke="${c.g1}" stroke-width="1"/><circle cx="150" cy="180" r="110" fill="none" stroke="${c.fg}" stroke-width="2"/>`;
  s+=`<polygon points="${star8(150,92,12,8)}" fill="${c.fg}"/><polygon points="${star8(150,268,12,8)}" fill="${c.fg}"/>`;
  s+=`<text x="150" y="198" text-anchor="middle" font-size="50" font-weight="700" fill="${c.fg}" style="${KUFI}">الحمد لله</text>`;
  s+=`<text x="150" y="232" text-anchor="middle" font-size="9.5" letter-spacing="4" fill="${c.g1}" style="${MONO}">ALHAMDULILLAH</text>`;
  return s;
},
beam(c,u,p){
  const r=rng(p.n*13);
  let s=`<defs><linearGradient id="g${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c.fg}" stop-opacity=".95"/><stop offset="1" stop-color="${c.fg}" stop-opacity="0"/></linearGradient></defs>`;
  s+=`<polygon points="150,66 36,340 264,340" fill="url(#g${u})"/>`;
  for(let i=0;i<14;i++){const y=100+r()*200,half=(y-66)/274*114,x=150+(r()*2-1)*half*.9;s+=`<circle cx="${r1(x)}" cy="${r1(y)}" r="${r1(.8+r()*1.6)}" fill="${c.fg}" opacity=".7"/>`}
  s+=`<rect x="126" y="38" width="48" height="26" rx="3" fill="${c.fg}"/><circle cx="150" cy="68" r="8" fill="${c.bg}" stroke="${c.fg}" stroke-width="3"/><circle cx="136" cy="30" r="8" fill="none" stroke="${c.fg}" stroke-width="2"/><circle cx="164" cy="30" r="8" fill="none" stroke="${c.fg}" stroke-width="2"/>`;
  for(let i=0;i<6;i++){const x=30+i*48;s+=`<circle cx="${x}" cy="344" r="15" fill="${c.g2}"/><rect x="${x-24}" y="356" width="48" height="30" rx="16" fill="${c.g2}"/>`}
  return s;
},
clapper(c){
  let s=`<rect x="50" y="170" width="200" height="164" fill="${c.fg}"/><rect x="50" y="160" width="200" height="14" fill="${c.fg}"/>`;
  s+=`<g transform="rotate(-11 50 160)"><rect x="50" y="118" width="200" height="38" fill="${c.fg}"/>`;
  for(let i=0;i<5;i++){const x=64+i*38;s+=`<polygon points="${x},118 ${x+18},118 ${x+6},156 ${x-12},156" fill="${c.bg}"/>`}
  s+=`</g>`;
  for(let i=0;i<5;i++){const x=64+i*38;s+=`<polygon points="${x+8},162 ${x+26},162 ${x+20},172 ${x+2},172" fill="${c.bg}"/>`}
  s+=`<text x="68" y="212" font-size="11" letter-spacing="3" fill="${c.bg}" style="${MONO}">SCENE</text><text x="68" y="236" font-size="22" font-weight="500" fill="${c.bg}" style="${MONO}">01</text>`;
  s+=`<text x="164" y="212" font-size="11" letter-spacing="3" fill="${c.bg}" style="${MONO}">TAKE</text><text x="164" y="236" font-size="22" font-weight="500" fill="${c.bg}" style="${MONO}">01</text>`;
  s+=`<rect x="68" y="262" width="164" height="1.5" fill="${c.g1}"/><rect x="68" y="282" width="120" height="1.5" fill="${c.g1}"/><rect x="68" y="302" width="146" height="1.5" fill="${c.g1}"/>`;
  return s;
},
reel(c){
  let s=`<path d="M104 268C92 330 190 316 262 340" fill="none" stroke="${c.fg}" stroke-width="26"/><path d="M104 268C92 330 190 316 262 340" fill="none" stroke="${c.bg}" stroke-width="10" stroke-dasharray="6 9"/>`;
  s+=`<circle cx="140" cy="160" r="112" fill="${c.fg}"/>`;
  for(let i=0;i<6;i++){const a=i*Math.PI/3;s+=`<circle cx="${r1(140+62*Math.cos(a))}" cy="${r1(160+62*Math.sin(a))}" r="27" fill="${c.bg}"/>`}
  s+=`<circle cx="140" cy="160" r="16" fill="${c.bg}"/><circle cx="140" cy="160" r="5" fill="${c.fg}"/>`;
  return s;
},
quote(c,u,p){
  const q=p.q;
  let s=`<text x="150" y="132" text-anchor="middle" font-size="120" fill="${c.g1}" opacity=".6" style="${KUFI}">"</text>`;
  q.ar.forEach((t,i)=>{s+=`<text x="150" y="${178+i*48}" text-anchor="middle" font-size="38" font-weight="700" fill="${c.fg}" style="${KUFI}">${esc(t)}</text>`});
  s+=`<line x1="120" x2="180" y1="290" y2="290" stroke="${c.fg}" stroke-width="2"/>`;
  q.en.forEach((t,i)=>{s+=`<text x="150" y="${316+i*16}" text-anchor="middle" font-size="10.5" letter-spacing="3" fill="${c.fg}" style="${MONO}">${esc(t)}</text>`});
  return s;
},
vinyl(c){
  let s=`<circle cx="150" cy="186" r="134" fill="${c.fg}"/>`;
  for(let r=124;r>=58;r-=7)s+=`<circle cx="150" cy="186" r="${r}" fill="none" stroke="${c.bg}" stroke-width=".8" opacity=".35"/>`;
  s+=`<circle cx="150" cy="186" r="46" fill="${c.bg}"/><circle cx="150" cy="186" r="38" fill="none" stroke="${c.fg}" stroke-width="1"/><circle cx="150" cy="186" r="6" fill="${c.fg}"/>`;
  s+=`<path d="M60 120A100 100 0 0 1 120 76" fill="none" stroke="${c.bg}" stroke-width="3" opacity=".5" stroke-linecap="round"/>`;
  return s;
},
wave(c,u,p){
  const r=rng(p.n*53);let s="";
  for(let i=0;i<23;i++){const env=Math.exp(-Math.pow((i-11)/8,2)),h=r1(14+Math.abs(Math.sin(i*.55+1))*150*env+r()*34*env),x=12+i*12.5;s+=`<rect x="${x}" y="${r1(186-h/2)}" width="7" height="${h}" rx="3.5" fill="${i>14?c.g1:c.fg}"/>`}
  s+=`<line x1="12" x2="288" y1="186" y2="186" stroke="${c.g1}" stroke-width=".8" opacity=".6"/>`;
  return s;
},
eq(c,u,p){
  const r=rng(p.n*71);let s="";
  for(let col=0;col<8;col++){const n=3+Math.floor(r()*13),x=26+col*32;for(let k=0;k<n;k++){s+=`<rect x="${x}" y="${352-(k+1)*20+4}" width="24" height="16" fill="${k===n-1?c.g1:c.fg}"/>`}}
  return s;
},
pole(c,u){
  let s=`<defs><clipPath id="c${u}"><rect x="105" y="74" width="90" height="244"/></clipPath></defs><rect x="105" y="74" width="90" height="244" fill="${c.g2}"/><g clip-path="url(#c${u})">`;
  for(let i=0;i<9;i++){const y=64+i*40;s+=`<polygon points="105,${y} 195,${y-50} 195,${y-30} 105,${y+20}" fill="${i%2?c.g1:c.fg}"/>`}
  s+=`</g><rect x="105" y="74" width="90" height="244" fill="none" stroke="${c.fg}" stroke-width="3"/><rect x="94" y="56" width="112" height="20" rx="3" fill="${c.fg}"/><rect x="94" y="316" width="112" height="20" rx="3" fill="${c.fg}"/><circle cx="150" cy="40" r="14" fill="${c.fg}"/>`;
  return s;
},
scissors(c){
  let s=`<circle cx="150" cy="190" r="124" fill="none" stroke="${c.g2}" stroke-width="1.5"/>`;
  s+=`<path d="M146 214L120 48L156 206Z" fill="${c.fg}"/><path d="M154 214L180 48L144 206Z" fill="${c.fg}"/>`;
  s+=`<path d="M150 210L182 280M150 210L118 280" stroke="${c.fg}" stroke-width="9" stroke-linecap="round"/>`;
  s+=`<circle cx="192" cy="306" r="28" fill="none" stroke="${c.fg}" stroke-width="9"/><circle cx="108" cy="306" r="28" fill="none" stroke="${c.fg}" stroke-width="9"/>`;
  s+=`<circle cx="150" cy="208" r="7" fill="${c.bg}" stroke="${c.fg}" stroke-width="3"/>`;
  return s;
},
mirror(c,u){
  let s=`<defs><clipPath id="c${u}"><ellipse cx="150" cy="140" rx="74" ry="96"/></clipPath></defs><ellipse cx="150" cy="140" rx="82" ry="104" fill="${c.fg}"/><ellipse cx="150" cy="140" rx="74" ry="96" fill="${c.g2}"/>`;
  s+=`<g clip-path="url(#c${u})"><path d="M60 230L170 20" stroke="${c.bg}" stroke-width="16" opacity=".7"/><path d="M110 250L220 40" stroke="${c.bg}" stroke-width="6" opacity=".7"/></g>`;
  s+=`<rect x="140" y="242" width="20" height="82" rx="10" fill="${c.fg}"/><rect x="64" y="336" width="172" height="12" rx="3" fill="${c.fg}"/>`;
  for(let i=0;i<22;i++)s+=`<rect x="${r1(66+i*7.7)}" y="346" width="3.6" height="16" fill="${c.fg}"/>`;
  return s;
},
bloom(c){
  let s=`<path d="M150 232C150 290 150 320 150 350" stroke="${c.fg}" stroke-width="3" fill="none"/><ellipse cx="124" cy="300" rx="24" ry="9" transform="rotate(-35 124 300)" fill="${c.fg}"/><ellipse cx="177" cy="282" rx="24" ry="9" transform="rotate(35 177 282)" fill="${c.fg}"/>`;
  for(let i=0;i<8;i++)s+=`<ellipse cx="150" cy="108" rx="26" ry="62" transform="rotate(${i*45} 150 170)" fill="${c.fg}" fill-opacity=".1" stroke="${c.fg}" stroke-width="1.5"/>`;
  s+=`<circle cx="150" cy="170" r="20" fill="${c.fg}"/><circle cx="150" cy="170" r="7" fill="${c.bg}"/>`;
  return s;
},
arches(c){
  let s=`<circle cx="150" cy="84" r="30" fill="${c.fg}"/><circle cx="150" cy="84" r="42" fill="none" stroke="${c.fg}" stroke-width="1.2"/>`;
  const cols=[c.fg,c.g1,c.g2,c.fg,c.g1];
  [140,114,88,62,36].forEach((r,i)=>{s+=`<path d="M${150-r} 300A${r} ${r} 0 0 1 ${150+r} 300" fill="none" stroke="${cols[i]}" stroke-width="20"/>`});
  s+=`<rect x="0" y="300" width="300" height="72" fill="${c.fg}"/>`;
  return s;
},
moon(c){
  let s=`<circle cx="150" cy="180" r="92" fill="${c.fg}"/><circle cx="186" cy="158" r="80" fill="${c.bg}"/>`;
  s+=sparkle(214,96,14,c.fg)+sparkle(246,170,9,c.fg)+sparkle(70,76,10,c.fg)+sparkle(52,308,16,c.fg)+sparkle(240,300,8,c.fg)+sparkle(120,330,6,c.g1);
  [[40,150],[96,40],[258,50],[270,250],[190,340],[30,240]].forEach(([x,y])=>{s+=`<circle cx="${x}" cy="${y}" r="2" fill="${c.g1}"/>`});
  return s;
},
mountains(c){
  let s=`<circle cx="206" cy="108" r="38" fill="${c.fg}"/>`;
  s+=`<polygon points="0,260 70,170 120,230 190,140 250,210 300,170 300,372 0,372" fill="${c.g2}"/>`;
  s+=`<polygon points="0,300 60,240 130,290 200,220 260,270 300,240 300,372 0,372" fill="${c.g1}"/>`;
  s+=`<polygon points="0,340 80,290 150,330 220,290 300,330 300,372 0,372" fill="${c.fg}"/>`;
  return s;
},
waves(c){
  const cols=[c.g2,c.g1,c.fg,c.g2,c.g1,c.fg,c.g2,c.g1];let s=`<circle cx="150" cy="62" r="30" fill="${c.fg}"/>`;
  for(let k=0;k<8;k++){const y=104+k*36,A=12,ph=-k*23;let d=`M${-100+ph} ${y}Q${-75+ph} ${y-A} ${-50+ph} ${y}`;for(let x=0;x<=700;x+=50)d+=`T${x+ph} ${y}`;d+=`V400H${-100+ph}Z`;s+=`<path d="${d}" fill="${cols[k]}"/>`}
  return s;
},
phases(c,u){
  let s="";const R=28,dx=[0,14,28,42,60];
  dx.forEach((d,i)=>{const cy=58+i*64;s+=`<defs><clipPath id="m${u}${i}"><circle cx="150" cy="${cy}" r="${R}"/></clipPath></defs><circle cx="150" cy="${cy}" r="${R}" fill="${c.bg}" stroke="${c.fg}" stroke-width="1.6"/>`;if(i>0)s+=`<g clip-path="url(#m${u}${i})"><circle cx="150" cy="${cy}" r="${R}" fill="${c.fg}"/><circle cx="${150+d}" cy="${cy}" r="${R}" fill="${c.bg}"/></g>`});
  return s;
}
};
 
let uid=0;
function art(p){
  if(p.img)return `<img src="${esc(p.img)}" alt="${esc(p.ar)}" loading="lazy">`;
  const c=TONES[p.tone],u=++uid,inner=ART[p.art](c,u,p);
  return `<svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" style="direction:ltr" role="img" aria-label="${esc(p.ar)}" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="400" fill="${c.bg}"/>${inner}<rect y="372" width="300" height="28" fill="${c.bg}"/><line x1="14" x2="286" y1="372.5" y2="372.5" stroke="${c.fg}" stroke-width=".8" opacity=".5"/><text x="14" y="390" font-size="8.5" letter-spacing="2" fill="${c.fg}" style="${MONO}">${esc(p.code)}  ${esc(p.en.toUpperCase())}</text><text x="286" y="390" text-anchor="end" font-size="8.5" letter-spacing="2" fill="${c.g1}" style="${MONO}">STREET POSTERS</text></svg>`;
}
 
/* غلاف التصنيف: بوستر عليه الرسم والاسمان (عربي وإنجليزي) */
function coverArt(c,ci){
  if(COVERS[c.id])return `<img src="${esc(COVERS[c.id])}" alt="${esc(c.ar)} ${esc(c.en)}" loading="lazy">`;
  const t=TONES[TN[ci%3]],u="k"+(++uid),inner=ART[COVER_ART[c.id]](t,u,{n:ci+1,q:PHRASES[0]});
  return `<svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" style="direction:ltr" role="img" aria-label="${esc(c.ar)} ${esc(c.en)}" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="400" fill="${t.bg}"/><rect x="8" y="8" width="284" height="384" fill="none" stroke="${t.fg}" stroke-width=".8" opacity=".35"/><defs><clipPath id="f${u}"><rect x="9" y="9" width="282" height="382"/></clipPath></defs><g clip-path="url(#f${u})"><g transform="translate(39 22) scale(.74)">${inner}</g></g><text x="150" y="338" text-anchor="middle" font-size="38" font-weight="700" fill="${t.fg}" style="${KUFI}">${esc(c.ar)}</text><text x="150" y="368" text-anchor="middle" font-size="12" letter-spacing="5" fill="${t.fg}" style="${MONO}">${esc(c.en.toUpperCase())}</text><text x="20" y="28" font-size="9" letter-spacing="2" fill="${t.g1}" style="${MONO}">${pad(ci+1)}</text></svg>`;
}