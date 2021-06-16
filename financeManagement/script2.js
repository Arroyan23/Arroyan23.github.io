const input1 = document.querySelector('.input input');
const button = document.querySelector('.input button');


button.addEventListener('click', function(){
  const forList = document.querySelector('.untukList');
  var input2 = input1.value;
  const tambah = document.createElement('p');
  const bnyk = document.createTextNode(input2);
  tambah.appendChild(bnyk);
  forList.appendChild(tambah);
  const tambah2 = document.createElement('span');
  const bnyk2 = document.createTextNode('\u00D7')
  tambah2.appendChild(bnyk2);
  tambah.appendChild(tambah2);
  tambah.classList.add('kelasBaru');
  forList.style.display = 'flex';
});

const utkTutup = document.getElementsByTagName('span')[i];
var i;
for(i = 0; i < utkTut.length; i++) {
  utkTut[i].onclick = function(){
  const div = this.parentElement;
  div.style.display = 'none';
  }
}