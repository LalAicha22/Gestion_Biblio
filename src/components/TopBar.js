import React from 'react';

const TopBar = () => {
    // Mock user data
    const user = {
        name: "Jean Dupont",
        role: "Administrateur Principal",
        avatarInitial: "J"
    };

    return (
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    <input
                        type="text"
                        placeholder="Rechercher un livre, un étudiant..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-100 text-gray-700 transition-all placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                {/* Notifications */}
                <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    🔔
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-gray-800">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-lg shadow-sm ring-2 ring-white ring-offset-2 ring-offset-gray-50">
                        {user.avatarInitial}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
