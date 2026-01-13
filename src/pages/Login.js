import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulation de connexion basique
        if (formData.email && formData.password) {
            // Ici, on pourrait ajouter une logique de vérification plus poussée
            // Pour l'instant, on redirige vers l'admin si c'est un email admin style ou home sinon
            if (formData.email.includes('admin')) {
                navigate('/admin');
            } else {
                navigate('/catalogue');
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <main className="flex-1 flex items-center justify-center pt-24 pb-12 px-4">
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 w-full max-w-md relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D]"></div>

                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            🎓
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">Connexion</h1>
                        <p className="text-gray-500 mt-2 text-sm">
                            Utilisez votre email universitaire pour accéder à votre espace.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Adresse Email Universitaire</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📧</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#8B4513] focus:ring-4 focus:ring-[#8B4513]/10 transition-all outline-none"
                                    placeholder="etudiant@univ.sn"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Mot de passe</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#8B4513] focus:ring-4 focus:ring-[#8B4513]/10 transition-all outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                                <input type="checkbox" className="rounded border-gray-300 text-[#8B4513] focus:ring-[#8B4513]" />
                                Se souvenir de moi
                            </label>
                            <Link to="#" className="text-[#8B4513] hover:underline font-medium">
                                Mot de passe oublié ?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#8B4513]/30 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Se connecter
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        Pas encore de compte ?{' '}
                        <Link to="#" className="text-[#8B4513] font-bold hover:underline">
                            S'inscrire
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Login;
