/* ---------- Shop settings: edit these ---------- */
const WHATSAPP="212628712051";   /* your WhatsApp number, country code first, no + or 0 */
const PER_PAGE=12;
 
/* ---------- Helpers ---------- */
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const byN=n=>P.find(p=>p.n===+n);
const catById=id=>CATS.find(c=>c.id===id);
const catOf=p=>catById(p.cat);
const isOnline=()=>/^https?:$/.test(location.protocol);
const absUrl=u=>{try{return new URL(u,location.href).href}catch(e){return u}};
const ICON={
  plus:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  check:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  x:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  chevL:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 5l-7 7 7 7"/></svg>',
  chevR:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 5l7 7-7 7"/></svg>'
};
 
/* ---------- State ---------- */
function loadSel(){
  try{
    const v=JSON.parse(localStorage.getItem("STREET POSTERS-sel-v2")||"[]");
    return Array.isArray(v)?v.filter(n=>byN(n)):[];
  }catch(e){return[]}
}
function saveSel(){try{localStorage.setItem("STREET POSTERS-sel-v2",JSON.stringify(state.sel))}catch(e){}}
const state={cat:null,page:1,sel:loadSel(),modal:null,opener:null,name:""};
const isSel=n=>state.sel.includes(+n);
const overlay=$("#overlay"),sheet=$("#sheet"),drawer=$("#drawer"),scrim=$("#scrim");
 
/* ---------- Scroll lock + focus trap ---------- */
let locks=0;
function lock(on){
  locks=Math.max(0,locks+(on?1:-1));
  document.documentElement.style.overflow=locks?"hidden":"";
}
function trap(e,box){
  if(e.key!=="Tab")return;
  const f=$$('button,[href],input,textarea,[tabindex]:not([tabindex="-1"])',box).filter(x=>!x.disabled&&x.getClientRects().length);
  if(!f.length)return;
  const first=f[0],last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
}
 
/* ---------- Toast ---------- */
let toastTimer=0;
function toast(msg){
  $("#toastMsg").textContent=msg;
  $("#toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>$("#toast").classList.remove("show"),3500);
}
 
/* ---------- Pages (hash routes: #c-cars, #c-cars-p2) ---------- */
const hrefFor=(id,pg)=>"#c-"+id+(pg>1?"-p"+pg:"");
function route(){
  const m=/^#c-([a-z]+)(?:-p([1-3]))?$/.exec(location.hash);
  const cat=m&&catById(m[1]);
  state.cat=cat?cat.id:null;
  state.page=cat&&m[2]?+m[2]:1;
  if(!overlay.hidden){overlay.hidden=true;state.modal=null;lock(false)}
  render();
  window.scrollTo({top:0,behavior:"instant"});
}
function catList(){return P.filter(p=>p.cat===state.cat)}
function pageList(){return catList().slice((state.page-1)*PER_PAGE,state.page*PER_PAGE)}
 
function renderHome(){
  $("#eyebrow").textContent=CATS.length+" COLLECTIONS / "+P.length+" POSTERS";
  $("#cats").innerHTML=CATS.map((c,i)=>`<li><a class="cat-card" href="${hrefFor(c.id,1)}" aria-label="${esc(c.ar)} ${esc(c.en)}"><span class="cover"><span class="num">${pad(i+1)}</span>${coverArt(c,i)}</span><span class="cmeta"><span class="lat">${PER_CAT} posters</span><span aria-hidden="true">←</span></span></a></li>`).join("");
}
function card(p){
  const on=isSel(p.n);
  return `<div class="card${on?" on":""}" data-n="${p.n}">`+
    `<button class="art" type="button" data-open="${p.n}" aria-label="عرض اللوحة ${esc(p.code)} بحجم أكبر"><span class="num">${pad(p.i)}</span>${art(p)}</button>`+
    `<button class="pick" type="button" data-toggle="${p.n}" aria-pressed="${on}" aria-label="اختيار اللوحة ${esc(p.code)}">${on?ICON.check:ICON.plus}</button>`+
    `<div class="cap"><b>${esc(p.ar)}</b><span class="lat">${esc(p.code)}</span></div></div>`;
}
function pagerHTML(){
  const pages=Math.ceil(PER_CAT/PER_PAGE),id=state.cat,pg=state.page;
  const prevOff=pg===1,nextOff=pg===pages;
  let h=`<a class="pg${prevOff?" dis":""}" href="${hrefFor(id,Math.max(1,pg-1))}" aria-label="الصفحة السابقة"${prevOff?' aria-disabled="true" tabindex="-1"':""}>→</a>`;
  for(let i=1;i<=pages;i++)h+=`<a class="pg" href="${hrefFor(id,i)}"${i===pg?' aria-current="page"':""} aria-label="الصفحة ${i}">${i}</a>`;
  h+=`<a class="pg${nextOff?" dis":""}" href="${hrefFor(id,Math.min(pages,pg+1))}" aria-label="الصفحة التالية"${nextOff?' aria-disabled="true" tabindex="-1"':""}>←</a>`;
  return h;
}
function renderCat(){
  const c=catById(state.cat),pages=Math.ceil(PER_CAT/PER_PAGE);
  $("#cpTitle").innerHTML=esc(c.en)+`<small dir="rtl">${esc(c.ar)}</small>`;
  $("#cpMeta").textContent=PER_CAT+" posters · page "+state.page+" of "+pages;
  $("#chips").innerHTML=CATS.map(x=>`<a class="chip" href="${hrefFor(x.id,1)}"${x.id===c.id?' aria-current="page"':""}><span dir="ltr">${esc(x.en)}</span></a>`).join("");
  $("#grid").innerHTML=pageList().map(card).join("");
  $("#pagerTop").innerHTML=pagerHTML();
  $("#pagerBot").innerHTML=pagerHTML();
  document.title="STREET POSTERS · "+c.en;
}
function render(){
  const home=!state.cat;
  $("#home").hidden=!home;
  $("#catpage").hidden=home;
  if(home){document.title="STREET POSTERS";renderHome()}else renderCat();
  syncSelection();
}
 
/* ---------- Selection ---------- */
function toggle(n){
  n=+n;
  const i=state.sel.indexOf(n);
  if(i>=0)state.sel.splice(i,1);else state.sel.push(n);
  saveSel();
  syncSelection();
}
function syncSelection(){
  $$(".card").forEach(c=>{
    const on=isSel(c.dataset.n),b=$(".pick",c);
    c.classList.toggle("on",on);
    b.setAttribute("aria-pressed",String(on));
    b.innerHTML=on?ICON.check:ICON.plus;
  });
  const count=state.sel.length,badge=$("#cartCount");
  badge.textContent=count;badge.dataset.zero=count?"0":"1";
  $("#selbar").hidden=!count||!overlay.hidden||drawer.classList.contains("open");
  $("#selText").textContent="تم اختيار "+count+(count===1?" لوحة":" لوحات");
  if(state.modal)updateModal();
  if(drawer.classList.contains("open"))renderCart();else updateOrderLink();
}
 
/* ---------- Poster preview ---------- */
function buildModal(){
  const p=byN(state.modal.n),cat=catOf(p);
  sheet.innerHTML=
  `<button class="close" type="button" data-act="close" aria-label="إغلاق">${ICON.x}</button>`+
  `<div class="stage"><span class="tag">${esc(p.code)}</span>`+
    `<button class="navbtn prev" type="button" data-act="prev" aria-label="اللوحة السابقة">${ICON.chevR}</button>`+
    `<button class="navbtn next" type="button" data-act="next" aria-label="اللوحة التالية">${ICON.chevL}</button>`+
    `<div class="hang"><div class="poster">${art(p)}</div></div></div>`+
  `<div class="panel">`+
    `<div class="ph"><span class="kick"><span class="lat">${esc(cat.en)}</span></span><h2 id="mTitle">${esc(p.ar)}</h2><span class="en">${esc(p.code)} · رقم ${p.n}</span></div>`+
    `<button class="btn" type="button" id="mToggle" data-act="toggle"></button>`+
    `<p class="hint">استخدم السهمين للتنقل بين لوحات هذا التصنيف واختيار أكثر من لوحة.</p>`+
  `</div>`;
  updateModal();
}
function updateModal(){
  const b=$("#mToggle");if(!b||!state.modal)return;
  const on=isSel(state.modal.n);
  b.textContent=on?"تم الاختيار، اضغط للإلغاء":"اختيار هذه اللوحة";
  b.classList.toggle("ghost",on);
  b.setAttribute("aria-pressed",String(on));
}
function showModal(n){
  state.modal={n:+n};
  buildModal();
  overlay.hidden=false;
}
function openModal(n,opener){
  state.opener=opener||null;
  showModal(n);
  lock(true);
  syncSelection();
  $(".close",sheet).focus();
}
function closeModal(){
  if(overlay.hidden)return;
  overlay.hidden=true;
  state.modal=null;
  lock(false);
  syncSelection();
  if(state.opener&&document.contains(state.opener))state.opener.focus();
}
function navigate(d){
  const list=P.filter(p=>p.cat===byN(state.modal.n).cat).map(p=>p.n);
  const i=list.indexOf(state.modal.n);
  showModal(list[(i+d+list.length)%list.length]);
  const b=$(d>0?'[data-act="next"]':'[data-act="prev"]',sheet);if(b)b.focus();
}
sheet.addEventListener("click",e=>{
  const b=e.target.closest("[data-act]");if(!b||!state.modal)return;
  const a=b.dataset.act;
  if(a==="close")closeModal();
  else if(a==="toggle")toggle(state.modal.n);
  else if(a==="prev")navigate(-1);
  else if(a==="next")navigate(1);
});
overlay.addEventListener("click",e=>{if(e.target===overlay)closeModal()});
 
/* ---------- Selection list + WhatsApp ---------- */
/* نص الرسالة: اسم اللوحة + رقمها + كودها + التصنيف */
function orderText(withLinks){
  const lines=["السلام عليكم، اخترت هذه اللوحات من المعرض:",""];
  state.sel.forEach((n,i)=>{
    const p=byN(n);
    lines.push((i+1)+") "+p.ar+" | رقم "+p.n+" | "+p.code+" ("+catOf(p).en+")");
    if(withLinks&&p.img&&isOnline())lines.push(absUrl(p.img));
  });
  if(state.name.trim())lines.push("","الاسم: "+state.name.trim());
  return lines.join("\n");
}
function waTextLink(){
  return "https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(orderText(true));
}
function updateOrderLink(){
  const a=$("#waLink"),has=state.sel.length>0;
  a.classList.toggle("off",!has);
  a.setAttribute("aria-disabled",String(!has));
  a.href=has?waTextLink():"#";
  $("#copyOrder").disabled=!has;
  const d=$("#dlImages");if(d)d.disabled=!has;
}

/* إرسال الصور كملفات حقيقية عبر قائمة المشاركة (واتساب) - يعمل على الجوال */
async function shareImages(){
  if(!navigator.share||!navigator.canShare||!isOnline())return false;
  const list=state.sel.map(byN).filter(p=>p&&p.img);
  if(!list.length)return false;
  try{
    const files=await Promise.all(list.map(async p=>{
      const r=await fetch(p.img);
      if(!r.ok)throw new Error("fetch");
      const b=await r.blob();
      const type=b.type||"image/jpeg";
      const ext=type.split("/")[1].replace("jpeg","jpg");
      return new File([b],p.code+"."+ext,{type});
    }));
    if(!navigator.canShare({files}))return false;
    await navigator.share({files,text:orderText(false)});
    return true;
  }catch(err){
    if(err&&err.name==="AbortError")return true;
    return false;
  }
}

/* تحميل الصور المختارة إلى جهاز الزبون (كل صورة باسم كودها) */
function downloadImages(){
  const list=state.sel.map(byN).filter(p=>p&&p.img);
  list.forEach((p,i)=>setTimeout(()=>{
    const ext=(p.img.split("?")[0].split(".").pop()||"jpg").toLowerCase();
    const a=document.createElement("a");
    a.href=p.img;
    a.download=p.code+"."+ext;
    document.body.appendChild(a);
    a.click();
    a.remove();
  },i*350));
  return list.length;
}

/* زر "تحميل الصور": يُنشأ تلقائياً بجانب زر النسخ إن لم يكن موجوداً في index.html */
(function ensureDlButton(){
  if($("#dlImages"))return;
  const cb=$("#copyOrder");
  if(!cb||!cb.parentNode)return;
  const b=document.createElement("button");
  b.type="button";
  b.id="dlImages";
  b.className="btn ghost";
  b.textContent="تحميل الصور";
  cb.parentNode.insertBefore(b,cb.nextSibling);
})();
const dlBtn=$("#dlImages");
if(dlBtn)dlBtn.addEventListener("click",()=>{
  if(!state.sel.length)return;
  const n=downloadImages();
  toast(n?"جاري تحميل "+n+" صورة...":"لا توجد صور للتحميل");
});

$("#waLink").addEventListener("click",async e=>{
  e.preventDefault();
  if(!state.sel.length)return;
  toast("جاري تجهيز الصور...");
  const done=await shareImages();
  if(done)return;
  /* الكمبيوتر: واتساب لا يقبل مرفقات من موقع، لذلك نحمّل الصور ثم نفتح المحادثة بالنص */
  if(downloadImages())toast("تم تحميل الصور، أرفقها في محادثة واتساب");
  const w=window.open(waTextLink(),"_blank");
  if(!w)location.href=waTextLink();
});

function renderCart(){
  $("#cartTotal").textContent=state.sel.length;
  $("#df").hidden=!state.sel.length;
  $("#items").innerHTML=state.sel.length?state.sel.map(n=>{
    const p=byN(n);
    return `<div class="ci"><div class="th">${art(p)}</div><div><h4 style="text-align:right">${esc(p.ar)}</h4><p class="meta"><span dir="ltr">${esc(p.code)}</span> · رقم ${p.n} · ${esc(catOf(p).en)}</p></div>`+
      `<button class="rm" type="button" data-rm="${p.n}" aria-label="حذف ${esc(p.code)}">حذف</button></div>`;
  }).join(""):
  `<div class="cart-empty"><span>لم تختر أي لوحة بعد.</span><button class="btn" type="button" data-browse>تصفّح اللوحات</button></div>`;
  updateOrderLink();
}
function openCart(){
  renderCart();
  scrim.hidden=false;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden","false");
  $("#selbar").hidden=true;
  lock(true);
  $("#closeCart").focus();
}
function closeCart(){
  if(!drawer.classList.contains("open"))return;
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden","true");
  scrim.hidden=true;
  lock(false);
  syncSelection();
  $("#openCart").focus();
}
$("#items").addEventListener("click",e=>{
  if(e.target.closest("[data-browse]")){closeCart();return}
  const b=e.target.closest("[data-rm]");if(!b)return;
  toggle(b.dataset.rm);
  const first=$(".rm",$("#items"));if(first)first.focus();else $("#closeCart").focus();
});
$("#openCart").addEventListener("click",openCart);
$("#selOpen").addEventListener("click",openCart);
$("#closeCart").addEventListener("click",closeCart);
scrim.addEventListener("click",closeCart);
$("#cName").addEventListener("input",e=>{state.name=e.target.value;updateOrderLink()});
$("#clearAll").addEventListener("click",()=>{state.sel=[];saveSel();syncSelection()});
$("#copyOrder").addEventListener("click",async()=>{
  const t=orderText(true);
  try{await navigator.clipboard.writeText(t);toast("تم نسخ نص الرسالة")}
  catch(err){const ta=$("#orderFallback");ta.hidden=false;ta.value=t;ta.focus();ta.select();toast("حدّد النص المعروض وانسخه")}
});
 
/* ---------- Page wiring ---------- */
$("#catpage").addEventListener("click",e=>{
  const t=e.target.closest("[data-toggle]");
  if(t){toggle(t.dataset.toggle);return}
  const o=e.target.closest("[data-open]");
  if(o)openModal(o.dataset.open,o);
});
$("#brand").addEventListener("click",e=>{
  if(!location.hash||location.hash==="#"){e.preventDefault();window.scrollTo({top:0})}
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){if(!overlay.hidden)closeModal();else closeCart();return}
  if(!overlay.hidden){
    trap(e,sheet);
    if(!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){
      if(e.key==="ArrowLeft")navigate(1);
      else if(e.key==="ArrowRight")navigate(-1);
    }
  }else if(drawer.classList.contains("open"))trap(e,drawer);
});
window.addEventListener("hashchange",route);
 
/* sticky offsets: the category rail sits right below the header */
const topBar=$("#top");
function setHH(){document.documentElement.style.setProperty("--hh",topBar.offsetHeight+"px")}
setHH();
if(window.ResizeObserver)new ResizeObserver(setHH).observe(topBar);else window.addEventListener("resize",setHH);
 
$("#waNum").textContent="+"+WHATSAPP.slice(0,3)+" "+WHATSAPP.slice(3);
$("#waFoot").href="https://wa.me/"+WHATSAPP;
route();