// Latihan 2 -- Validasi Login

// New Command: coba bikin validasi password minimal 6 karakter dengan maksimal 8 karakter...
// New Command: Buat Function untuk feature login

function validasiLogin(username, password) {
  // Tahap 2: Validasi inputan user
  if (password.length <= 6 || password.length >= 8) {
    console.log(
      "Password harus lebih dari 5 karakter dan kurang dari 9 karakter",
    );

    return;
  }

  if (username === "admin" && password === "12345678") {
    // Tahap 3: System check user_password
    console.log("Login Berhasil!!");
  } else {
    console.log("Username atau Password Salahh...");
  }
}

// Usr input data
validasiLogin("admin", "1234");
