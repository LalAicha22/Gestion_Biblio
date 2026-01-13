import React, { useState } from 'react';
import { useLibrary } from '../context/LibraryContext';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const AdminStudentsPage = () => {
    const { students, books } = useLibrary();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);

    const filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.university.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculer le nombre d'emprunts pour un étudiant
    const getBorrowCount = (studentId) => {
        return books.filter(b => b.borrowerId === studentId).length;
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
                                <h1 className="text-2xl font-bold text-gray-800">Gestion des Étudiants</h1>
                                <p className="text-gray-500 mt-1">Liste complète de tous les étudiants inscrits.</p>
                            </div>

                            {/* Barre de recherche locale */}
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
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Étudiant</th>
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Université</th>
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Email</th>
                                        <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredStudents.map(student => (
                                        <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                                                        {student.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <span className="font-medium text-gray-900">{student.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                    {student.university}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-gray-500 text-sm">{student.email}</td>
                                            <td className="py-4 px-6 text-right">
                                                <button
                                                    onClick={() => setSelectedStudent(student)}
                                                    className="text-gray-400 hover:text-[#8B4513] transition-colors"
                                                >
                                                    Voir profil
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredStudents.length === 0 && (
                                        <tr>
                                            <td colSpan="4" className="py-8 text-center text-gray-500">
                                                Aucun étudiant trouvé pour "{searchTerm}"
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>

                {/* Modal Profil Étudiant */}
                {selectedStudent && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-fadeInUp">
                            <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] p-6 text-center text-white relative">
                                <button
                                    onClick={() => setSelectedStudent(null)}
                                    className="absolute top-4 right-4 text-white/80 hover:text-white"
                                >
                                    ✕
                                </button>
                                <div className="w-20 h-20 rounded-full bg-white text-[#8B4513] flex items-center justify-center font-bold text-3xl mx-auto shadow-lg mb-4">
                                    {selectedStudent.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                                </div>
                                <h2 className="text-xl font-bold">{selectedStudent.name}</h2>
                                <p className="text-white/80 text-sm">{selectedStudent.email}</p>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Université</p>
                                        <p className="font-medium text-gray-800">{selectedStudent.university}</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Spécialité</p>
                                        <p className="font-medium text-gray-800">{selectedStudent.specialty || 'Non définie'}</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg col-span-2">
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Adresse</p>
                                        <p className="font-medium text-gray-800">{selectedStudent.address || 'Non renseignée'}</p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-4 mt-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600 font-medium">Emprunts actifs</span>
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getBorrowCount(selectedStudent.id) > 0 ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>
                                            {getBorrowCount(selectedStudent.id)} livre(s)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 text-right">
                                <button
                                    onClick={() => setSelectedStudent(null)}
                                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminStudentsPage;
