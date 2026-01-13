import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Admin from './pages/Admin';
import AdminStudentsPage from './pages/AdminStudentsPage';
import AdminBooksPage from './pages/AdminBooksPage';
import AdminBorrowersPage from './pages/AdminBorrowersPage';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { LibraryProvider } from './context/LibraryContext';

function App() {
  return (
    <LibraryProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-[#8B4513] via-[#D2691E] to-[#A0522D] relative overflow-x-hidden">
          {/* Animated book pattern background */}
          <div
            className="fixed inset-0 pointer-events-none z-0 opacity-10"
            style={{
              backgroundImage: `
                url('data:image/svg+xml,<svg width="100" height="120" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="10" width="40" height="60" fill="%23ffffff" opacity="0.3" rx="2"/><rect x="32" y="12" width="36" height="56" fill="%23ffffff" opacity="0.2"/><line x1="36" y1="20" x2="66" y2="20" stroke="%23ffffff" opacity="0.2"/><line x1="36" y1="26" x2="66" y2="26" stroke="%23ffffff" opacity="0.2"/><line x1="36" y1="32" x2="66" y2="32" stroke="%23ffffff" opacity="0.2"/></svg>'),
                url('data:image/svg+xml,<svg width="80" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="35" height="50" fill="%23ffffff" opacity="0.4" rx="2"/><rect x="22" y="17" width="31" height="46" fill="%23ffffff" opacity="0.2"/></svg>'),
                url('data:image/svg+xml,<svg width="120" height="140" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="45" height="65" fill="%23ffffff" opacity="0.25" rx="2"/><path d="M 42 25 Q 62 30 82 25" stroke="%23ffffff" opacity="0.2" fill="none"/></svg>')
              `,
              backgroundSize: '150px 180px, 120px 150px, 180px 210px',
              backgroundPosition: '0 0, 80px 90px, 140px 50px',
              animation: 'floatBooks 60s linear infinite',
            }}
          />

          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/students" element={<AdminStudentsPage />} />
              <Route path="/admin/books" element={<AdminBooksPage />} />
              <Route path="/admin/borrowers" element={<AdminBorrowersPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    </LibraryProvider>
  );
}

export default App;
