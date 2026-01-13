import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentsAdmin = ({ students }) => {
    // Fonction utilitaire pour générer les initiales
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    // On affiche juste les 4 premiers en mode aperçu dashboard
    const previewStudents = students.slice(0, 4);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <span>🎓</span> Étudiants Inscrits
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                        Aperçu des derniers inscrits
                    </p>
                </div>
                <span className="bg-[#8B4513]/10 text-[#8B4513] text-xs font-bold px-2 py-1 rounded-md">
                    Total: {students.length}
                </span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Étudiant</th>
                            <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Université</th>
                            <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Statut</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {previewStudents.map(student => (
                            <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-3 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-sm">
                                            {getInitials(student.name)}
                                        </div>
                                        <span className="font-medium text-gray-700">{student.name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-gray-500 text-sm">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                                        {student.university}
                                    </span>
                                </td>
                                <td className="py-3 px-6 text-gray-500 text-sm">{student.email}</td>
                                <td className="py-3 px-6 text-right">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                        Actif
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Lien Voir Plus vers la page dédiée */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/30 flex justify-center">
                <Link
                    to="/admin/students"
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#8B4513] transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 group"
                >
                    <span>Voir la liste complète</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default StudentsAdmin;
