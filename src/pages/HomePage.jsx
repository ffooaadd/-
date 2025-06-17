
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, HelpCircle, GraduationCap, Users, ArrowDown, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const services = [
    {
      title: 'الكتب المدرسية',
      description: 'تحميل جميع الكتب المدرسية المعتمدة من وزارة التربية العراقية',
      icon: BookOpen,
      link: '/books',
      color: 'from-sky-500 to-cyan-400',
      shadow: 'shadow-sky-400/50',
      iconBg: 'bg-gradient-to-br from-sky-400 to-cyan-300'
    },
    {
      title: 'الملازم الدراسية',
      description: 'ملازم محدثة ومنظمة لجميع المواد والصفوف الدراسية',
      icon: FileText,
      link: '/notes',
      color: 'from-emerald-500 to-green-400',
      shadow: 'shadow-emerald-400/50',
      iconBg: 'bg-gradient-to-br from-emerald-400 to-green-300'
    },
    {
      title: 'الأسئلة الوزارية',
      description: 'أسئلة السنوات السابقة مع الحلول النموذجية للاستعداد الأمثل',
      icon: HelpCircle,
      link: '/exams',
      color: 'from-purple-500 to-indigo-400',
      shadow: 'shadow-purple-400/50',
      iconBg: 'bg-gradient-to-br from-purple-400 to-indigo-300'
    }
  ];

  const stats = [
    { icon: GraduationCap, number: '12', label: 'صف دراسي مغطى', color: 'text-sky-500' },
    { icon: BookOpen, number: '200+', label: 'كتاب مدرسي متوفر', color: 'text-emerald-500' },
    { icon: FileText, number: '500+', label: 'ملزمة دراسية محدثة', color: 'text-purple-500' },
    { icon: Users, number: '10000+', label: 'طالب مستفيد يومياً', color: 'text-red-500' }
  ];
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen main-animated-gradient-bg">
      <div className="decorative-shape shape-1"></div>
      <div className="decorative-shape shape-2"></div>
      <div className="decorative-shape shape-3"></div>
      <Header />
      
      <section className="relative py-28 md:py-40 overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
        <div className="hero-glow"></div>
        <div className="absolute inset-0 animated-gradient-bg-hero opacity-70 z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-10 text-shadow-lg"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 120, damping: 15 }}
            >
              ملازمي <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500">الأفضل</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-14 max-w-3xl mx-auto leading-relaxed">
              وجهتك الأولى لتحميل أحدث الملازم والكتب الدراسية والأسئلة الوزارية لجميع المراحل في العراق. ابدأ رحلتك نحو التفوق الآن!
            </p>
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0px 0px 35px rgba(255, 255, 255, 0.4)" }}
              whileTap={{ scale: 0.92 }}
              className="relative inline-block"
            >
              <Button 
                size="lg" 
                onClick={scrollToServices}
                className="text-xl font-bold px-12 py-7 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 text-white rounded-2xl shadow-xl transform transition-all duration-300 ease-in-out hover:shadow-2xl overflow-hidden button-shine"
              >
                ابدأ التصفح الآن
                <Zap className="mr-3 h-7 w-7 animate-pulse fill-yellow-300 text-yellow-400" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-12 w-12 text-white/60"/>
        </div>
      </section>

      <section className="py-20 bg-white/80 backdrop-blur-lg shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.18 }}
                className="text-center p-6 bg-white/60 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md ${stat.color.replace('text-','bg-').replace('-500','-100')}`}>
                  <stat.icon className={`h-10 w-10 ${stat.color} icon-glow`} />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services-section" className="py-24 pattern-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">خدماتنا التعليمية المتكاملة</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              كل ما تحتاجه لرحلتك الدراسية نحو النجاح والتفوق في مكان واحد، منظم وسهل الوصول.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.25, type: "spring", stiffness: 60 }}
                whileHover={{ y: -15, scale:1.05, boxShadow: `0 30px 60px -15px var(--tw-shadow-color)` }}
                className={`group rounded-3xl overflow-hidden shadow-2xl ${service.shadow} hover:shadow-3xl transition-all duration-400 ease-out`}
                style={{'--tw-shadow-color': `rgba(${(parseInt(service.color.split(' ')[0].replace('from-','').substring(0,2),16))},${(parseInt(service.color.split(' ')[0].replace('from-','').substring(2,4),16))},${(parseInt(service.color.split(' ')[0].replace('from-','').substring(4,6),16))},0.3)`}}
              >
                <Link to={service.link} className="block h-full">
                  <div className="glass-effect p-8 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-28 h-28 ${service.iconBg} rounded-full flex items-center justify-center mx-auto mb-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                        <service.icon className="h-14 w-14 text-white icon-glow" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-5">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-8 text-md">{service.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className={`w-full text-lg py-3 border-2 border-transparent bg-gradient-to-r ${service.color} text-white group-hover:brightness-110 group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      تصفح الآن
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Zap className="h-16 w-16 mx-auto mb-6 text-yellow-300 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">مستعد لبدء رحلة التفوق؟</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              انضم إلى آلاف الطلاب الذين يثقون بـ "ملازمي الأفضل" لتحقيق أفضل النتائج الدراسية. كل ما تحتاجه بانتظارك!
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Link to="/notes">
                  <Button size="lg" variant="secondary" className="text-lg px-12 py-6 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl shadow-xl button-shine overflow-hidden">
                    تصفح الملازم الدراسية
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Link to="/books">
                  <Button size="lg" variant="outline" className="text-lg px-12 py-6 border-2 border-white text-white hover:bg-white/10 font-bold rounded-xl shadow-xl button-shine overflow-hidden">
                    تحميل الكتب المدرسية
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;