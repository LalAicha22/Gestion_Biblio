import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const AdminBooksPage = () => {
    const { books, addBook, updateBook, deleteBook, students, toggleBorrow } = useLibrary();
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all'); // 'all', 'available', 'borrowed'

    // Formulaire d'ajout/édition
    const [bookForm, setBookForm] = useState({ id: null, title: '', author: '' });
    const [isFormOpen, setIsFormOpen] = useState(false);

    const filteredBooks = books.filter(b => {
        const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'all'
            ? true
            : filter === 'available' ? b.available : !b.available;
        return matchesSearch && matchesFilter;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookForm.id) {
            updateBook(bookForm);
        } else {
            addBook(bookForm);
        }
        setBookForm({ id: null, title: '', author: '' });
        setIsFormOpen(false);
    };

    const handleEdit = (book) => {
        setBookForm(book);
        setIsFormOpen(true);
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 ml-64 flex flex-col">
                <TopBar />
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">Gestion des Livres</h1>
                                <p className="text-gray-500 mt-1">Catalogue complet et gestion des emprunts.</p>
                            </div>

                            <button
                                onClick={() => { setBookForm({ id: null, title: '', author: '' }); setIsFormOpen(true); }}
                                className="bg-[#8B4513] hover:bg-[#654321] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2"
                            >
                                <span>+</span>
                                <span>Ajouter un livre</span>
                            </button>
                        </div>

                        {/* Filtres et Recherche */}
                        <div className="mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setFilter('all')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'all' ? 'bg-[#8B4513] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    Tous
                                </button>
                                <button
                                    onClick={() => setFilter('available')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'available' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    Disponibles
                                </button>
                                <button
                                    onClick={() => setFilter('borrowed')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'borrowed' ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    Empruntés
                                </button>
                            </div>

                            <div className="relative w-full sm:w-auto">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Rechercher un livre..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B4513] w-full sm:w-64"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Modal Formulaire (Simplifié ici en bloc conditionnel pour l'exemple) */}
                        {isFormOpen && (
                            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                                <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
                                    <h3 className="text-lg font-bold mb-4">{bookForm.id ? 'Modifier le livre' : 'Ajouter un nouveau livre'}</h3>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                                            <input
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B4513] focus:outline-none"
                                                value={bookForm.title}
                                                onChange={e => setBookForm({ ...bookForm, title: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Auteur</label>
                                            <input
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B4513] focus:outline-none"
                                                value={bookForm.author}
                                                onChange={e => setBookForm({ ...bookForm, author: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="flex justify-end gap-3 mt-6">
                                            <button
                                                type="button"
                                                onClick={() => setIsFormOpen(false)}
                                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                                            >
                                                Annuler
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-4 py-2 bg-[#8B4513] text-white rounded-lg hover:bg-[#654321]"
                                            >
                                                Enregistrer
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Ouvrage</th>
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Auteur</th>
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Disponibilité</th>
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredBooks.map(book => (
                                        <tr key={book.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-6 font-medium text-gray-900">{book.title}</td>
                                            <td className="py-4 px-6 text-gray-600">{book.author}</td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${book.available ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                                                        {book.available ? 'Disponible' : 'Emprunté'}
                                                    </span>
                                                    {!book.available && (
                                                        <span className="text-xs text-gray-500">
                                                            par {students.find(s => s.id === book.borrowerId)?.name}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <div className="flex justify-end items-center gap-2">
                                                    {book.available ? (
                                                        <select
                                                            onChange={(e) => toggleBorrow(book.id, Number(e.target.value))}
                                                            defaultValue=""
                                                            className="text-xs border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                        >
                                                            <option value="" disabled>Attribuer...</option>
                                                            {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                                        </select>
                                                    ) : (
                                                        <button
                                                            onClick={() => toggleBorrow(book.id, null)}
                                                            className="text-xs text-amber-600 hover:text-amber-800 font-medium bg-amber-50 px-2 py-1 rounded"
                                                        >
                                                            Retourner
                                                        </button>
                                                    )}
                                                    <button onClick={() => handleEdit(book)} className="text-blue-600 hover:text-blue-800 px-2">✏️</button>
                                                    <button onClick={() => deleteBook(book.id)} className="text-red-600 hover:text-red-800 px-2">🗑️</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminBooksPage;
