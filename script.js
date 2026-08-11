/* ==========================
   Study Schedule
========================== */

document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".day-card");
const hero = document.querySelector(".hero");
const quote = document.querySelector(".quote-box");

/* ==========================
   Fade Animation
========================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

cards.forEach(card=>observer.observe(card));

if(hero) observer.observe(hero);

if(quote) observer.observe(quote);

/* ==========================
 Card Hover Effect
========================== */

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width/2;
const centerY = rect.height/2;

const rotateY = (x-centerX)/18;
const rotateX = -(y-centerY)/18;

card.style.transform =
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/* ==========================
 Hero Float
========================== */

let angle = 0;

setInterval(()=>{

angle+=0.03;

if(hero){

hero.style.transform =
`translateY(${Math.sin(angle)*4}px)`;

}

},25);

/* ==========================
 Current Day Highlight
========================== */

const days=[
"sunday",
"monday",
"tuesday",
"wednesday",
"thursday",
"friday",
"saturday"
];

const today=days[new Date().getDay()];

const active=document.querySelector(`.${today}`);

if(active){

active.style.boxShadow="0 0 25px rgba(126,47,208,.35)";

active.style.transform="scale(1.02)";

}

/* ==========================
 Smooth Buttons
========================== */

document.querySelectorAll("button,a").forEach(el=>{

el.addEventListener("click",()=>{

el.style.transform="scale(.95)";

setTimeout(()=>{

el.style.transform="";

},120);

});

});

});

/* ==========================
 Scroll Animation
========================== */

window.addEventListener("scroll",()=>{

const scrolled=window.pageYOffset;

document.querySelectorAll(".blur").forEach((item,index)=>{

const speed=(index+1)*0.15;

item.style.transform=
`translateY(${scrolled*speed}px)`;

});

});

/* ==========================
 Add Show Class
========================== */

const style=document.createElement("style");

style.innerHTML=`

.hero,
.day-card,
.quote-box{

opacity:0;

transform:translateY(40px);

transition:1s;

}

.show{

opacity:1 !important;

transform:translateY(0) !important;

}

`;

document.head.appendChild(style);