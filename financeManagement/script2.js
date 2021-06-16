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
  const bnyk2 = document.createTextNode('x')
  tambah2.appendChild(bnyk2);
  tambah.appendChild(tambah2);
  tambah.classList.add('kelasBaru');
  forList.style.display = 'flex';
    tambah2.addEventListener('click', function(){
      forList.style.display = 'none';
    })
});

