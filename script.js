// =========================================
// SDGs BLOCK BUILDER
// Hidden Impact Indonesia
// Version 2.0
// =========================================

// ===============================
// DATA SDGs
// ===============================

const sdgs = [

{
id:1,
title:"No Poverty",
description:"Mengakhiri kemiskinan dalam segala bentuk.",
icon:"images/01.png.jpg"
},

{
id:2,
title:"Zero Hunger",
description:"Mengakhiri kelaparan dan meningkatkan gizi.",
icon:"images/02.png.jpg"
},

{
id:3,
title:"Good Health",
description:"Menjamin kehidupan sehat dan sejahtera.",
icon:"images/03.png.jpg"
},

{
id:4,
title:"Quality Education",
description:"Pendidikan berkualitas untuk semua.",
icon:"images/04.png.jpg"
},

{
id:5,
title:"Gender Equality",
description:"Kesetaraan gender.",
icon:"images/05.png.jpg"
},

{
id:6,
title:"Clean Water",
description:"Air bersih dan sanitasi.",
icon:"images/06.png.jpg"
},

{
id:7,
title:"Affordable Clean Energy",
description:"Energi bersih dan terjangkau.",
icon:"images/07.png.jpg"
},

{
id:8,
title:"Decent Work",
description:"Pekerjaan layak dan pertumbuhan ekonomi.",
icon:"images/08.png.jpg"
},

{
id:9,
title:"Industry Innovation",
description:"Inovasi dan infrastruktur.",
icon:"images/09.png.jpg"
},

{
id:10,
title:"Reduced Inequalities",
description:"Mengurangi kesenjangan.",
icon:"images/10.png.jpg"
},

{
id:11,
title:"Sustainable Cities",
description:"Kota dan permukiman berkelanjutan.",
icon:"images/11.png.jpg"
},

{
id:12,
title:"Responsible Consumption",
description:"Konsumsi dan produksi yang bertanggung jawab.",
icon:"images/12.png.jpg"
},

{
id:13,
title:"Climate Action",
description:"Penanganan perubahan iklim.",
icon:"images/13.png.jpg"
},

{
id:14,
title:"Life Below Water",
description:"Menjaga ekosistem laut.",
icon:"images/14.png.jpg"
},

{
id:15,
title:"Life On Land",
description:"Menjaga ekosistem daratan.",
icon:"images/15.png.jpg"
},

{
id:16,
title:"Peace, Justice",
description:"Perdamaian dan keadilan.",
icon:"images/16.png.jpg"
},

{
id:17,
title:"Partnerships",
description:"Kemitraan untuk mencapai tujuan.",
icon:"images/17.png.jpg"
}

];

// ===============================
// MENGAMBIL ELEMEN HTML
// ===============================

const board=document.getElementById("board");
const pieces=document.getElementById("pieces");

const score=document.getElementById("score");
const timer=document.getElementById("timer");

const placed=document.getElementById("placed");
const placedProgress=document.getElementById("placedProgress");

const progressFill=document.getElementById("progressFill");

const popup=document.getElementById("popup");
const popupTitle=document.getElementById("popupTitle");
const popupDescription=document.getElementById("popupDescription");
const popupImage=document.getElementById("popupImage");

const winner=document.getElementById("winner");

const finalScore=document.getElementById("finalScore");
const finalTime=document.getElementById("finalTime");

const resetBtn=document.getElementById("resetBtn");
const playAgain=document.getElementById("playAgain");

const closePopup=document.getElementById("closePopup");
const popupNext=document.getElementById("popupNext");

const closeWinner=document.getElementById("closeWinner");

// ===============================
// VARIABEL GAME
// ===============================

let scoreValue=0;

let placedValue=0;

let dragItem=null;

let seconds=0;

let timerInterval=null;

// ===============================
// TIMER
// ===============================

function startTimer(){

    if(timerInterval) return;

    timerInterval = setInterval(()=>{

        seconds++;

        const minute = Math.floor(seconds/60);
        const second = seconds%60;

        timer.textContent =
        String(minute).padStart(2,"0")
        +":"
        +String(second).padStart(2,"0");

    },1000);

}

// ===============================
// SHUFFLE
// ===============================

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}

// ===============================
// MEMBUAT BOARD
// ===============================

function createBoard(){

    board.innerHTML="";

    for(let i=1;i<=17;i++){

        const slot=document.createElement("div");

        slot.className="slot";

        slot.dataset.id=i;

        slot.innerHTML="<span>"+i+"</span>";

        slot.addEventListener("dragover",(e)=>{

            e.preventDefault();

        });

        slot.addEventListener("drop",dropBlock);

        board.appendChild(slot);

    }

}

// ===============================
// MEMBUAT BALOK
// ===============================

function createPieces(){

    pieces.innerHTML="";

    const data=[...sdgs];

    shuffle(data);

    data.forEach(item=>{

        const block=document.createElement("div");

        block.className="block";

        block.draggable=true;

        block.dataset.id=item.id;

        block.innerHTML=`

            <img src="${item.icon}" alt="${item.title}">

        `;

        block.addEventListener("dragstart",()=>{

            dragItem=block;

            startTimer();

        });

        pieces.appendChild(block);

    });

}

// ===============================
// DROP
// ===============================

function dropBlock(){

    if(!dragItem) return;

    if(this.dataset.id!==dragItem.dataset.id){

        this.animate(

            [

                {transform:"translateX(-8px)"},

                {transform:"translateX(8px)"},

                {transform:"translateX(0)"}

            ],

            {

                duration:250

            }

        );

        return;

    }

    if(this.children.length>1){

        return;

    }

    this.innerHTML="";

    this.appendChild(dragItem);

    dragItem.draggable=false;

    placedValue++;

    scoreValue+=10;

    score.textContent=scoreValue;

    placed.textContent=placedValue;

    if(placedProgress){

        placedProgress.textContent=placedValue;

    }

    progressFill.style.width=(placedValue/17*100)+"%";

    showPopup(Number(dragItem.dataset.id));

    if(placedValue===17){

        showWinner();

    }

}

// ===============================
// POPUP SDGs
// ===============================

function showPopup(id){

    const data = sdgs.find(item=>item.id===id);

    if(!data) return;

    popupImage.src = data.icon;
    popupTitle.textContent = data.title;
    popupDescription.textContent = data.description;

    popup.style.display = "flex";

}

// ===============================
// TUTUP POPUP
// ===============================

closePopup.addEventListener("click",()=>{

    popup.style.display="none";

});

popupNext.addEventListener("click",()=>{

    popup.style.display="none";

});

// ===============================
// POPUP PEMENANG
// ===============================

function showWinner(){

    clearInterval(timerInterval);

    finalScore.textContent = scoreValue;

    finalTime.textContent = timer.textContent;

    winner.style.display="flex";

}

// ===============================
// TUTUP POPUP PEMENANG
// ===============================

closeWinner.addEventListener("click",()=>{

    winner.style.display="none";

});

// ===============================
// RESET GAME
// ===============================

function resetGame(){

    clearInterval(timerInterval);

    timerInterval=null;

    seconds=0;

    timer.textContent="00:00";

    scoreValue=0;

    placedValue=0;

    score.textContent="0";

    placed.textContent="0";

    if(placedProgress){

        placedProgress.textContent="0";

    }

    progressFill.style.width="0%";

    popup.style.display="none";

    winner.style.display="none";

    dragItem=null;

    createBoard();

    createPieces();

}

// ===============================
// TOMBOL MAIN LAGI
// ===============================

playAgain.addEventListener("click",()=>{

    resetGame();

});

resetBtn.addEventListener("click",()=>{

    resetGame();

});

// ===============================
// MULAI GAME
// ===============================

resetGame();
