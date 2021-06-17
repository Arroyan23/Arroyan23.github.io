//memberikan close

//hilang saat di pencet

// menambahkan new Element

const p = document.querySelector(".untukList");
const input = document.querySelector(".input input");

function newElement() {
  const value = input.value;
  const baru = document.createElement("p");
  const sambung = document.createTextNode(value);
  baru.appendChild(sambung);
  if (value === "") {
    alert("Please Input Your Text");
  } else {
    p.appendChild(baru);
  }

  const span = document.createElement("span");
  const textNode = document.createTextNode("\u00D7");
  span.appendChild(textNode);
  span.className = "close";
  baru.appendChild(span);

  const byk2 = document.getElementsByClassName("close");
  var i;
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
