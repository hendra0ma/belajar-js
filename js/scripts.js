// let angka1 = 1;
// const angka2 = 2;



// let anggota = ['hendra', ['satu', 'dua', 'tiga'], 'rapen', 'joko hartanto']; // variable sakti versi 1

// console.log(anggota[1].length)

// for (let i = 0; i < anggota.length; i++) {
//     const data = anggota[i];
//     if (i == 1) {
//         for (let j = 0; j <  anggota[i].length; j++) {
//             console.log(anggota[i][j])
//         }
//     }
//        console.log(anggota[1][i])
// }



const inputNama = document.getElementById('nama')
const inputSubmit = document.getElementById('submit')
// const container = document.getElementById('container-nama')
//anjas

inputSubmit.addEventListener('click', actionSubmit);

// let anggota = [];

function actionSubmit() {
    anggota.push(inputNama.value);
    inputNama.value = "";
     container.innerHTML += `<tr>
        <td>${anggota[anggota.length - 1]}</td>
        </tr>`


}










//cara membuat function
//1

// function penjumlahan(angka1,angka2) {
//     return angka1 + angka2;
// }

// console.log(penjumlahan(3,2))

//2

// let penjumlahan = function (angka1,angka2) {
//      return angka1 + angka2;
// }

// console.log(penjumlahan(3,2))

//3


// let katahai = function () {
//     return this;
// }

// let penjumlahan = () => {
//     return this;
// }


