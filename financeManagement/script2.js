function diclick() {
  const banyak = document.querySelector(".inputTodo");
  const valuenya = banyak.value;
  const kelas = document.querySelector(".untukList");
  const awal = document.querySelector(".pengawalan");
  var mer = document.querySelector(".pengawalan p");
  if (valuenya === "") {
    awal.classList.add("merah");
    mer.innerHTML = "Please insert your tasks";
  } else {
    kelas.innerHTML += `<div class = "task"> 
                          <p id = "span">
                            ${document.querySelector(".inputTodo").value} <button class = "delete"><i class="bi bi-trash-fill"></i></button>
                          </p>
                         
                        </div>`;
    awal.classList.remove("merah");
    mer.innerHTML = "";
  }

  const del = document.querySelectorAll(".delete");
  var i;
  for (i = 0; i < del.length; i++) {
    del[i].onclick = function () {
      this.parentNode.remove();
    };
  }

  const comp = document.querySelectorAll(".task");

  var a;
  for (a = 0; a < comp.length; a++) {
    comp[a].onclick = function () {
      this.classList.toggle("completed");
    };
  }

  banyak.value = "";
}
