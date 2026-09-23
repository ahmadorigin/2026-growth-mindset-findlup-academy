// Latihan 1

import { log } from "node:console";

// Jika UTC = 00.00 maka
// WIB  = 07.00
// WITA = 08.00
// WIT  = 09.00

// Latihan 2

// Jika di Jakarta 12.00
// Berapa di Mekkah? --- Mekkah = 08.00

// Latihan 3

const utc = new Date();

const wib = new Date(utc.getTime() + 7 * 60 * 60 * 1000);
const mekkah = new Date(utc.getTime() + 3 * 60 * 60 * 1000);

console.log(wib, mekkah);

// Latihan 4

// Knp server tidak pakai WIB???
// Karena mengikuti waktu utama yang telah ditetapkan secara global di Greenwich 1970
