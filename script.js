// ==========================================
// SDGs BLOCK BUILDER
// Version 1.0
// ==========================================

// -------------------------------
// DATA SDGs
// -------------------------------

const sdgs = [

{
id:1,
title:"No Poverty",
description:"Mengakhiri kemiskinan dalam segala bentuk.",
color:"#E5243B"
icon: "images/01.png.jpg"
},

{
id:2,
title:"Zero Hunger",
description:"Mengakhiri kelaparan dan meningkatkan gizi.",
color:"#DDA63A"
icon: "images/02.png.jpg"
},

{
id:3,
title:"Good Health",
description:"Kehidupan sehat dan sejahtera.",
color:"#4C9F38"
icon: "images/03.png.jpg"
},

{
id:4,
title:"Quality Education",
description:"Pendidikan berkualitas untuk semua.",
color:"#C5192D"
icon: "images/04.png.jpg"
},

{
id:5,
title:"Gender Equality",
description:"Kesetaraan gender.",
color:"#FF3A21"
icon: "images/05.png.jpg"
},

{
id:6,
title:"Clean Water",
description:"Air bersih dan sanitasi.",
color:"#26BDE2"
icon: "images/06.png.jpg"
},

{
id:7,
title:"Clean Energy",
description:"Energi bersih dan terjangkau.",
color:"#FCC30B"
icon: "images/07.png.jpg"
},

{
id:8,
title:"Decent Work",
description:"Pekerjaan layak dan pertumbuhan ekonomi.",
color:"#A21942"
icon: "images/08.png.jpg"
},

{
id:9,
title:"Industry Innovation",
description:"Inovasi dan infrastruktur.",
color:"#FD6925"
icon: "images/09.png.jpg"
},

{
id:10,
title:"Reduced Inequalities",
description:"Mengurangi kesenjangan.",
color:"#DD1367"
icon: "images/10.png.jpg"
},

{
id:11,
title:"Sustainable Cities",
description:"Kota dan komunitas berkelanjutan.",
color:"#FD9D24"
icon: "images/11.png.jpg"
},

{
id:12,
title:"Responsible Consumption",
description:"Konsumsi dan produksi bertanggung jawab.",
color:"#BF8B2E"
icon: "images/12.png.jpg"
},

{
id:13,
title:"Climate Action",
description:"Penanganan perubahan iklim.",
color:"#3F7E44"
icon: "images/13.png.jpg"
},

{
id:14,
title:"Life Below Water",
description:"Menjaga kehidupan bawah laut.",
color:"#0A97D9"
icon: "images/14.png.jpg"
},

{
id:15,
title:"Life On Land",
description:"Menjaga kehidupan di darat.",
color:"#56C02B"
icon: "images/15.png.jpg"
},

{
id:16,
title:"Peace Justice",
description:"Perdamaian dan keadilan.",
color:"#00689D"
icon: "images/16.png.jpg"
},

{
id:17,
title:"Partnership",
description:"Kemitraan untuk mencapai tujuan.",
color:"#19486A"
icon: "images/17.png.jpg"
}

];

// ==========================================

const board=document.getElementById("board");
const pieces=document.getElementById("pieces");

const score=document.getElementById("score");
const placed=document.getElementById("placed");

const progress=document.getElementById("progressFill");

const popup=document.getElementById("popup");
const popupTitle=document.getElementById("popupTitle");
const popupDescription=document.getElementById("popupDescription");

const closePopup=document.getElementById("closePopup");

const winner=document.getElementById("winner");

const resetBtn=document.getElementById("resetBtn");

const playAgain=document.getElementById("playAgain");

// ==========================================

let totalPlaced=0;

let currentScore=0;

let dragItem=null;

// ==========================================
// TIMER
// ==========================================

let seconds=0;

const timer=document.getElementById("timer");

setInterval(()=>{

seconds++;

let m=Math.floor(seconds/60);

let s=seconds%60;

timer.innerHTML=

String(m).padStart(2,"0")+

":"+

String(s).padStart(2,"0");

},1000);

// ==========================================
// SHUFFLE
// ==========================================

let blocks=[...sdgs];

blocks.sort(()=>Math.random()-0.5);

// ==========================================
// MEMBUAT SLOT PIRAMIDA
// ==========================================

for(let i=1;i<=17;i++){

const slot=document.createElement("div");

slot.className="slot";

slot.dataset.id=i;

slot.innerHTML=`<span>${i}</span>`;

board.appendChild(slot);

}

// ==========================================
// MEMBUAT BALOK
// ==========================================

blocks.forEach(item=>{

const block=document.createElement("div");

block.className="block";

block.draggable=true;

block.dataset.id=item.id;

block.style.background=item.color;

block.innerHTML = `
    <img src="${item.icon}" alt="${item.title}">
`;

pieces.appendChild(block);

});

// ==========================================
// DRAG START
// ==========================================

document.querySelectorAll(".block").forEach(block=>{

block.addEventListener("dragstart",()=>{

dragItem=block;

});

});

// ==========================================
// DROP
// ==========================================

document.querySelectorAll(".slot").forEach(slot=>{

slot.addEventListener("dragover",(e)=>{

e.preventDefault();

});

slot.addEventListener("drop",()=>{

if(slot.dataset.id===dragItem.dataset.id){

slot.appendChild(dragItem);

dragItem.draggable=false;

totalPlaced++;

currentScore+=10;

score.innerHTML=currentScore;

placed.innerHTML=totalPlaced;

progress.style.width=(totalPlaced/17*100)+"%";

let data=sdgs.find(x=>x.id==dragItem.dataset.id);

popup.style.display="flex";

popupTitle.innerHTML=data.title;

popupDescription.innerHTML=data.description;

if(totalPlaced===17){

winner.style.display="flex";

}

}

});

});

// ==========================================
// CLOSE POPUP
// ==========================================

closePopup.onclick=function(){

popup.style.display="none";

}

// ==========================================
// RESET
// ==========================================

resetBtn.onclick=function(){

location.reload();

}

playAgain.onclick=function(){

location.reload();

}
