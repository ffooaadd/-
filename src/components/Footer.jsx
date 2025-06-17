import React from 'react';
import { motion } from 'framer-motion';
import { FileArchive, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="gradient-bg text-white mt-16"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 space-x-reverse mb-4">
            <FileArchive className="h-8 w-8" />
            <span className="text-2xl font-bold">ملازمي الأفضل</span>
          </div>
          <p className="text-blue-100 mb-4">
            منصتك الأولى لتحميل الملازم والكتب الدراسية في العراق
          </p>
          <div className="flex items-center justify-center space-x-2 space-x-reverse text-blue-200">
            <span>صُنع بـ</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>لخدمة طلابنا الأعزاء</span>
          </div>
          <p className="text-blue-300 text-sm mt-4">
            © 2024 ملازمي الأفضل. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;