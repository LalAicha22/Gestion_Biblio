import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulation d'envoi
        alert('Message envoyé avec succès ! Nous vous répondrons bientôt.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-16 px-[5%]">
                <div className="max-w-7xl mx-auto">
                    {/* En-tête */}
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Contactez-nous
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Une question ? Une suggestion ? N'hésitez pas à nous écrire.
                            Notre équipe est là pour vous aider.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Informations de contact */}
                        <div className="space-y-12">
                            <div className="glass-card p-8 rounded-2xl bg-white shadow-[0_5px_25px_rgba(0,0,0,0.05)] border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                    <span className="bg-[#8B4513]/10 p-3 rounded-xl text-[#8B4513]">📍</span>
                                    Nos Coordonnées
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-[#8B4513]">🏢</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Adresse</h4>
                                            <p className="text-gray-600 mt-1">Campus Universitaire BiblioUniv<br />BP 234, Dakar, Sénégal</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-[#8B4513]">📞</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Téléphone</h4>
                                            <p className="text-gray-600 mt-1 cursor-pointer hover:text-[#8B4513] transition-colors">
                                                +221 33 800 00 00
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-[#8B4513]">✉️</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Email</h4>
                                            <p className="text-gray-600 mt-1 cursor-pointer hover:text-[#8B4513] transition-colors">
                                                contact@bibliouniv.sn
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Horaires */}
                            <div className="glass-card p-8 rounded-2xl bg-[#8B4513] text-white shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3 group-hover:scale-110 transition-transform duration-700"></div>

                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                                    <span className="bg-white/20 p-2 rounded-lg">🕒</span>
                                    Horaires d'ouverture
                                </h3>

                                <div className="space-y-4 relative z-10">
                                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                        <span className="font-medium">Lundi - Vendredi</span>
                                        <span className="font-bold">08:00 - 20:00</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                        <span className="font-medium">Samedi</span>
                                        <span className="font-bold">09:00 - 17:00</span>
                                    </div>
                                    <div className="flex justify-between items-center opacity-80">
                                        <span className="font-medium">Dimanche</span>
                                        <span>Fermé</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Formulaire */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_5px_30px_rgba(0,0,0,0.08)] border border-gray-100 relative">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">Envoyez-nous un message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 ml-1">Nom complet</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#8B4513] focus:ring-4 focus:ring-[#8B4513]/10 transition-all outline-none"
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#8B4513] focus:ring-4 focus:ring-[#8B4513]/10 transition-all outline-none"
                                            placeholder="votre@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 ml-1">Sujet</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#8B4513] focus:ring-4 focus:ring-[#8B4513]/10 transition-all outline-none cursor-pointer appearance-none"
                                    >
                                        <option value="" disabled>Sélectionnez un sujet</option>
                                        <option value="infos">Demande d'informations</option>
                                        <option value="emprunt">Problème d'emprunt</option>
                                        <option value="partenariat">Partenariat</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#8B4513] focus:ring-4 focus:ring-[#8B4513]/10 transition-all outline-none resize-none"
                                        placeholder="Comment pouvons-nous vous aider ?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#8B4513]/30 transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
