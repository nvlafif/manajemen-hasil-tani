import { useState } from "react";

import { API_URL } from "../constants";

const ProductForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    nama: "",
    kategori: "",
    harga: "",
    kuantitas: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        harga: Number(formData.harga),
        kuantitas: Number(formData.kuantitas),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        onAdd(data); // trigger refresh data
        setFormData({ nama: "", kategori: "", harga: "", kuantitas: "" });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded bg-white shadow">
      <h2 className="text-lg font-semibold mb-4">Tambah Produk Baru</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="p-2 border"
          type="text"
          name="nama"
          placeholder="Nama Produk"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border"
          type="text"
          name="kategori"
          placeholder="Kategori"
          value={formData.kategori}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border"
          type="number"
          name="harga"
          placeholder="Harga"
          value={formData.harga}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border"
          type="number"
          name="kuantitas"
          placeholder="Kuantitas"
          value={formData.kuantitas}
          onChange={handleChange}
          required
        />
      </div>
      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Tambah
      </button>
    </form>
  );
};

export default ProductForm;
