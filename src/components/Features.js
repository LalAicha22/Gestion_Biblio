import React from 'react';

const Features = () => {
    return (
        <section className="bg-white px-[5%] py-20">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-gray-800">
                Nos Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-10 rounded-3xl text-center transition-all duration-300 cursor-pointer hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
                    <div className="w-20 h-20 bg-brown-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                        📖
                    </div>
                    <h3 className="text-gray-800 mb-4 text-xl font-semibold">Catalogue numérique</h3>
                    <p className="text-gray-600 leading-relaxed">Parcourez notre vaste collection de livres, revues et documents électroniques</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-10 rounded-3xl text-center transition-all duration-300 cursor-pointer hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
                    <div className="w-20 h-20 bg-brown-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                        🔍
                    </div>
                    <h3 className="text-gray-800 mb-4 text-xl font-semibold">Recherche avancée</h3>
                    <p className="text-gray-600 leading-relaxed">Trouvez rapidement les ressources dont vous avez besoin avec nos outils de recherche intelligents</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-10 rounded-3xl text-center transition-all duration-300 cursor-pointer hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
                    <div className="w-20 h-20 bg-brown-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                        💼
                    </div>
                    <h3 className="text-gray-800 mb-4 text-xl font-semibold">Réservation en ligne</h3>
                    <p className="text-gray-600 leading-relaxed">Réservez et empruntez vos ouvrages directement depuis votre compte</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-10 rounded-3xl text-center transition-all duration-300 cursor-pointer hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
                    <div className="w-20 h-20 bg-brown-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                        📱
                    </div>
                    <h3 className="text-gray-800 mb-4 text-xl font-semibold">Application mobile</h3>
                    <p className="text-gray-600 leading-relaxed">Gérez vos emprunts et accédez à vos ressources depuis votre smartphone</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-10 rounded-3xl text-center transition-all duration-300 cursor-pointer hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
                    <div className="w-20 h-20 bg-brown-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                        🎓
                    </div>
                    <h3 className="text-gray-800 mb-4 text-xl font-semibold">Espaces d'étude</h3>
                    <p className="text-gray-600 leading-relaxed">Réservez des salles de travail et profitez de nos espaces collaboratifs</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-10 rounded-3xl text-center transition-all duration-300 cursor-pointer hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
                    <div className="w-20 h-20 bg-brown-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                        🤝
                    </div>
                    <h3 className="text-gray-800 mb-4 text-xl font-semibold">Assistance personnalisée</h3>
                    <p className="text-gray-600 leading-relaxed">Bénéficiez de l'aide de nos bibliothécaires pour vos recherches</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
