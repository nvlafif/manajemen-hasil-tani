const PopupDelete = ({ onConfirm, onCancel }) => {
  return (        
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Konfirmasi Hapus</h2>
        <p className="text-gray-600 mb-6">
          Apakah kamu yakin ingin menghapus produk ini? Tindakan ini tidak dapat dibatalkan.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopupDelete