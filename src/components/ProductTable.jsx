import { useEffect, useState } from "react";

import { API_URL } from "../constants";

const ProductTable = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProduk(data))
      .catch((err) => console.error("Gagal fetch data:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Daftar Produk</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Kategori</th>
            <th className="p-2 border">Harga</th>
            <th className="p-2 border">Kuantitas</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
