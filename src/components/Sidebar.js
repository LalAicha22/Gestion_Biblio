import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="bg-white w-64 min-h-screen border-r border-gray-200 flex flex-col fixed left-0 top-0 bottom-0 z-50">
            {/* Logo Area */}
            <div className="h-20 flex items-center px-8 border-b border-gray-100">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-[#8B4513] to-[#A0522D] bg-clip-text text-transparent">
                    BiblioUniv
                </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 overflow-y-auto py-6">
                <ul className="space-y-1 px-4">
                    <li>
                        <Link to="/admin" className="flex items-center gap-3 px-4 py-3 text-[#8B4513] bg-amber-50 rounded-lg transition-colors font-medium">
                            <span>📊</span>
                            <span>Tableau de bord</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#students" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors group">
                            <span className="group-hover:scale-110 transition-transform">👥</span>
                            <span>Étudiants</span>
                        </a>
                    </li>
                    <li>
                        <a href="#books" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors group">
                            <span className="group-hover:scale-110 transition-transform">📚</span>
                            <span>Livres</span>
                        </a>
                    </li>
                    <li>
                        <a href="#borrowers" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors group">
                            <span className="group-hover:scale-110 transition-transform">⏳</span>
                            <span>Emprunts</span>
                        </a>
                    </li>
                </ul>

                <div className="mt-8 px-4">
                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Paramètres</p>
                    <ul className="space-y-1">
                        <li>
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors text-left group">
                                <span className="group-hover:scale-110 transition-transform">⚙️</span>
                                <span>Configuration</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* User Info (Bottom Sidebar - Optional, simpler in TopBar) */}
            <div className="p-4 border-t border-gray-100">
                <div className="bg-gradient-to-br from-[#8B4513] to-[#654321] rounded-xl p-4 text-white text-center shadow-lg">
                    <p className="text-sm opacity-90 mb-2">Besoin d'aide ?</p>
                    <button className="bg-white/20 hover:bg-white/30 text-xs py-2 px-4 rounded-lg transition-colors w-full">
                        Contact Support
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
