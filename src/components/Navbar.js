import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white/95 backdrop-blur-md px-[5%] py-5 shadow-lg sticky top-0 z-50 flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-br from-brown to-brown-light bg-clip-text text-transparent no-underline">
                📚 LibShare<span className="text-brown-light">.</span>
            </Link>
            <ul className="flex gap-8 list-none">
                <li>
                    <Link to="/" className="no-underline text-gray-800 font-medium hover:text-brown transition-colors">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to="/catalogue" className="no-underline text-gray-800 font-medium hover:text-brown transition-colors">
                        Catalogue
                    </Link>
                </li>
                <li>
                    <Link to="/admin" className="no-underline text-gray-800 font-medium hover:text-brown transition-colors">
                        Admin
                    </Link>
                </li>

                <li>
                    <Link to="/contact" className="no-underline text-gray-800 font-medium hover:text-[#8B4513] transition-colors">
                        Contact
                    </Link>
                </li>
            </ul>
            <Link to="/login" className="bg-[#8B4513] text-white px-7 py-3 rounded-full no-underline font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(139,69,19,0.4)]">
                Se connecter
            </Link>
        </nav>
    );
};

export default Navbar;
