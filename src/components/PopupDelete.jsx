const PopupDelete = ({ onConfirm, onCancel }) => {
  return (        
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-[2rem] shadow-lg p-6 w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Konfirmasi Hapus</h2>
        <p className="text-gray-600 mb-6 sm:text-[1rem] text-[0.8rem]">
          Apakah kamu yakin ingin menghapus produk ini? Tindakan ini tidak dapat dibatalkan.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="sm:text-[1rem] text-[0.8rem] px-4 py-2 border border-gray-300 rounded-[0.8rem] hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="sm:text-[1rem] text-[0.8rem] px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-[0.8rem]"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopupDelete