
import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useToast } from '@/components/ui/use-toast';

const ExamsPage = () => {
  const { toast } = useToast();

  const breadcrumbItems = [
    { label: 'الأسئلة الوزارية' }
  ];

  const handleFeatureClick = () => {
    toast({
      title: "🚧 هذه الميزة غير متوفرة حالياً",
      description: "لكن لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀",
      duration: 5000,
    });
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
            <HelpCircle className="h-12 w-12 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">الأسئلة الوزارية</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            أسئلة السنوات السابقة مع الحلول النموذجية لجميع المراحل الدراسية
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-effect rounded-2xl p-12 text-center">
            <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertCircle className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">قريباً جداً!</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نحن نعمل بجد لتوفير مجموعة شاملة من الأسئلة الوزارية للسنوات السابقة مع الحلول النموذجية. 
              هذا القسم سيكون متاحاً قريباً لخدمة جميع الطلاب.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">ما سيتضمنه هذا القسم:</h3>
              <ul className="text-blue-700 space-y-2 text-right">
                <li>• أسئلة وزارية للسنوات السابقة</li>
                <li>• حلول نموذجية مفصلة</li>
                <li>• تصنيف حسب المرحلة والصف والمادة</li>
                <li>• نصائح وإرشادات للامتحانات</li>
              </ul>
            </div>
            <button
              onClick={handleFeatureClick}
              className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-violet-700 transition-all transform hover:scale-105"
            >
              إشعاري عند التوفر
            </button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ExamsPage;
