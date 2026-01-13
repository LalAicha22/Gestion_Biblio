import React from 'react';
import { Link } from 'react-router-dom';

const BorrowersList = ({ borrowers }) => {
    // Aperçu seulement
    const previewBorrowers = borrowers.slice(0, 4);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <span>⏳</span> Emprunts en cours
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                        Suivi des retards et prêts
                    </p>
                </div>
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-md">
                    {borrowers.length}
                </span>
            </div>

            <div className="overflow-y-auto max-h-[400px]">
                {previewBorrowers.length ? (
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 sticky top-0 z-10">
                            <tr>
                                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Emprunteur</th>
                                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Livre</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {previewBorrowers.map((borrower, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-3 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs">
                                                {borrower.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900 text-sm">{borrower.name}</div>
                                                <div className="text-xs text-gray-500">{borrower.university}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-right text-gray-600 text-xs italic">
                                        "{borrower.bookTitle}"
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="p-8 text-center text-gray-500 text-sm">
                        Aucun emprunt en cours.
                    </div>
                )}
            </div>
        </div>
    );
}

export default BorrowersList;
