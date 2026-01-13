import React, { createContext, useState, useContext } from 'react';

const LibraryContext = createContext();

export const useLibrary = () => useContext(LibraryContext);

export const LibraryProvider = ({ children }) => {
    // État des étudiants (Lecture seule pour l'instant)
    const [students] = useState([
        { id: 1, name: 'Amina Fall', email: 'amina.fall@example.com', university: 'UCAD', address: 'Mermoz, Dakar', specialty: 'Informatique' },
        { id: 2, name: 'Mamadou Diallo', email: 'mamadou.diallo@example.com', university: 'UGB', address: 'Saint-Louis, Nord', specialty: 'Mathématiques' },
        { id: 3, name: 'Seydou Ba', email: 'seydou.ba@example.com', university: 'UAM', address: 'Diamniadio', specialty: 'Physique' },
        { id: 4, name: 'Fatou Ndiaye', email: 'fatou.ndiaye@example.com', university: 'UIDT', address: 'Thiès', specialty: 'Biologie' },
        { id: 5, name: 'Ousmane Sow', email: 'ousmane.sow@example.com', university: 'UCAD', address: 'Fann, Dakar', specialty: 'Droit' },
        { id: 6, name: 'Mariama Sy', email: 'mariama.sy@example.com', university: 'UGB', address: 'Saint-Louis', specialty: 'Littérature' },
    ]);

    // État des livres
    const [books, setBooks] = useState([
        { id: 1, title: "Introduction à l'IA", author: 'Dr. A. Beye', available: true, borrowerId: null },
        { id: 2, title: 'Biologie Cellulaire', author: 'K. Fall', available: false, borrowerId: 2 },
        { id: 3, title: 'Mathématiques pour Ingénieurs', author: 'S. Ndiaye', available: true, borrowerId: null },
        { id: 4, title: 'Programmation Web', author: 'M. Diop', available: true, borrowerId: null },
        { id: 5, title: 'Physique Quantique', author: 'A. Ndour', available: false, borrowerId: 1 },
    ]);

    // Actions sur les livres
    const addBook = (book) => {
        const id = Math.max(0, ...books.map(b => b.id)) + 1;
        setBooks(prev => [...prev, { ...book, id, available: true, borrowerId: null }]);
    };

    const updateBook = (updatedBook) => {
        setBooks(prev => prev.map(b => b.id === updatedBook.id ? updatedBook : b));
    };

    const deleteBook = (id) => {
        setBooks(prev => prev.filter(b => b.id !== id));
    };

    const toggleBorrow = (bookId, studentId) => {
        setBooks(prev => prev.map(b => {
            if (b.id !== bookId) return b;
            if (b.available) return { ...b, available: false, borrowerId: studentId };
            return { ...b, available: true, borrowerId: null };
        }));
    };

    // Calcul des statistiques et données dérivées
    const totalBooks = books.length;
    const borrowedBooks = books.filter(b => !b.available).length;

    const borrowers = books
        .filter(b => !b.available)
        .map(b => {
            const student = students.find(s => s.id === b.borrowerId);
            return student ? { ...student, bookTitle: b.title } : null;
        })
        .filter(Boolean);

    const value = {
        students,
        books,
        addBook,
        updateBook,
        deleteBook,
        toggleBorrow,
        totalBooks,
        borrowedBooks,
        borrowers
    };

    return (
        <LibraryContext.Provider value={value}>
            {children}
        </LibraryContext.Provider>
    );
};
