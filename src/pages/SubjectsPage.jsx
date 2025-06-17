
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, ChevronLeft, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

const SubjectsPage = ({ type }) => {
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

  const subjects = {
    primary: {
      grade1: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'التربية الفنية', 'التربية الرياضية', 'اللغة الإنجليزية', 'التربية الاجتماعية'],
      grade2: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'التربية الفنية', 'التربية الرياضية', 'اللغة الإنجليزية', 'التربية الاجتماعية', 'الحاسوب'],
      grade3: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'التربية الفنية', 'التربية الرياضية', 'اللغة الإنجليزية', 'التربية الاجتماعية', 'الحاسوب', 'التربية الموسيقية'],
      grade4: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'التربية الفنية', 'التربية الرياضية', 'اللغة الإنجليزية', 'التربية الاجتماعية', 'الحاسوب', 'التربية الموسيقية', 'التاريخ'],
      grade5: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'التربية الفنية', 'التربية الرياضية', 'اللغة الإنجليزية', 'التربية الاجتماعية', 'الحاسوب', 'التربية الموسيقية', 'التاريخ', 'الجغرافية'],
      grade6: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'التربية الفنية', 'التربية الرياضية', 'اللغة الإنجليزية', 'التربية الاجتماعية', 'الحاسوب', 'التربية الموسيقية', 'التاريخ', 'الجغرافية', 'التربية المهنية']
    },
    middle: {
      grade1: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'اللغة الإنجليزية', 'التاريخ', 'الجغرافية', 'التربية الفنية', 'التربية الرياضية', 'الحاسوب', 'التربية المهنية', 'التربية الموسيقية', 'الفيزياء', 'الكيمياء'],
      grade2: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'اللغة الإنجليزية', 'التاريخ', 'الجغرافية', 'التربية الفنية', 'التربية الرياضية', 'الحاسوب', 'التربية المهنية', 'التربية الموسيقية', 'الفيزياء', 'الكيمياء', 'الأحياء'],
      grade3: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'اللغة الإنجليزية', 'التاريخ', 'الجغرافية', 'التربية الفنية', 'التربية الرياضية', 'الحاسوب', 'التربية المهنية', 'التربية الموسيقية', 'الفيزياء', 'الكيمياء', 'الأحياء', 'التربية الوطنية']
    },
    high: {
      grade4: ['اللغة العربية', 'الرياضيات', 'الفيزياء', 'الكيمياء', 'الأحياء', 'التاريخ', 'الجغرافية', 'اللغة الإنجليزية', 'التربية الإسلامية', 'الحاسوب', 'التربية الرياضية', 'التربية الفنية'],
      grade5: ['اللغة العربية', 'الرياضيات', 'الفيزياء', 'الكيمياء', 'الأحياء', 'التاريخ', 'الجغرافية', 'اللغة الإنجليزية', 'التربية الإسلامية', 'الحاسوب'],
      grade6: ['اللغة العربية', 'الرياضيات', 'الفيزياء', 'الكيمياء', 'الأحياء', 'التاريخ', 'الجغرافية', 'اللغة الإنجليزية']
    }
  };

  const currentStage = stageData[stage];
  const currentGrade = gradeNames[grade];
  const currentSubjects = subjects[stage]?.[grade] || [];
  const isBooks = type === 'books';
  const title = isBooks ? 'الكتب المدرسية' : 'الملازم الدراسية';
  const baseUrl = isBooks ? '/books' : '/notes';

  const breadcrumbItems = [
    { label: title, href: baseUrl },
    { label: currentStage?.name, href: `${baseUrl}/${stage}` },
    { label: currentGrade, href: `${baseUrl}/${stage}/${grade}` },
    { label: 'المواد الدراسية' }
  ];

  const handleSubjectClick = (subject) => {
    window.open('https://t.me/xd6_bot', '_blank');
  };

  const subjectIcons = {
    'اللغة العربية': '📚',
    'الرياضيات': '🔢',
    'العلوم': '🔬',
    'الفيزياء': '⚛️',
    'الكيمياء': '🧪',
    'الأحياء': '🧬',
    'التاريخ': '📜',
    'الجغرافية': '🌍',
    'اللغة الإنجليزية': '🇬🇧',
    'التربية الإسلامية': '☪️',
    'الحاسوب': '💻',
    'التربية الفنية': '🎨',
    'التربية الرياضية': '⚽',
    'التربية الموسيقية': '🎵',
    'التربية المهنية': '🔧',
    'التربية الاجتماعية': '👥',
    'التربية الوطنية': '🇮🇶'
  };

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
              <h1 className="text-4xl font-bold text-gray-800">المواد الدراسية</h1>
              <p className="text-xl text-gray-600">{currentGrade}</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اختر المادة الدراسية للوصول إلى {title} عبر بوت التلغرام
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentSubjects.map((subject, index) => (
            <motion.div
              key={subject}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => handleSubjectClick(subject)}
            >
              <div className="glass-effect rounded-2xl p-6 text-center card-hover h-full group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {subjectIcons[subject] || '📖'}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{subject}</h3>
                <div className="flex items-center justify-center space-x-2 space-x-reverse text-blue-600 group-hover:text-blue-700">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">فتح في التلغرام</span>
                </div>
                <div className={`mt-4 w-full h-1 bg-gradient-to-r ${currentStage.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">كيفية التحميل</h3>
            <div className="text-gray-600 space-y-3 text-right">
              <p>1. انقر على المادة الدراسية المطلوبة</p>
              <p>2. سيتم توجيهك إلى بوت التلغرام @xd6_bot</p>
              <p>3. ابدأ محادثة مع البوت واطلب المادة المطلوبة</p>
              <p>4. ستحصل على رابط التحميل المباشر</p>
            </div>
          </div>
          
          <Link to={`${baseUrl}/${stage}/${grade}`}>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <ChevronLeft className="h-5 w-5 ml-2 rotate-180" />
              العودة إلى {currentGrade}
            </Button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default SubjectsPage;
