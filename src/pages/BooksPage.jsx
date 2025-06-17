
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

const BooksPage = () => {
  const stages = [
    {
      id: 'primary',
      name: 'المرحلة الابتدائية',
      description: 'الصفوف الأول - السادس الابتدائي',
      icon: '🎒',
      color: 'from-green-400 to-green-600',
      grades: 6
    },
    {
      id: 'middle',
      name: 'المرحلة المتوسطة',
      description: 'الصفوف الأول - الثالث المتوسط',
      icon: '📚',
      color: 'from-blue-400 to-blue-600',
      grades: 3
    },
    {
      id: 'high',
      name: 'المرحلة الإعدادية',
      description: 'الصفوف الرابع - السادس الإعدادي',
      icon: '🎓',
      color: 'from-purple-400 to-purple-600',
      grades: 3
    }
  ];

  const breadcrumbItems = [
    { label: 'الكتب المدرسية' }
  ];

  return (
    <div className="min-h-screen pattern-bg">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 space-x-reverse mb-6">
            <BookOpen className="h-12 w-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">الكتب المدرسية</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختر المرحلة الدراسية للوصول إلى الكتب المدرسية المعتمدة من وزارة التربية العراقية
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Link to={`/books/${stage.id}`}>
                <div className="glass-effect rounded-2xl p-8 text-center card-hover h-full">
                  <div className="text-6xl mb-6">{stage.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{stage.name}</h3>
                  <p className="text-gray-600 mb-6">{stage.description}</p>
                  <div className="bg-white/50 rounded-lg p-4 mb-6">
                    <div className="text-3xl font-bold text-blue-600">{stage.grades}</div>
                    <div className="text-sm text-gray-600">صفوف دراسية</div>
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${stage.color} hover:opacity-90`}>
                    <span>تصفح الكتب</span>
                    <ChevronLeft className="h-4 w-4 mr-2" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">معلومات مهمة</h3>
            <p className="text-gray-600 leading-relaxed">
              جميع الكتب المتوفرة في هذه المنصة معتمدة من وزارة التربية العراقية ومحدثة حسب المنهج الحالي. 
              يمكنك تحميل الكتب بصيغة PDF مجاناً وبجودة عالية.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default BooksPage;
