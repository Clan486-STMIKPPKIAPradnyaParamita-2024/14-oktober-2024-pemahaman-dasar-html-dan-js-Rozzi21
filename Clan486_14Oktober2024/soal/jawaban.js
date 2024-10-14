// // un comment soal jika di coba satu satu


// // Soal 01 :
// // Cetaklah di console kalimat perkenalan kamu dengan menyimpan dahulu di variabel nama, umur, dan domisili.
// // Hasil Yang Diharapkan : Perkenalkan nama saya Naulan, umur saya 19, domisili saya Malang

// // -------- Tulis Kode Kamu Disini (Nomor 1) --------

// console.log(
//   "perkenalkan nama saya Fakhruddin umur saya 21 domisili saya malang"
// );

// // -------- ------ --------

// // Soal 02 :
// // Buatlah variabel panjang dengan nilai 5 dan variabel lebar dengan nilai 7 untuk menentukan luas persegi panjang. Dan buatlah variabel luasPersegiPanjang untuk menyimpan hasil dari rumus persegi panjang.
// // Hasil Yang Diharapkan : 35

// // -------- Tulis Kode Kamu Disini (Nomor 2) --------

// var panjang = 5;
// var lebar = 7;

// const luasPersegiPanjang = panjang * lebar;
// console.log("luas persegi panjang adalah", luasPersegiPanjang);

// // -------- ------ --------

// // Soal 03 :
// // Buatlah variabel panjang dengan nilai 5 dan variabel lebar dengan nilai 7 untuk menentukan luas persegi panjang. Dan buatlah variabel luasPersegiPanjang untuk menyimpan hasil dari rumus persegi panjang.
// // Hasil Yang Diharapkan : 35

// // -------- Tulis Kode Kamu Disini (Nomor 3) --------

// console.log("luas persegi panjang adalah", luasPersegiPanjang);

// // -------- ------ --------

// // Soal 04 :
// // Lampu menyala setiap 5 detik sekali. Untuk menyala sebanyak 48 kali, berapa menit yang dibutuhkan?
// // Hasil Yang Diharapkan : Dibutuhkan waktu 4 menit untuk menyala sebanyak 48 kali.

// // -------- Tulis Kode Kamu Disini (Nomor 4) --------

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function askForTime() {
//   rl.question("masukkan mau nyala berapa kali = ", (answer) => {
//     const number = parseFloat(answer);

//       if (isNaN(number)) {
//           console.log("masukkan angka coy")
//         askForTime()
//     } else {
//       var light = 5;
//       const seconds = number * light;
//         const time = seconds / 60;
        
//       console.log("waktu yang dibutuhkan adalah = ", Math.round(time), " menit");
//       rl.close();
//     }
//   });
// }

// askForTime();

// // -------- ------ --------

// // Soal 05 :
// // Buatlah program untuk menghitung total belanja. Simpan harga barang dan jumlah beli di variabel, lalu cetak total belanja
// // Hasil Yang Diharapkan : Total belanja saya adalah 150000.

// // -------- Tulis Kode Kamu Disini (Nomor 5) --------

// var hargaBarang = 50000;
// var jumlahBarang = 3
// console.log("Total belanja saya adalah = ", hargaBarang * jumlahBarang)

// // -------- ------ --------

// // Soal 06 :
// // Buatlah program untuk menghitung keliling lingkaran. Simpan jari-jari lingkaran di variabel dan gunakan rumus keliling = 2 * π * r. Cetak kelilingnya.
// // Hasil Yang Diharapkan : Keliling lingkaran adalah 62.8

// var pi = 3.14
// var jariJari = 10

// console.log("Keliling Lingkaran adalah = ",2 * pi * jariJari)

// // -------- Tulis Kode Kamu Disini (Nomor 6) --------



// // -------- ------ --------

// // Soal 07 :
// // Buatlah program untuk menentukan apakah angka adalah genap atau ganjil. Simpan angka di variabel dan cetak hasilnya.
// // Hasil Yang Diharapkan : Angka 7 adalah ganjil

// // -------- Tulis Kode Kamu Disini (Nomor 7) --------

// const readlineTwo = require("readline");

// const readlineGenapGanjil = readlineTwo.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

// function askGenapGanjil() {
//     readlineGenapGanjil.question("masukkan angka yang mau di cek = ", (input) => {
//         const number = parseFloat(input);
    
//         if (isNaN(number)) {
//             console.log("masukkan angka coy")
//             askGenapGanjil()
//         } else {
//             if (number % 2 === 0) {
                  
//                 console.log("angkanya tuh genap");
//             } else {
//                 console.log("angkanya tuh ganjil")
//             }
//         }
//         readlineGenapGanjil.close();
//     });
// }

// askGenapGanjil()

// // -------- ------ --------

// // Soal 08 :
// // Buatlah program untuk menghitung rata-rata dari tiga nilai. Simpan nilai di variabel dan cetak rata-ratanya.
// // Hasil Yang Diharapkan : Rata-rata nilai adalah 80

// // -------- Tulis Kode Kamu Disini (Nomor 8) --------

// const nilai1 = 75;
// const nilai2 = 85;
// const nilai3 = 80;

// const rataRata = (nilai1 + nilai2 + nilai3) / 3;
// console.log(`Rata-rata nilai adalah ${rataRata}`);


// // -------- ------ --------

