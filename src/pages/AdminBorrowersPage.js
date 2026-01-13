import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const AdminBorrowersPage = () => {
    const { borrowers } = useLibrary();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBorrowers = borrowers.filter(b =>
        b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 ml-64 flex flex-col">
                <TopBar />
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">Gestion des Emprunts</h1>
                                <p className="text-gray-500 mt-1">Suivi des livres actuellement prêtés.</p>
                            </div>

                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B4513] w-64"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Emprunteur</th>
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Livre Emprunté</th>
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Date Emprunt</th>
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredBorrowers.map((borrower, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">
                                                        {borrower.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-900">{borrower.name}</div>
                                                        <div className="text-xs text-gray-500">{borrower.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 font-medium text-gray-800">
                                                📖 {borrower.bookTitle}
                                            </td>
                                            <td className="py-4 px-6 text-sm text-gray-500">
                                                {/* Date simulée pour l'exemple */}
                                                12 Janvier 2026
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <button className="text-sm font-medium text-amber-600 hover:text-amber-800 bg-amber-50 px-3 py-1 rounded-lg transition-colors">
                                                    Relancer
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredBorrowers.length === 0 && (
                                        <tr>
                                            <td colSpan="4" className="py-8 text-center text-gray-500">
                                                Aucun emprunt trouvé.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminBorrowersPage;
