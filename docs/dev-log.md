# 📘 Dev Log — Produk Tani App

Catatan harian proses pengembangan proyek ini. Berisi update harian, kendala teknis, dan hal-hal penting selama membangun aplikasi.

---

## 🗓️ 07 Juli 2025 — Setup Awal Proyek

- Inisialisasi proyek React dengan Vite
- Install dan konfigurasi Tailwind CSS
- Install dan setup JSON Server sebagai backend lokal
- Membuat struktur folder komponen dan halaman
- Membuat file `README.md` dan `db.json`
- Commit awal menggunakan Git
- Migrasi dari json-server lokal ke MockAPI online
- Update seluruh fetch endpoint di komponen
- API sekarang live di https://686bb03de559eba90873a0b5.mockapi.io
- Buat komponen daftar produk dan tampilkan data dari json-server.
- Buat form input produk baru dan hubungkan dengan API untuk menambahkan data
- Tambah tombol Edit di tabel
- Prefilled data ke form saat edit
- Kirim update data menggunakan PUT ke MockAPI



---

## 🧠 Catatan
- Tailwind versi 4.1.11 membutuhkan konfigurasi PostCSS terbaru
- Masalah "module is not defined" karena mode ES module → solusi: rename `postcss.config.js` ke `.cjs`
