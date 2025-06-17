
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

const GradePage = ({ type }) => {
  const { stage, grade } = useParams();

  const stageData = {
    primary: { name: 'المرحلة الابتدائية', color: 'from-green-400 to-green-600' },
    middle: { name: 'المرحلة المتوسطة', color: 'from-blue-400 to-blue-600' },
    high: { name: 'المرحلة الإعدادية', color: 'from-purple-400 to-purple-600' }
  };

  const gradeNames = {
    grade1: stage === 'primary' ? 'الصف الأول الابتدائي' : 'الصف الأول المتوسط',
    grade2: stage === 'primary' ? 'الصف الثاني الابتدائي' : 'الصف الثاني المتوسط',
    grade3: stage === 'primary' ? 'الصف الثالث الابتدائي' : 'الصف الثالث المتوسط',
    grade4: 'الصف الرابع الإعدادي',
    grade5: 'الصف الخامس الإعدادي',
    grade6: 'الصف السادس الإعدادي'
  };

  const currentStage = stageData[stage];
  const currentGrade = gradeNames[grade];
  const isBooks = type === 'books';
  const title = isBooks ? 'الكتب المدرسية' : 'الملازم الدراسية';
  const baseUrl = isBooks ? '/books' : '/notes';

  const breadcrumbItems = [
    { label: title, href: baseUrl },
    { label: currentStage?.name, href: `${baseUrl}/${stage}` },
    { label: currentGrade }
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
            {React.createElement(isBooks ? BookOpen : FileText, { 
              className: `h-12 w-12 ${isBooks ? 'text-blue-600' : 'text-green-600'}` 
            })}
            <div className="text-right">
              <h1 className="text-4xl font-bold text-gray-800">{currentGrade}</h1>
              <p className="text-xl text-gray-600">{title}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-effect rounded-2xl p-12 text-center">
            <div className={`w-24 h-24 bg-gradient-to-br ${currentStage.color} rounded-full flex items-center justify-center mx-auto mb-8`}>
              {React.createElement(isBooks ? BookOpen : FileText, { className: "h-12 w-12 text-white" })}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">اختر المواد الدراسية</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              انقر على الزر أدناه لعرض جميع المواد الدراسية المتوفرة لـ{currentGrade}
            </p>
            <Link to={`${baseUrl}/${stage}/${grade}/subjects`}>
              <Button size="lg" className={`bg-gradient-to-r ${currentStage.color} hover:opacity-90 text-lg px-8 py-4`}>
                <span>عرض المواد الدراسية</span>
                <ChevronLeft className="h-5 w-5 mr-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link to={`${baseUrl}/${stage}`}>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <ChevronLeft className="h-5 w-5 ml-2 rotate-180" />
              العودة إلى {currentStage.name}
            </Button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default GradePage;
