
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, MapPin, MessageSquare, User, ClipboardList, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const breadcrumbItems = [
    { label: 'الرئيسية', link: '/' },
    { label: 'اتصل بنا' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 نموذج الاتصال تجريبي",
      description: `شكراً لك ${formData.name}! رسالتك (${formData.message}) تم استلامها (افتراضياً). يمكنك طلب تفعيل الإرسال الحقيقي! 🚀`,
      duration: 7000,
    });
    setFormData({ name: '', email: '', message: '' });
  };
  
  const handleContactMethodClick = (methodValue) => {
    if (methodValue.startsWith('@')) {
      window.open(`https://t.me/${methodValue.substring(1)}`, '_blank');
    } else if (methodValue.includes('@') && !methodValue.startsWith('mailto:')) {
       window.location.href = `mailto:${methodValue}`;
    } else {
      toast({
        title: "🚧 تفاصيل الاتصال",
        description: `يمكنك استخدام: ${methodValue}. هذه الميزة للعرض فقط. 🚀`,
        duration: 5000,
      });
    }
  };


  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'تلغرام',
      description: 'تواصل معنا مباشرة عبر التلغرام لرد أسرع.',
      value: '@xd6_bot',
      color: 'from-sky-400 to-blue-500',
      hoverColor: 'hover:from-sky-500 hover:to-blue-600'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      description: 'أرسل استفساراتك لنا عبر البريد الإلكتروني.',
      value: 'contact@malazimy.app', 
      color: 'from-emerald-400 to-green-500',
      hoverColor: 'hover:from-emerald-500 hover:to-green-600'
    },
    {
      icon: ClipboardList,
      title: 'الأسئلة الشائعة',
      description: 'قد تجد إجابتك في قسم الأسئلة الشائعة.',
      value: 'تصفح الأسئلة',
      color: 'from-amber-400 to-orange-500',
      hoverColor: 'hover:from-amber-500 hover:to-orange-600'
    },
    {
      icon: MapPin,
      title: 'دعم فني',
      description: 'خدمة ودعم فني لجميع طلاب العراق.',
      value: 'دعم فوري (قريباً)',
      color: 'from-rose-400 to-red-500',
      hoverColor: 'hover:from-rose-500 hover:to-red-600'
    }
  ];

  return (
    <div className="min-h-screen main-animated-gradient-bg">
      <Header />
      <div className="decorative-shape shape-1 !opacity-5"></div>
      <div className="decorative-shape shape-2 !opacity-5"></div>
      
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={breadcrumbItems} />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full shadow-lg mb-6">
            <Phone className="h-12 w-12 text-white icon-glow" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-shadow">تواصل معنا</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في رحلتك التعليمية. لا تتردد في التواصل!
          </p>
           <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 70 }}
              whileHover={{ y: -8, scale:1.03, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)" }}
              className={`glass-effect rounded-2xl p-6 text-center card-hover cursor-pointer flex flex-col items-center h-full`}
              onClick={() => handleContactMethodClick(method.value)}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="h-10 w-10 text-white icon-glow" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{method.description}</p>
              <Button 
                variant="outline"
                className={`mt-auto w-full bg-transparent border-2 border-transparent text-white font-semibold py-2 px-4 rounded-lg bg-gradient-to-r ${method.color} ${method.hoverColor} transition-all duration-300`}
              >
                {method.value.startsWith('@') || method.value.includes('@') ? 'تواصل الآن' : method.value}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">أرسل لنا رسالة مباشرة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div initial={{ opacity:0, x:-20 }} animate={{opacity:1, x:0}} transition={{delay:0.6}}>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 flex items-center">
                    <User className="h-5 w-5 mr-2 text-blue-500" /> الاسم الكامل
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
                    placeholder="مثال: أحمد محمد"
                    required
                  />
                </motion.div>
                <motion.div initial={{ opacity:0, x:20 }} animate={{opacity:1, x:0}} transition={{delay:0.7}}>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-green-500" /> البريد الإلكتروني
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
                    placeholder="example@mail.com"
                    required
                  />
                </motion.div>
              </div>
              <motion.div initial={{ opacity:0, y:20 }} animate={{opacity:1, y:0}} transition={{delay:0.8}}>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-purple-500" /> رسالتك
                </label>
                <textarea 
                  name="message"
                  id="message"
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
                  placeholder="اكتب استفسارك أو ملاحظاتك هنا..."
                  required
                ></textarea>
              </motion.div>
              <motion.div initial={{ opacity:0, y:20 }} animate={{opacity:1, y:0}} transition={{delay:0.9}} className="text-center">
                <Button 
                  type="submit"
                  size="lg"
                  className="px-10 py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out button-shine overflow-hidden"
                >
                  <Send className="mr-2 h-5 w-5" />
                  إرسال الرسالة
                </Button>
              </motion.div>
            </form>
            
            <div className="mt-12 border-t border-gray-300 pt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center flex items-center justify-center">
                    <Clock className="h-6 w-6 mr-2 text-orange-500" /> ساعات الدعم الفني
                </h3>
                <div className="text-gray-600 space-y-1 text-center">
                    <p>السبت - الخميس: <span className="font-semibold text-gray-700">9:00 صباحاً - 7:00 مساءً</span></p>
                    <p>الجمعة: <span className="font-semibold text-gray-700">مغلق (للاستفسارات الطارئة عبر تلغرام)</span></p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;