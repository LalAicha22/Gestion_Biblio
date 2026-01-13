import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-transform hover:scale-105 relative flex flex-col min-h-[340px]">
            {/* Badge Positioned at Top Right */}
            <span className={`absolute top-4 right-4 px-3 py-1.5 rounded-2xl font-bold text-xs ${book.available
                ? 'bg-green-100 text-green-600'
                : 'bg-red-100 text-red-600'
                }`}>
                {book.available ? 'Disponible' : 'Emprunté'}
            </span>

            <div className="flex flex-col gap-2 flex-1">
                <div className="h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                    Image Livre
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {book.title}
                </h3>
                <p className="text-gray-600 mb-2">
                    {book.author}
                </p>
                <span className="inline-block px-3 py-1.5 rounded-2xl bg-gray-100 text-xs text-gray-700 mb-4 w-fit">
                    {book.category}
                </span>
            </div>

            <div className="mt-auto flex justify-center items-center">
                <button
                    className={`bg-[#8B4513] text-white border-none px-4 py-2 rounded-full cursor-pointer w-full font-medium transition-all ${book.available
                        ? 'opacity-100 hover:shadow-lg hover:-translate-y-0.5 hover:bg-[#654321]'
                        : 'opacity-50 cursor-not-allowed'
                        }`}
                    disabled={!book.available}
                >
                    Emprunter
                </button>
            </div>
        </div>
    );
};

export default BookCard;
