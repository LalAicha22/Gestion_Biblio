import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import AdminStats from '../components/AdminStats';
import StudentsAdmin from '../components/StudentsAdmin';
import BooksAdmin from '../components/BooksAdmin';
import BorrowersList from '../components/BorrowersList';
import { useLibrary } from '../context/LibraryContext';

const Admin = () => {
    const {
        students,
        books,
        addBook,
        updateBook,
        deleteBook,
        toggleBorrow,
        totalBooks,
        borrowedBooks,
        borrowers
    } = useLibrary();

    const [bookForm, setBookForm] = useState({ id: null, title: '', author: '' });

    // Wrapper pour les actions du formulaire
    const handleAddOrUpdateBook = (e) => {
        e.preventDefault();
        if (bookForm.id) {
            updateBook(bookForm);
        } else {
            addBook(bookForm);
        }
        setBookForm({ id: null, title: '', author: '' });
    };

    const handleEditBook = (b) => setBookForm(b);

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* 1. Sidebar Fixe à Gauche */}
            <Sidebar />

            {/* 2. Contenu Principal à Droite */}
            <div className="flex-1 ml-64 flex flex-col">
                {/* TopBar Fixe en Haut */}
                <TopBar />

                {/* Dashboard Scrollable */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto space-y-8">

                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-800">Vue d'ensemble</h1>
                            <p className="text-gray-500">Bienvenue sur votre espace d'administration.</p>
                        </div>

                        {/* 1. KPIs */}
                        <section>
                            <AdminStats totalBooks={totalBooks} borrowedBooks={borrowedBooks} studentsCount={students.length} />
                        </section>

                        {/* 2. Liste des Étudiants (Largeur Max) */}
                        <div className="grid grid-cols-1 gap-8">
                            <section id="students">
                                <StudentsAdmin students={students} />
                            </section>

                            {/* 3. Gestion des Livres & Emprunts (Grid 2/3 - 1/3) */}
                            <section id="books" className="grid grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-5">
                                    <BooksAdmin
                                        books={books}
                                        bookForm={bookForm}
                                        setBookForm={setBookForm}
                                        addOrUpdateBook={handleAddOrUpdateBook}
                                        editBook={handleEditBook}
                                        deleteBook={deleteBook}
                                        toggleBorrow={toggleBorrow}
                                        students={students}
                                    />
                                </div>

                            </section>
                            <div className="lg:col-span-1" id="borrowers">
                                <BorrowersList borrowers={borrowers} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Admin;
