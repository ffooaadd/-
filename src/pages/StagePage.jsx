
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

const StagePage = ({ type }) => {
  const { stage } = useParams();

  const stageData = {
    primary: {
      name: 'المرحلة الابتدائية',
      description: 'الصفوف الأول - السادس الابتدائي',
      icon: '🎒',
      color: 'from-green-400 to-green-600',
      grades: [
        { id: 'grade1', name: 'الصف الأول الابتدائي', subjects: 8 },
        { id: 'grade2', name: 'الصف الثاني الابتدائي', subjects: 9 },
        { id: 'grade3', name: 'الصف الثالث الابتدائي', subjects: 10 },
        { id: 'grade4', name: 'الصف الرابع الابتدائي', subjects: 11 },
        { id: 'grade5', name: 'الصف الخامس الابتدائي', subjects: 12 },
        { id: 'grade6', name: 'الصف السادس الابتدائي', subjects: 13 }
      ]
    },
    middle: {
      name: 'المرحلة المتوسطة',
      description: 'الصفوف الأول - الثالث المتوسط',
      icon: '📚',
      color: 'from-blue-400 to-blue-600',
      grades: [
        { id: 'grade1', name: 'الصف الأول المتوسط', subjects: 14 },
        { id: 'grade2', name: 'الصف الثاني المتوسط', subjects: 15 },
        { id: 'grade3', name: 'الصف الثالث المتوسط', subjects: 16 }
      ]
    },
    high: {
      name: 'المرحلة الإعدادية',
      description: 'الصفوف الرابع - السادس الإعدادي',
      icon: '🎓',
      color: 'from-purple-400 to-purple-600',
      grades: [
        { id: 'grade4', name: 'الصف الرابع الإعدادي', subjects: 12 },
        { id: 'grade5', name: 'الصف الخامس الإعدادي', subjects: 10 },
        { id: 'grade6', name: 'الصف السادس الإعدادي', subjects: 8 }
      ]
    }
  };

  const currentStage = stageData[stage];
  const isBooks = type === 'books';
  const icon = isBooks ? BookOpen : FileText;
  const title = isBooks ? 'الكتب المدرسية' : 'الملازم الدراسية';
  const baseUrl = isBooks ? '/books' : '/notes';

  const breadcrumbItems = [
    { label: title, href: baseUrl },
    { label: currentStage?.name }
  ];

  if (!currentStage) {
    return <div>المرحلة غير موجودة</div>;
  }

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
            <div className="text-6xl">{currentStage.icon}</div>
            <div className="text-right">
              <h1 className="text-4xl font-bold text-gray-800">{currentStage.name}</h1>
              <p className="text-xl text-gray-600">{title}</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اختر الصف الدراسي للوصول إلى {isBooks ? 'الكتب المدرسية' : 'الملازم الدراسية'} المطلوبة
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentStage.grades.map((grade, index) => (
            <motion.div
              key={grade.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`${baseUrl}/${stage}/${grade.id}`}>
                <div className="glass-effect rounded-2xl p-6 text-center card-hover h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentStage.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {React.createElement(icon, { className: "h-8 w-8 text-white" })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{grade.name}</h3>
                  <div className="bg-white/50 rounded-lg p-3 mb-4">
                    <div className="text-2xl font-bold text-blue-600">{grade.subjects}</div>
                    <div className="text-sm text-gray-600">مادة دراسية</div>
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${currentStage.color} hover:opacity-90`}>
                    <span>تصفح {isBooks ? 'الكتب' : 'الملازم'}</span>
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
          className="mt-12 text-center"
        >
          <Link to={baseUrl}>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <ChevronLeft className="h-5 w-5 ml-2 rotate-180" />
              العودة إلى {title}
            </Button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default StagePage;
