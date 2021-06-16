const input1 = document.querySelector(".input1");
const button1 = document.querySelector(".kotak1 button");

button1.addEventListener("click", function () {
  const valueInput = input1.value;
  const p1 = document.querySelector(".inner1");
  const insert = document.querySelector(".banyakan");
  if (valueInput > 0) {
    p1.innerHTML = "$" + valueInput;
    insert.classList.remove("errorHandling");
  } else if (valueInput == 0) {
    insert.classList.add("errorHandling");
  } else {
    insert.classList.add("errorHandling");
  }
});

const input2 = document.querySelector(".input2");
const button2 = document.querySelector(".expense button");

button2.addEventListener("click", function () {
  const valueInput2 = input2.value;
  const p3 = document.querySelector(".p3");
  p3.innerHTML = "$" + valueInput2;
});
