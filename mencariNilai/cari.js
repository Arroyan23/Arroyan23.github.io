const input1 = document.querySelector(".inputTugas input");
const input2 = document.querySelector(".inputUts input");
const input3 = document.querySelector(".inputUas input");
const button1 = document.querySelector(".button button");

button1.addEventListener("click", function () {
  const inser = document.querySelector(".hasilrata p");
  const inser2 = document.querySelector(".kemana p");
  const valueInput1 = parseInt(input1.value);
  const valueInput2 = parseInt(input2.value);
  const valueInput3 = parseInt(input3.value);
  const hitung = Math.round((valueInput1 + valueInput2 + valueInput3) / 3);
  inser.innerHTML = hitung;
  if (hitung <= 25) {
    inser2.innerHTML = "rendah (+)";
  } else if (hitung <= 50) {
    inser2.innerHTML = "rendah (-)";
  } else if (hitung <= 75) {
    inser2.innerHTML = "tinggi (-)";
  } else if (hitung <= 100) {
    inser2.innerHTML = "tinggi (+)";
  } else {
    inser.innerHTML = "undefined";
    inser2.innerHTML = "undefined";
  }
});
