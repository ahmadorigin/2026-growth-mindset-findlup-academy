console.log("\n===== Latihan 80% Praktik =====\n\n");

// Latihan 1 -- Validasi Umur Pengguna
console.log("Latihan 1 -- Validasi umur pengguna\n");
let umur: number = 6;

if (umur >= 17) {
  console.log("Anda boleh membuat SIM");
} else {
  console.log("Anda belum cukup umur...");
}

// Latihan 2 -- Validasi Login
console.log("\n\nLatihan 2 -- Validasi Login\n");

// User input data
let username: string = "admin";
let password: string = "1234";

// New Command: coba bikin validasi password minimal 6 karakter dengan maksimal 8 karakter...

// Tahap 2: Validasi inputan user
if (password.length <= 6 || password.length >= 8) {
  console.log(
    "Password harus lebih dari 5 karakter dan kurang dari 9 karakter",
  );
} else if (username === "admin" && password === "12345678") {
  // Tahap 3: System check user_password
  console.log("Login Berhasil!!");
} else {
  console.log("Username atau Password Salahh...");
}

// Latihan 3 -- Penilaian Mahasiswa
console.log("\n\nLatihan 3 -- Penilaian Mahasiswa\n");

let nilai: number = -75;
// input wajib di isi dengan nilai antara 1 - 100
// apabila di luar persyaratan tampilkan error

if (nilai > 100 || nilai < 0) {
  console.log("Error: Input nilai harus di antara 0 - 100");
} else if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else if (nilai >= 70) {
  console.log("C");
} else if (nilai >= 60) {
  console.log("D");
} else {
  console.log("E");
}

// Latihan 4 -- Cek Bilangan
console.log("\n\nLatihan 4 -- Cek Bilangan\n");

let angka: number = -10;

if (angka > 0) {
  console.log("Positif");
} else if (angka < 0) {
  console.log("Negatif");
} else {
  console.log("Nol");
}

console.log("\n===== Latihan Mandiri =====\n\n");

console.log("Latihan 1 -- Cek Kelulusan\n");
nilai = 84;

if (nilai >= 75) {
  console.log("Lulus nich");
} else {
  console.log("no Lulus nich");
}

console.log("\n\nLatihan 2 -- Sistem Parkir\n");
let kendaraan: string = "Motor";

switch (kendaraan) {
  case "Motor":
    console.log("Parkir Motor: 2000");
    break;
  case "Mobil":
    console.log("Parkir Mobil: 5000");
    break;
  case "Truk":
    console.log("Parkir Truk: 10000");
    break;

  default:
    console.log("Jalan kaki mawon...");
    break;
}

console.log("\n\nLatihan 3 -- Ganjil Genap\n");
angka = 4;
if (angka % 2 === 0) console.log(`${angka} adalah genap!!`);

console.log("\n\nLatihan 4 -- Validasi Password\n");
password = "12345678";

if (password.length >= 8 && password.indexOf("1") > 0) {
  console.log("Login berhasil...");
} else {
  console.log("Login Gagal...");
}

console.log("\n\nLatihan -- Pembuatan Email\n");

function validasiEmailLengkap(email: string) {
  if (!email) return "Email tidak boleh kosong";
  if (
    !email.includes(".com") ||
    !email.includes(".net") ||
    !email.includes(".id")
  )
    return 'Email harus mengandung domain ini ".com" atau ".id" atau ".net"';
  if (email.length < 10) return "Email tidak boleh kurang dari 10 karakater";
  if (!email.includes("1") || !email.includes("2") || !email.includes("3"))
    return "Email harus mengandung angka 1 atau 2 atau 3";

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(email)) {
    return "Format email tidak valid";
  }
  return "Email valid";
}

console.log(validasiEmailLengkap("user@gmail.com"));
