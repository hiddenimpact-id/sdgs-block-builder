const colors = [
"#e5243b",
"#dda63a",
"#4c9f38",
"#c5192d",
"#ff3a21",
"#26bde2",
"#fcc30b",
"#a21942",
"#fd6925",
"#dd1367",
"#fd9d24",
"#bf8b2e",
"#3f7e44",
"#0a97d9",
"#56c02b",
"#00689d",
"#19486a"
];

const board=document.getElementById("board");
const pieces=document.getElementById("pieces");
const status=document.getElementById("status");

let benar=0;

// membuat kotak tujuan
for(let i=1;i<=17;i++){

let slot=document.createElement("div");

slot.className="slot";

slot.dataset.id=i;

board.appendChild(slot);

}

// mengacak angka
let angka=[...Array(17).keys()].map(x=>x+1);

angka.sort(()=>Math.random()-0.5);

// membuat balok
angka.forEach(n=>{

let block=document.createElement("div");

block.className="block";

block.draggable=true;

block.dataset.id=n;

block.style.background=colors[n-1];

block.innerHTML=n;

pieces.appendChild(block);

});

let drag;

// drag
document.querySelectorAll(".block").forEach(block=>{

block.addEventListener("dragstart",()=>{

drag=block;

});

});

// drop
document.querySelectorAll(".slot").forEach(slot=>{

slot.addEventListener("dragover",(e)=>{

e.preventDefault();

});

slot.addEventListener("drop",()=>{

if(slot.dataset.id==drag.dataset.id){

slot.appendChild(drag);

drag.draggable=false;

benar++;

status.innerHTML="Balok "+drag.dataset.id+" benar!";

if(benar==17){

status.innerHTML="🎉 Selamat! Semua balok SDGs berhasil disusun!";

}

}

});

});
