
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import BooksPage from '@/pages/BooksPage';
import NotesPage from '@/pages/NotesPage';
import ExamsPage from '@/pages/ExamsPage';
import ContactPage from '@/pages/ContactPage';
import StagePage from '@/pages/StagePage';
import GradePage from '@/pages/GradePage';
import SubjectsPage from '@/pages/SubjectsPage.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:stage" element={<StagePage type="books" />} />
          <Route path="/books/:stage/:grade" element={<GradePage type="books" />} />
          <Route path="/books/:stage/:grade/subjects" element={<SubjectsPage type="books" />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/notes/:stage" element={<StagePage type="notes" />} />
          <Route path="/notes/:stage/:grade" element={<GradePage type="notes" />} />
          <Route path="/notes/:stage/:grade/subjects" element={<SubjectsPage type="notes" />} />
          <Route path="/exams" element={<ExamsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
