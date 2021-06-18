//selsection for class

function kelas1() {
  location.href = "mencariNilai/mencari.html";
}

function kelas2() {
  location.href = "financeManagement/finance.html";
}

function kelas3() {
  location.href = "ExpenseTracker/expense.html";
}

// responsive

const banyak1 = document.querySelector(".barulagi1");
const hum = document.querySelector(".humburger");

const r1 = document.querySelector(".r1");
const r2 = document.querySelector(".r2");
const r3 = document.querySelector(".r3");

hum.addEventListener("click", function () {
  banyak1.classList.toggle("slide");
  r1.classList.toggle("dengan1");
  r3.classList.toggle("dengan2");
  r2.classList.toggle("dengan3");
});

// untuk perputaran responsive

//untuk list

const list1 = document.querySelector(".twt1");
const list2 = document.querySelector(".igt2");
const list3 = document.querySelector(".fcb1");
const list4 = document.querySelector(".wths1");

function clik1() {
  location.href = "https://twitter.com/OyengRyn";
}

function clik2() {
  location.href = "https://instagram.com/yeng_ryn";
}

function clik3() {
  location.href = "https://www.facebook.com/royan.syawqi";
}

function clik4() {
  location.href = "https://api.whatsapp.com/send?phone=6281218012006";
}
