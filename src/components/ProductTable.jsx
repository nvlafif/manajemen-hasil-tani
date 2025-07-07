import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import ProductForm from "./ProductForm";

const ProductTable = () => {
  const [produk, setProduk] = useState([]);
  const [editingData, setEditingData] = useState(null);

  const fetchProduk = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProduk(data))
      .catch((err) => console.error("Gagal fetch data:", err));
  };

  useEffect(() => {
    fetchProduk();
  }, []);

  const handleEdit = (item) => {
    setEditingData(item); // Kirim data ke form
  };

  const cancelEdit = () => {
    setEditingData(null); // Keluar dari mode edit
  };

  return (
    <div className="p-4">
      <ProductForm
        onAdd={fetchProduk}
        onUpdate={fetchProduk}
        editingData={editingData}
        cancelEdit={cancelEdit}
      />

      <h2 className="text-xl font-semibold mb-4">Daftar Produk</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Kategori</th>
            <th className="p-2 border">Harga</th>
            <th className="p-2 border">Kuantitas</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {produk.map((item) => (
            <tr key={item.id}>
              <td className="p-2 border">{item.id}</td>
              <td className="p-2 border">{item.nama}</td>
              <td className="p-2 border">{item.kategori}</td>
              <td className="p-2 border">Rp {item.harga.toLocaleString()}</td>
              <td className="p-2 border">{item.kuantitas}</td>
              <td className="p-2 border">
                <button
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
