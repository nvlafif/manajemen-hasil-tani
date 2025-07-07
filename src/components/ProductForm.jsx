import { useState, useEffect } from "react";
import { API_URL } from "../constants";

const ProductForm = ({ onAdd, onUpdate, editingData, cancelEdit }) => {
  const [formData, setFormData] = useState({
    nama: "",
    kategori: "",
    harga: "",
    kuantitas: "",
  });

  // Prefill form saat mode edit
  useEffect(() => {
    if (editingData) {
      setFormData(editingData);
    } else {
      setFormData({ nama: "", kategori: "", harga: "", kuantitas: "" });
    }
  }, [editingData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      harga: Number(formData.harga),
      kuantitas: Number(formData.kuantitas),
    };

    if (editingData) {
      // UPDATE / PUT
      fetch(`${API_URL}/${editingData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          onUpdate(); // Refresh data tabel
          cancelEdit(); // Keluar dari mode edit
        });
    } else {
      // CREATE / POST
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          onAdd(data); // Tambah data baru ke tabel
          setFormData({ nama: "", kategori: "", harga: "", kuantitas: "" });
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 border rounded bg-white shadow"
    >
      <h2 className="text-lg font-semibold mb-4">
        {editingData ? "Edit Produk" : "Tambah Produk Baru"}
      </h2>
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

      <div className="mt-4 flex gap-3">
        <button
          type="submit"
          className={`px-4 py-2 text-white rounded ${
            editingData ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {editingData ? "Simpan Perubahan" : "Tambah"}
        </button>

        {editingData && (
          <button
            type="button"
            className="px-4 py-2 border border-gray-400 rounded"
            onClick={cancelEdit}
          >
            Batal
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
