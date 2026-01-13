import React from 'react';

const AdminStats = ({ totalBooks, borrowedBooks, studentsCount }) => {
    const StatCard = ({ title, value, icon, color }) => (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-xl`}>
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500 font-medium">{title}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <StatCard
                title="Total Livres"
                value={totalBooks}
                icon="📚"
                color="bg-blue-50 text-blue-600"
            />
            <StatCard
                title="Livres Empruntés"
                value={borrowedBooks}
                icon="📖"
                color="bg-amber-50 text-amber-600"
            />
            <StatCard
                title="Étudiants Inscrits"
                value={studentsCount}
                icon="👥"
                color="bg-green-50 text-green-600"
            />
        </div>
    );
}

export default AdminStats;
