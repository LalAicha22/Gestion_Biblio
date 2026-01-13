import React from 'react';

const Hero = () => {
    return (
        <section className="px-[5%] pt-24 pb-16 text-center text-white relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
                Explorez le Savoir
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-95 animate-fadeInUpDelay">
                Accédez à des milliers de ressources académiques en un seul endroit
            </p>

            <div className="max-w-3xl mx-auto mb-16 relative animate-fadeInUpDelay2">
                <input
                    type="text"
                    placeholder="Rechercher un livre, un auteur, un sujet..."
                    className="w-full py-5 px-6 pr-36 border-none rounded-full text-lg shadow-[0_10px_40px_rgba(0,0,0,0.2)] outline-none text-gray-800"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brown-gradient border-none text-white py-4 px-8 rounded-full cursor-pointer font-semibold transition-transform hover:scale-105">
                    Rechercher
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/15 backdrop-blur-md p-8 rounded-3xl border border-white/20 animate-fadeInUpDelay3 transition-transform hover:-translate-y-2">
                    <div className="text-5xl font-bold mb-2">50K+</div>
                    <div className="text-base opacity-90">Livres disponibles</div>
                </div>
                <div className="bg-white/15 backdrop-blur-md p-8 rounded-3xl border border-white/20 animate-fadeInUpDelay3 transition-transform hover:-translate-y-2">
                    <div className="text-5xl font-bold mb-2">15K+</div>
                    <div className="text-base opacity-90">Étudiants inscrits</div>
                </div>
                <div className="bg-white/15 backdrop-blur-md p-8 rounded-3xl border border-white/20 animate-fadeInUpDelay3 transition-transform hover:-translate-y-2">
                    <div className="text-5xl font-bold mb-2">24/7</div>
                    <div className="text-base opacity-90">Accès en ligne</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
