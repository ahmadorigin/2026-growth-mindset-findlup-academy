// Latihan 2 -- Validasi Login

const { log } = require("node:console");

// New Command: coba bikin validasi password minimal 6 karakter dengan maksimal 8 karakter...
// New Command: Buat Function untuk feature login

function validasiLogin(username, password) {
  // Tahap 2: Validasi inputan user
  if (password.length < 6 || password.length > 8) {
    console.log(
      "Password harus lebih dari 5 karakter dan kurang dari 9 karakter",
    );

    return;
  }

  // Tahap 3: System check user_password
  const message =
    username === "admin" && password === "12345678"
      ? "Login Berhasil!!"
      : "Username atau Password Salahh...";

  console.log(message);
}

// User input data
validasiLogin("admin", "12345678");
