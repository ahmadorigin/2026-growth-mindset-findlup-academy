// Soal 1
let bulan = [
  "Muharram",
  "Shafar",
  "Rabi`ul Awwal",
  "Rabi`ul Akhir",
  "Jumadil Awwal",
  "Jumadil Akhir",
  "Rajab",
  "Sya`ban",
  "Ramadhan",
  "Syawwal",
  "Dzul Qa`dah",
  "Dzul Hijjah",
];
console.log(bulan[4]); // Tampilkan bulan ke-5

// Soal 2
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
angka.push(11); // Menambahkan angka ke-11

// Soal 3
let myFavoriteFood = [
  "Brownies",
  "Bubur Kacang Hijau",
  "Nagasari",
  "Salad Buah",
  "Kurma",
];
myFavoriteFood[1] = "Pizza"; // Mengubah isi Array, (tapi saya kurang suka pizza...)

// Soal 4
let buah = ["Apel", "Mangga", "Jeruk"];
buah.shift(0); // Menghapus elemen pertama

// Soal 5
angka = [];
angka.push(5, 10, 15); // Menanbahkan angka random ke array kosong

// Soal 6
buah = ["Apel", "Mangga", "Jeruk", "Durian", "Pisang"];
let panjangArray = buah.length; // Menghitung panjang array dengan otomatis

// Soal 7
let nilaiSiswaA = [{ math: 80, bInggris: 85 }];
let nilaiSiswaB = [{ math: 75, bInggris: 90 }];
console.log(nilaiSiswaB[0].math); // Menampilkan nilai mate siswa b

// Soal 8
angka = [1, 2, 3, 4, 5];
angka.forEach((a) => console.log(a)); // Menampilkan angka tiap iterasi

// Soal 9
let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];
let arrTergabung = arr1.concat(arr2); // Menggabungkan 2 array

// Soal 10
angka = [1, 2, 3, 4, 5];
angka.reverse(); // Membalikkan ururtan elemen array

// Soal 11
buah = ["apel", "mangga", "jeruk"];
buah.pop(); // Menghapus elemen terakhir

// Soal 12
angka = [0, 20, 34, 41, 50, 9, 7, 86, 93, 10];
let angkaTerbesar = 0;
angka.forEach((a) => {
  if (angkaTerbesar < a) angkaTerbesar = a;
}); // Mencari angka terbesar
