import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';

const Catalogue = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [currentPage, setCurrentPage] = useState(1);

    // Données factices pour le catalogue
    const books = [
        { id: 1, title: "Introduction à l'IA", author: "Dr. A. Beye", category: "Informatique", image: "https://via.placeholder.com/150", available: true },
        { id: 2, title: "Histoire du Sénégal", author: "M. Diop", category: "Histoire", image: "https://via.placeholder.com/150", available: true },
        { id: 3, title: "Biologie Cellulaire", author: "K. Fall", category: "Sciences", image: "https://via.placeholder.com/150", available: false },
        { id: 4, title: "Mathématiques pour Ingénieurs", author: "S. Ndiaye", category: "Mathématiques", image: "https://via.placeholder.com/150", available: true },
        { id: 5, title: "Droit Civil", author: "P. Camara", category: "Droit", image: "https://via.placeholder.com/150", available: true },
        { id: 6, title: "Littérature Africaine", author: "L. Senghor", category: "Littérature", image: "https://via.placeholder.com/150", available: true },
        { id: 7, title: "Algorithmes Avancés", author: "T. Diallo", category: "Informatique", image: "https://via.placeholder.com/150", available: true },
        { id: 8, title: "La Révolution Française", author: "J. Michelet", category: "Histoire", image: "https://via.placeholder.com/150", available: true },
        { id: 9, title: "Chimie Organique", author: "M. Curie", category: "Sciences", image: "https://via.placeholder.com/150", available: true },
        { id: 10, title: "Probabilités et Statistiques", author: "B. Pascal", category: "Mathématiques", image: "https://via.placeholder.com/150", available: false },
        { id: 11, title: "Droit Pénal", author: "R. Badinter", category: "Droit", image: "https://via.placeholder.com/150", available: true },
        { id: 12, title: "Poèmes Choisis", author: "V. Hugo", category: "Littérature", image: "https://via.placeholder.com/150", available: true },
        { id: 13, title: "React pour les Nuls", author: "Facebook", category: "Informatique", image: "https://via.placeholder.com/150", available: true },
        { id: 14, title: "Géographie du Monde", author: "N. Hulot", category: "Histoire", image: "https://via.placeholder.com/150", available: true },
    ];

    const categories = ['Tous', 'Informatique', 'Histoire', 'Sciences', 'Mathématiques', 'Droit', 'Littérature'];

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Tous' || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <Navbar />
            <div className="pt-32 pb-16 px-[5%] min-h-screen bg-gray-50 flex flex-col">
                <h1 className="text-center mb-8 text-4xl font-bold text-gray-800">
                    Catalogue de la Bibliothèque
                </h1>

                {/* Filtres et Recherche */}
                <div className="flex flex-col items-center gap-6 mb-12">
                    {/* Recherche */}
                    <div className="relative w-full max-w-xl">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Rechercher un livre, un auteur..."
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                            className="w-full py-3 pl-12 pr-6 rounded-full border border-gray-300 outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all shadow-sm"
                        />
                    </div>

                    {/* Filtres Catégories (Pills) */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${selectedCategory === cat
                                    ? 'bg-[#8B4513] text-white shadow-md'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#8B4513] hover:text-[#8B4513]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex-1">
                    {filteredBooks.slice((currentPage - 1) * 8, currentPage * 8).map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>

                {filteredBooks.length > 8 && (
                    <div className="flex justify-center mt-12 gap-2">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${currentPage === 1 ? 'border-gray-200 text-gray-400 cursor-not-allowed' : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-[#8B4513]'}`}
                        >
                            Précédent
                        </button>

                        {Array.from({ length: Math.ceil(filteredBooks.length / 8) }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${currentPage === page ? 'bg-[#8B4513] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(p => Math.min(Math.ceil(filteredBooks.length / 8), p + 1))}
                            disabled={currentPage === Math.ceil(filteredBooks.length / 8)}
                            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${currentPage === Math.ceil(filteredBooks.length / 8) ? 'border-gray-200 text-gray-400 cursor-not-allowed' : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-[#8B4513]'}`}
                        >
                            Suivant
                        </button>
                    </div>
                )}


            </div>
            <Footer />
        </>
    );
};

export default Catalogue;
