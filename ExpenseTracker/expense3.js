// mengambil value dari inputan

const input1 = document.querySelector(".pemasukkan-input .form-name");
const input2 = document.querySelector(".pemasukkan-input .form-date");
const input3 = document.querySelector(".pemasukkan-input .form-number");
const button1 = document.querySelector(".pemasukkan-input button");

//selector ul li

const ulLi = document.querySelector(".container2 table tbody");

//menambahkan fungsi untuk di pencet button

//fungsi untuk popup

button1.addEventListener("click", function () {
  var value1 = input1.value;
  var value2 = input2.value;
  var value3 = input3.value;
  if (value1 === "" || value2 === "" || value3 === "") {
    var ab = confirm("Please insert a value");
    if (ab === true) {
    } else {
      location.href = "../index.html";
      alert("Ok get out");
    }
  } else {
    ulLi.innerHTML += `
            <tr class="tbdb">
                <td>${value1}</td>
                <td>${value2}</td>
                <td>${value3}</td>
                <td class = "delete"><i class="bi bi-trash-fill"></i></td>
            </tr>
        
        `;
  }

  const del1 = document.querySelectorAll(".delete");
  var i;

  for (i = 0; i < del1.length; i++) {
    del1[i].onclick = function () {
      this.parentNode.style.display = "none";
    };
  }

  input1.value = "";
  input2.value = "";
  input3.value = "";
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    alert("this device is not supported");
    location.href = "../index.html";
  } else {
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
