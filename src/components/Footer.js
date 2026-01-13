import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[rgba(30,20,10,0.95)] text-white px-[5%] pt-16 pb-8 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
                <div>
                    <h3 className="text-brown-light mb-6 text-xl font-semibold">📚 LibShare<span className="text-brown-light">.</span></h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                        Votre passerelle vers la connaissance. Nous offrons un accès illimité aux ressources académiques pour enrichir votre parcours universitaire.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="#" title="Facebook" className="w-10 h-10 bg-brown-gradient rounded-full flex items-center justify-center text-lg transition-transform hover:-translate-y-1">
                            📘
                        </a>
                        <a href="#" title="Twitter" className="w-10 h-10 bg-brown-gradient rounded-full flex items-center justify-center text-lg transition-transform hover:-translate-y-1">
                            🐦
                        </a>
                        <a href="#" title="Instagram" className="w-10 h-10 bg-brown-gradient rounded-full flex items-center justify-center text-lg transition-transform hover:-translate-y-1">
                            📷
                        </a>
                        <a href="#" title="LinkedIn" className="w-10 h-10 bg-brown-gradient rounded-full flex items-center justify-center text-lg transition-transform hover:-translate-y-1">
                            💼
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-brown-light mb-6 text-xl font-semibold">Liens rapides</h3>
                    <ul className="list-none space-y-3">
                        <li>
                            <a href="#catalogue" className="text-white/80 no-underline transition-colors hover:text-brown-light">
                                Catalogue en ligne
                            </a>
                        </li>
                        <li>
                            <a href="#nouveautes" className="text-white/80 no-underline transition-colors hover:text-brown-light">
                                Nouveautés
                            </a>
                        </li>
                        <li>
                            <a href="#espace" className="text-white/80 no-underline transition-colors hover:text-brown-light">
                                Réserver un espace
                            </a>
                        </li>
                        <li>
                            <a href="#formations" className="text-white/80 no-underline transition-colors hover:text-brown-light">
                                Formations
                            </a>
                        </li>
                        <li>
                            <a href="#aide" className="text-white/80 no-underline transition-colors hover:text-brown-light">
                                Aide & Support
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-brown-light mb-6 text-xl font-semibold">Horaires</h3>
                    <ul className="list-none space-y-3 text-white/80">
                        <li>Lundi - Vendredi : 8h - 22h</li>
                        <li>Samedi : 9h - 20h</li>
                        <li>Dimanche : 10h - 18h</li>
                        <li className="mt-4 text-brown-light font-medium">Accès en ligne 24/7</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-brown-light mb-6 text-xl font-semibold">Contact</h3>
                    <ul className="list-none space-y-3 text-white/80">
                        <li>📍 Campus Universitaire</li>
                        <li>📧 contact@bibliouniv.edu</li>
                        <li>📞 +221 33 XXX XX XX</li>
                        <li>
                            <a href="#faq" className="text-white/80 no-underline transition-colors hover:text-brown-light">
                                ❓ FAQ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center pt-8 border-t border-white/10 text-white/60">
                <p>
                    &copy; 2026 BiblioUniv - Tous droits réservés |
                    <a href="#confidentialite" className="text-inherit hover:text-brown-light transition-colors ml-1">
                        Politique de confidentialité
                    </a> |
                    <a href="#conditions" className="text-inherit hover:text-brown-light transition-colors ml-1">
                        Conditions d'utilisation
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
