import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import ProductForm from "./ProductForm";
import PopupDelete from "./PopupDelete";




const ProductTable = () => {

  const [loading, setLoading] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [produk, setProduk] = useState([]);
  const [editingData, setEditingData] = useState(null);

  const fetchProduk = () => {
    setLoading(true);
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setProduk(data))
    .catch((err) => console.error("Gagal fetch data:", err))
    .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProduk();
  }, []);

  const handleEdit = (item) => setEditingData(item);
  const cancelEdit = () => setEditingData(null);

  const confirmDelete = (id) => {
    setSelectedId(id);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirmed = () => {
    fetch(`${API_URL}/${selectedId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        fetchProduk();
        setShowDeleteModal(false);
        setSelectedId(null);
      });
  };

  const thClass = 'text-[0.9rem] w-fit h-[50px] px-2 sm:w-auto sm:h-auto sm:text-[1rem] sm:px-4 sm:py-3';


  return (
    <div className=" p-4 bg-white rounded-xl shadow-md">
      <ProductForm
        onAdd={fetchProduk}
        onUpdate={fetchProduk}
        editingData={editingData}
        cancelEdit={cancelEdit}
      />

      <h2 className="text-xl font-bold text-gray-800 mb-4">Daftar Produk</h2>
      <div className=" overflow-x-auto rounded-xl shadow border border-gray-500 ">
            <table className=" min-w-full text-sm text-left text-gray-700">
                <thead className="bg-white text-gray-700 border-b font-semibold text-sm">
                <tr>
                    <th className={`${thClass}`}>ID</th>
                    <th className={`${thClass}`}>Nama</th>
                    <th className={`${thClass}`}>Kategori</th>
                    <th className={`${thClass}`}>Harga</th>
                    <th className={`${thClass}`}>Kuantitas</th>
                    <th className={`${thClass} text-center` }>Aksi</th>
                </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="text-center py-8 text-blue-500 font-semibold animate-pulse">
                        ⏳ Memuat data produk...
                      </td>
                    </tr>
                  ) : produk.length > 0 ? (
                    produk.map((item, i) => (
                      <tr
                        key={item.id}
                        className="border-b hover:bg-gray-50 transition duration-150"
                      >
                        <td className="px-4 py-2">{i + 1}</td>
                        <td className="px-4 py-2">{item.nama}</td>
                        <td className="px-4 py-2">{item.kategori}</td>
                        <td className="px-4 md:p-4 md:w-auto py-2">Rp {item.harga.toLocaleString()}</td>
                        <td className="px-4 py-2">{item.kuantitas} Kg</td>
                        <td className="px-4 py-2 text-center md:space-x-2 space-y-2">
                          <button
                            className="bg-yellow-400 hover:bg-yellow-500 text-white text-xs font-medium py-1 px-2 rounded"
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium py-1 px-2 rounded"
                            onClick={() => confirmDelete(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-6 text-gray-400 italic bg-gray-50">
                        Belum ada produk 😢
                      </td>
                    </tr>
                  )}
                </tbody>
            </table>
            {showDeleteModal && (
              <PopupDelete
                onConfirm={handleDeleteConfirmed}
                onCancel={() => setShowDeleteModal(false)}
              />
            )}

        </div>
        



      
    </div>
  );
};

export default ProductTable;
