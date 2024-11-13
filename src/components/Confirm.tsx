import React from 'react';

const LogoutModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg text-center text-white">
        <p>Tem certeza?</p>
        <div className="mt-4 flex justify-between space-x-4">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={onConfirm}
          >
            SIM
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            onClick={onCancel}
          >
            NÃO
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;