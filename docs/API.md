# 🧩 Dokumentasi REST API — Manajemen Hasil Tani

API ini digunakan untuk mengelola data produk hasil pertanian. Disediakan oleh layanan [MockAPI.io](https://mockapi.io/).

---

## 🌐 Base URL
https://686bb03de559eba90873a0b5.mockapi.io/produk


---

## 📦 Resource: `/produk`

### 1. 🔍 GET /produk
Mengambil semua data produk.

**Request**
1.  GET /produk


    **Response**
    ```json
    [
    {
        "id": "1",
        "nama": "Kakao",
        "kategori": "Biji-bijian",
        "harga": 70000,
        "kuantitas": 1
    }
    ]
2.  POST /produk
    Content-Type: application/json
   
    **Response**
     ```json
    {
        "nama": "Cabai",
        "kategori": "Sayur",
        "harga": 15000,
        "kuantitas": 10
    }

4.  PUT /produk/1
    Content-Type: application/json
    **Response**
     ```json

    {
        "nama": "Cabai Merah",
        "kategori": "Sayur",
        "harga": 16000,
        "kuantitas": 12
    }
6.  DELETE /produk/1

Catatan
- Endpoint ini tidak memerlukan autentikasi (public access)
- ID dibuat otomatis oleh MockAPI
- Semua response berupa JSON

Digunakan oleh:
🔗 https://nvl-manajemen-hasil-tani.vercel.app









