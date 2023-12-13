import React from 'react'

const Exit = ({ setPage }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4">
          Դուք հաջողությամբ դուրս եկաք
        </h2>
        <p className="text-gray-600 mb-8">Հուսով ենք քեզ նորից կտեսնենք :)</p>
        <button
          onClick={() => setPage(1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Գրանցվել
        </button>
      </div>
    </div>
  )
}

export default Exit
