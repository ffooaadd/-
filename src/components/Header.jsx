import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Home, FileText, HelpCircle, Phone, FileArchive } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="gradient-bg text-white shadow-2xl sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 space-x-reverse">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="bg-white/20 p-3 rounded-full"
            >
              <FileArchive className="h-8 w-8" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-shadow">ملازمي الأفضل</h1>
              <p className="text-blue-100 text-sm">طريقك نحو التفوق الدراسي</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link 
              to="/" 
              className="flex items-center space-x-2 space-x-reverse hover:text-blue-200 transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>الرئيسية</span>
            </Link>
            <Link 
              to="/books" 
              className="flex items-center space-x-2 space-x-reverse hover:text-blue-200 transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span>الكتب المدرسية</span>
            </Link>
            <Link 
              to="/notes" 
              className="flex items-center space-x-2 space-x-reverse hover:text-blue-200 transition-colors"
            >
              <FileText className="h-5 w-5" />
              <span>الملازم الدراسية</span>
            </Link>
            <Link 
              to="/exams" 
              className="flex items-center space-x-2 space-x-reverse hover:text-blue-200 transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
              <span>الأسئلة الوزارية</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center space-x-2 space-x-reverse hover:text-blue-200 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>اتصل بنا</span>
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;