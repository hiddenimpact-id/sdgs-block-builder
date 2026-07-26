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
description:"Mengakhiri kemiskinan dalam segala bentuk di mana pun.",

examples:[
"Memberikan bantuan kepada yang membutuhkan",
"Menyumbangkan pakaian yang masih layak",
"Mendukung usaha kecil di lingkungan sekitar",
"Mengikuti kegiatan bakti sosial"
],

actions:[
"Berbagi dengan teman",
"Tidak mengejek orang lain",
"Menyumbangkan buku bekas",
"Menghargai semua orang"
],

fact:"Sekitar 700 juta orang di dunia masih hidup dalam kemiskinan ekstrem.",

color:"#E5243B",
icon:"images/01.png.jpg"
},

{
id:2,
title:"Zero Hunger",
description:"Mengakhiri kelaparan dan memastikan semua orang mendapat makanan bergizi.",

examples:[
"Program makan bergizi di sekolah",
"Kebun sayur di rumah",
"Membagikan makanan kepada yang membutuhkan",
"Menanam sayuran sendiri"
],

actions:[
"Menghabiskan makanan",
"Tidak membuang makanan",
"Makan makanan bergizi",
"Menanam sayuran di rumah"
],

fact:"Hampir 735 juta orang di dunia masih mengalami kelaparan.",

color:"#DDA63A",
icon:"images/02.png.jpg"
},

{
id:3,
title:"Good Health and Well-being",
description:"Menjamin kehidupan yang sehat dan meningkatkan kesejahteraan semua orang.",

examples:[
"Berolahraga setiap hari",
"Memakai helm saat bersepeda",
"Cuci tangan dengan sabun",
"Vaksinasi"
],

actions:[
"Minum air putih yang cukup",
"Olahraga rutin",
"Tidur yang cukup",
"Makan buah dan sayur"
],

fact:"Mencuci tangan dengan sabun dapat mencegah banyak penyakit menular.",

color:"#4C9F38",
icon:"images/03.png.jpg"
},

{
id:4,
title:"Quality Education",
description:"Menjamin pendidikan yang berkualitas dan kesempatan belajar sepanjang hayat.",

examples:[
"Belajar di sekolah",
"Membaca buku di perpustakaan",
"Mengikuti kursus online",
"Belajar bersama teman"
],

actions:[
"Rajin belajar",
"Membaca buku setiap hari",
"Membantu teman belajar",
"Bertanya kepada guru"
],

fact:"Pendidikan membantu mengurangi kemiskinan dan meningkatkan kualitas hidup.",

color:"#C5192D",
icon:"images/04.png.jpg"
},

{
id:5,
title:"Gender Equality",
description:"Mencapai kesetaraan gender dan memberdayakan semua perempuan dan laki-laki.",

examples:[
"Anak laki-laki dan perempuan mendapat kesempatan yang sama",
"Semua boleh menjadi pemimpin",
"Tidak membeda-bedakan teman",
"Semua berhak mendapatkan pendidikan"
],

actions:[
"Menghargai semua teman",
"Tidak melakukan perundungan",
"Bekerja sama tanpa membedakan gender",
"Mendukung teman meraih cita-citanya"
],

fact:"Kesempatan yang sama membuat masyarakat menjadi lebih maju.",

color:"#FF3A21",
icon:"images/05.png.jpg"
},

{
id:6,
title:"Clean Water and Sanitation",
description:"Menjamin ketersediaan air bersih dan sanitasi yang layak untuk semua.",

examples:[
"Menggunakan air bersih",
"Mencuci tangan",
"Toilet yang bersih",
"Menjaga sungai tetap bersih"
],

actions:[
"Matikan keran setelah digunakan",
"Tidak membuang sampah ke sungai",
"Menghemat air",
"Menjaga kebersihan kamar mandi"
],

fact:"Air bersih adalah kebutuhan dasar setiap manusia.",

color:"#26BDE2",
icon:"images/06.png.jpg"
},

// ===== LANJUT KE BAGIAN 2 =====

{
id:7,
title:"Affordable and Clean Energy",
description:"Menjamin akses energi yang terjangkau, andal, dan ramah lingkungan.",

examples:[
"Menggunakan panel surya",
"Mematikan lampu saat tidak dipakai",
"Menggunakan lampu LED hemat energi",
"Memanfaatkan energi angin dan air"
],

actions:[
"Matikan lampu sebelum tidur",
"Cabut charger setelah digunakan",
"Hemat penggunaan AC",
"Gunakan cahaya matahari pada siang hari"
],

fact:"Energi matahari adalah salah satu sumber energi terbersih di dunia.",

color:"#FCC30B",
icon:"images/07.png.jpg"
},

{
id:8,
title:"Decent Work and Economic Growth",
description:"Mendorong pekerjaan yang layak dan pertumbuhan ekonomi yang berkelanjutan.",

examples:[
"Orang tua bekerja dengan aman",
"Mendukung UMKM lokal",
"Belajar keterampilan baru",
"Berwirausaha sejak muda"
],

actions:[
"Rajin belajar",
"Menghargai setiap pekerjaan",
"Membeli produk lokal",
"Menabung sejak kecil"
],

fact:"Pekerjaan yang layak membantu meningkatkan kesejahteraan keluarga.",

color:"#A21942",
icon:"images/08.png.jpg"
},

{
id:9,
title:"Industry, Innovation and Infrastructure",
description:"Membangun infrastruktur, mendorong inovasi, dan industri yang berkelanjutan.",

examples:[
"Jalan yang baik",
"Internet cepat",
"Jembatan yang aman",
"Teknologi ramah lingkungan"
],

actions:[
"Belajar teknologi",
"Berpikir kreatif",
"Menciptakan karya sederhana",
"Merawat fasilitas umum"
],

fact:"Inovasi membuat kehidupan manusia menjadi lebih mudah.",

color:"#FD6925",
icon:"images/09.png.jpg"
},

{
id:10,
title:"Reduced Inequalities",
description:"Mengurangi kesenjangan di dalam maupun antarnegara.",

examples:[
"Semua anak mendapat kesempatan belajar",
"Menghormati perbedaan",
"Membantu teman yang kesulitan",
"Tidak melakukan diskriminasi"
],

actions:[
"Bersikap adil kepada semua teman",
"Tidak membully",
"Menghargai perbedaan",
"Mau berteman dengan siapa saja"
],

fact:"Setiap orang memiliki hak yang sama tanpa memandang latar belakangnya.",

color:"#DD1367",
icon:"images/10.png.jpg"
},

{
id:11,
title:"Sustainable Cities and Communities",
description:"Mewujudkan kota dan permukiman yang aman, nyaman, dan berkelanjutan.",

examples:[
"Naik transportasi umum",
"Menanam pohon di lingkungan",
"Memilah sampah",
"Menggunakan jalur sepeda"
],

actions:[
"Buang sampah pada tempatnya",
"Hemat listrik",
"Ikut kerja bakti",
"Menanam tanaman di rumah"
],

fact:"Lebih dari setengah penduduk dunia tinggal di kawasan perkotaan.",

color:"#FD9D24",
icon:"images/11.png.jpg"
},

{
id:12,
title:"Responsible Consumption and Production",
description:"Mendorong pola konsumsi dan produksi yang bertanggung jawab.",

examples:[
"Membawa botol minum sendiri",
"Menggunakan tas belanja kain",
"Mendaur ulang barang bekas",
"Mengurangi penggunaan plastik sekali pakai"
],

actions:[
"Habiskan makanan",
"Gunakan kembali barang yang masih layak",
"Pilah sampah",
"Belanja seperlunya"
],

fact:"Mengurangi sampah adalah salah satu cara paling mudah menjaga bumi.",

color:"#BF8B2E",
icon:"images/12.png.jpg"
},

// ===== LANJUT KE BAGIAN 3 =====

{
id:13,
title:"Climate Action",
description:"Mengambil tindakan segera untuk mengatasi perubahan iklim dan dampaknya.",

examples:[
"Menanam pohon",
"Mengurangi penggunaan kendaraan bermotor",
"Menggunakan energi terbarukan",
"Mengurangi penggunaan plastik"
],

actions:[
"Matikan lampu jika tidak digunakan",
"Menanam pohon di sekitar rumah",
"Berjalan kaki atau bersepeda",
"Mengurangi penggunaan plastik sekali pakai"
],

fact:"Suhu rata-rata bumi terus meningkat akibat perubahan iklim.",

color:"#3F7E44",
icon:"images/13.png.jpg"
},

{
id:14,
title:"Life Below Water",
description:"Melestarikan dan memanfaatkan laut serta sumber daya laut secara berkelanjutan.",

examples:[
"Tidak membuang sampah ke laut",
"Menjaga terumbu karang",
"Mengurangi penggunaan plastik",
"Melindungi hewan laut"
],

actions:[
"Buang sampah pada tempatnya",
"Kurangi penggunaan sedotan plastik",
"Ikut kegiatan bersih pantai",
"Menghemat penggunaan plastik"
],

fact:"Lebih dari 70% permukaan bumi ditutupi oleh lautan.",

color:"#0A97D9",
icon:"images/14.png.jpg"
},

{
id:15,
title:"Life on Land",
description:"Melindungi ekosistem daratan, hutan, dan keanekaragaman hayati.",

examples:[
"Menanam pohon",
"Melindungi satwa liar",
"Menjaga hutan",
"Mengurangi penebangan liar"
],

actions:[
"Tidak merusak tanaman",
"Menanam bunga atau pohon",
"Menyayangi hewan",
"Mengurangi penggunaan kertas"
],

fact:"Hutan menghasilkan oksigen yang kita hirup setiap hari.",

color:"#56C02B",
icon:"images/15.png.jpg"
},

{
id:16,
title:"Peace, Justice and Strong Institutions",
description:"Mendorong masyarakat yang damai, adil, dan inklusif.",

examples:[
"Menyelesaikan masalah tanpa kekerasan",
"Menghormati aturan",
"Bersikap jujur",
"Menghargai hak orang lain"
],

actions:[
"Tidak berkelahi",
"Berkata jujur",
"Menghormati guru dan orang tua",
"Membantu teman yang kesulitan"
],

fact:"Perdamaian dimulai dari sikap saling menghormati di lingkungan sekitar.",

color:"#00689D",
icon:"images/16.png.jpg"
},

{
id:17,
title:"Partnerships for the Goals",
description:"Memperkuat kerja sama untuk mencapai seluruh tujuan SDGs.",

examples:[
"Kerja sama antar sekolah",
"Kolaborasi pemerintah dan masyarakat",
"Gotong royong membersihkan lingkungan",
"Program sosial bersama"
],

actions:[
"Suka bekerja sama",
"Gotong royong",
"Saling membantu",
"Berbagi ilmu kepada teman"
],

fact:"Seluruh 17 tujuan SDGs hanya dapat tercapai jika semua pihak bekerja sama.",

color:"#19486A",
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
