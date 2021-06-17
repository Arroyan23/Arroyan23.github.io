// mengambil value dari inputan

const input1 = document.querySelector('.pemasukkan-input .form-name');
const input2 = document.querySelector('.pemasukkan-input .form-date');
const input3 = document.querySelector('.pemasukkan-input .form-number');
const button1 = document.querySelector('.pemasukkan-input button');

//selector ul li 

const ulLi = document.querySelector('.logic2')

//menambahkan fungsi untuk di pencet button

button1.addEventListener('click', function() {
    var value1 = input1.value;
    var value2 = input2.value;
    var value3 = input3.value;

    
    
        ulLi.innerHTML += `
            <ul>
                <li>${value1}</li>
                <li>${value2}</li>
                <li>${value3}</li>
            </ul>
        `
    
});
