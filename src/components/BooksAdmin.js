import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BooksAdmin = ({ books, bookForm, setBookForm, addOrUpdateBook, editBook, deleteBook, toggleBorrow, students }) => {
    // Aperçu seulement
    const previewBooks = books.slice(0, 4);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <span>📖</span> Liste des Livres
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                        Gestion du catalogue et des emprunts
                    </p>
                </div>

                {/* Formulaire Compact */}
                <form onSubmit={addOrUpdateBook} className="flex gap-2 w-full sm:w-auto">
                    <input
                        className="py-2 px-4 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513]/20 transition-all w-full sm:w-48 shadow-sm"
                        placeholder="Titre du livre"
                        value={bookForm.title}
                        onChange={e => setBookForm({ ...bookForm, title: e.target.value })}
                        required
                    />
                    <input
                        className="py-2 px-4 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513]/20 transition-all w-full sm:w-32 shadow-sm"
                        placeholder="Auteur"
                        value={bookForm.author}
                        onChange={e => setBookForm({ ...bookForm, author: e.target.value })}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#8B4513] hover:bg-[#654321] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
                    >
                        {bookForm.id ? 'Mettre à jour' : 'Ajouter'}
                    </button>
                </form>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Ouvrage</th>
                            <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Auteur</th>
                            <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Disponibilité</th>
                            <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {previewBooks.map(b => (
                            <tr key={b.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="py-3 px-6">
                                    <span className="font-medium text-gray-800">{b.title}</span>
                                </td>
                                <td className="py-3 px-6 text-gray-600 text-sm">{b.author}</td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center gap-3">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${b.available
                                            ? 'bg-green-50 text-green-700 border border-green-100'
                                            : 'bg-amber-50 text-amber-700 border border-amber-100'
                                            }`}>
                                            {b.available ? 'Disponible' : 'Emprunté'}
                                        </span>
                                        {!b.available && (
                                            <span className="text-xs text-gray-500 flex items-center gap-1">
                                                <span>par</span>
                                                <span className="font-medium text-gray-700">
                                                    {students.find(s => s.id === b.borrowerId)?.name || 'Inconnu'}
                                                </span>
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-right">
                                    <div className="flex justify-end items-center gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                        {/* Actions Emprunt */}
                                        {b.available ? (
                                            <select
                                                onChange={e => toggleBorrow(b.id, Number(e.target.value))}
                                                defaultValue=""
                                                className="py-1 px-2 text-xs rounded border border-gray-200 bg-white hover:border-gray-300 focus:outline-none cursor-pointer"
                                            >
                                                <option value="" disabled>Attribuer à...</option>
                                                {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                            </select>
                                        ) : (
                                            <button
                                                onClick={() => toggleBorrow(b.id, null)}
                                                className="text-xs text-amber-600 hover:text-amber-800 font-medium px-2 py-1 rounded hover:bg-amber-50 transition-colors"
                                            >
                                                Retourner
                                            </button>
                                        )}

                                        {/* Actions Édition */}
                                        <div className="h-4 w-px bg-gray-200 mx-1"></div>
                                        <button
                                            onClick={() => editBook(b)}
                                            className="text-gray-400 hover:text-blue-600 transition-colors p-1"
                                            title="Modifier"
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            onClick={() => deleteBook(b.id)}
                                            className="text-gray-400 hover:text-red-600 transition-colors p-1"
                                            title="Supprimer"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Lien Voir Plus vers la page dédiée */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/30 flex justify-center">
                <Link
                    to="/admin/books"
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#8B4513] transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 group"
                >
                    <span>Voir la liste complète</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>

            {books.length === 0 && (
                <div className="p-8 text-center text-gray-500 text-sm">
                    Aucun livre dans la base de données.
                </div>
            )}
        </div>
    );
}

export default BooksAdmin;
