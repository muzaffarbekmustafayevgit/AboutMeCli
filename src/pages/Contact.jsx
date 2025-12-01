import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Select from "../components/Select";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "muzaffar.akbarov@example.com",
      link: "mailto:muzaffar.akbarov@example.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "📱",
      title: "Telefon",
      value: "+998 90 123 45 67",
      link: "tel:+998901234567",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "💬",
      title: "Telegram",
      value: "@muzaffarbek_dev",
      link: "https://t.me/muzaffarbek_dev",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/muzaffar",
      link: "https://linkedin.com/in/muzaffar",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "github.com/muzaffarbek",
      link: "https://github.com/muzaffarbek",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: "📍",
      title: "Manzil",
      value: "Samarkand, Uzbekistan",
      link: "https://maps.google.com/?q=Samarkand",
      color: "from-red-500 to-red-600"
    }
  ];

  const projectCategories = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app", label: "Mobile Application" },
    { value: "e-commerce", label: "E-commerce Website" },
    { value: "crm-system", label: "CRM System" },
    { value: "api-development", label: "API Development" },
    { value: "consultation", label: "Consultation" },
    { value: "other", label: "Other" }
  ];

  const budgetOptions = [
    { value: "under-500", label: "Under $500" },
    { value: "500-1000", label: "$500 - $1,000" },
    { value: "1000-5000", label: "$1,000 - $5,000" },
    { value: "5000-10000", label: "$5,000 - $10,000" },
    { value: "10000+", label: "$10,000+" },
    { value: "discuss", label: "Discuss Later" }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", status: "active" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", status: "active" },
    { day: "Sunday", hours: "Closed", status: "inactive" }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Ism kiritilishi shart";
    if (!formData.email.trim()) newErrors.email = "Email kiritilishi shart";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email noto'g'ri formatda";
    if (!formData.subject.trim()) newErrors.subject = "Mavzu kiritilishi shart";
    if (!formData.message.trim()) newErrors.message = "Xabar kiritilishi shart";
    if (!formData.category) newErrors.category = "Kategoriya tanlanishi shart";
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send data to your backend
      console.log('Form data:', formData);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: "",
        budget: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
      setErrors({ submit: "Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring." });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section with Background */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full translate-y-48 -translate-x-48"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="block text-gray-800 dark:text-white">Birgalikda Ishlaymiz</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Keling, Suhbat Qilaylik!
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Loyiha, hamkorlik yoki shunchaki suhbat uchun men bilan bog'laning.
            Men har bir xabarga 24 soat ichida javob berishga harakat qilaman va 
            sizning g'oyalaringizni amalga oshirishda yordam berishdan mamnunman.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              variant="primary" 
              size="lg"
              icon="💬"
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              Xabar Yuborish
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon="📞"
              as="a"
              href="tel:+998901234567"
            >
              Qo'ng'iroq Qilish
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              icon="💼"
              as="a"
              href="/portfolio"
            >
              Portfolio Ko'rish
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card 
            id="contact-form"
            className="relative overflow-hidden"
            hoverable
            gradient
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            <Card.Header>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-400">📝</span>
                  Loyiha Taklifi Formasi
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Barcha maydonlar (*) bilan belgilangan
                </span>
              </div>
            </Card.Header>
            
            <Card.Body>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                    <span className="text-4xl text-white">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">
                    Xabaringiz Muvaffaqiyatli Yuborildi!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Taklifingiz uchun rahmat. Men 24 soat ichida siz bilan bog'lanaman.
                    Ayni vaqtda mening boshqa loyihalarimni ko'rishingiz mumkin.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button 
                      variant="outline" 
                      size="md"
                      icon="💼"
                      as="a"
                      href="/portfolio"
                    >
                      Portfolio
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="md"
                      icon="👨‍💻"
                      as="a"
                      href="/about"
                    >
                      Men Haqimda
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errors.submit && (
                    <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
                      <p className="text-red-600 dark:text-red-400 flex items-center gap-2">
                        <span>⚠️</span>
                        {errors.submit}
                      </p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Ismingiz *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      icon="👤"
                      placeholder="F.I.Sh"
                      error={errors.name}
                      disabled={isSubmitting}
                    />
                    
                    <Input
                      label="Email manzilingiz *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      icon="📧"
                      placeholder="email@example.com"
                      error={errors.email}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Telefon raqamingiz"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      icon="📱"
                      placeholder="+998 90 123 45 67"
                      disabled={isSubmitting}
                    />
                    
                    <Select
                      label="Loyiha turi *"
                      name="category"
                      value={formData.category}
                      onChange={(e) => handleSelectChange('category', e.target.value)}
                      options={projectCategories}
                      placeholder="Loyiha turini tanlang"
                      error={errors.category}
                      disabled={isSubmitting}
                      icon="📂"
                    />
                  </div>
                  
                  <Input
                    label="Mavzu *"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    icon="📌"
                    placeholder="Loyiha nomi yoki mavzu"
                    error={errors.subject}
                    disabled={isSubmitting}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="Byudjetingiz (ixtiyoriy)"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => handleSelectChange('budget', e.target.value)}
                      options={budgetOptions}
                      placeholder="Byudjetingizni tanlang"
                      disabled={isSubmitting}
                      icon="💰"
                    />
                  </div>
                  
                  <Textarea
                    label="Loyiha haqida batafsil *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Loyihangiz haqida batafsil ma'lumot bering. Qanday funksiyalar, texnologiyalar yoki o'ziga xos xususiyatlar kerak?"
                    error={errors.message}
                    disabled={isSubmitting}
                    showCount
                    maxLength={2000}
                    className="resize-y"
                  />
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Formani to'ldirish vaqti: ~2 daqiqa
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={isSubmitting}
                      icon={isSubmitting ? "" : "🚀"}
                      className="min-w-[200px]"
                    >
                      {isSubmitting ? "Yuborilmoqda..." : "Taklif Yuborish"}
                    </Button>
                  </div>
                </form>
              )}
            </Card.Body>
          </Card>
        </div>

        {/* Contact Information Sidebar */}
        <div className="space-y-6">
          {/* Contact Cards */}
          <Card padding="lg" hoverable gradient>
            <Card.Header>
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400">📱</span>
                Aloqa Ma'lumotlari
              </h3>
            </Card.Header>
            
            <Card.Body>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-10`}></div>
                    </div>
                    
                    <div className="relative flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {info.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {info.value}
                        </div>
                      </div>
                      
                      <div className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors transform group-hover:translate-x-2">
                        →
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card.Body>
          </Card>

          {/* Working Hours */}
          <Card padding="lg" hoverable>
            <Card.Header>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <span className="text-green-600 dark:text-green-400">🕐</span>
                  Ish Jadvali
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  GMT+5
                </div>
              </div>
            </Card.Header>
            
            <Card.Body>
              <div className="space-y-4">
                {workingHours.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      item.status === 'active' 
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                        : 'bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.status === 'active' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}>
                        {item.status === 'active' ? '✓' : '✗'}
                      </div>
                      <span className={`font-medium ${
                        item.status === 'active' 
                          ? 'text-gray-800 dark:text-gray-200' 
                          : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {item.day}
                      </span>
                    </div>
                    
                    <span className={`font-semibold ${
                      item.status === 'active' 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-red-500 dark:text-red-400'
                    }`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white">
                    ⚡
                  </div>
                  <div>
                    <div className="font-semibold text-blue-600 dark:text-blue-400">
                      O'rtacha javob vaqti
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-bold">4 soat</span> • Ish vaqtlari ichida
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 border-2 border-blue-200 dark:border-blue-800">
            <div className="p-6">
              <h3 className="text-xl font-bold text-center mb-6">
                Tezkor Amallar
              </h3>
              
              <div className="space-y-4">
                <Button
                  variant="outline"
                  fullWidth
                  size="lg"
                  icon="📄"
                  as="a"
                  href="/resume"
                  className="justify-center"
                >
                  CV Yuklab Olish
                </Button>
                
                <Button
                  variant="outline"
                  fullWidth
                  size="lg"
                  icon="💼"
                  as="a"
                  href="/portfolio"
                  className="justify-center"
                >
                  Loyihalarimni Ko'rish
                </Button>
                
                <Button
                  variant="outline"
                  fullWidth
                  size="lg"
                  icon="👨‍💻"
                  as="a"
                  href="/about"
                  className="justify-center"
                >
                  Men Haqimda
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-200 dark:border-blue-800 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Qo'shimcha savollar bo'lsa,<br />
                  bemalol murojaat qiling!
                </p>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card padding="lg">
            <Card.Header>
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="text-purple-600 dark:text-purple-400">🌐</span>
                Ijtimoiy Tarmoqlar
              </h3>
            </Card.Header>
            
            <Card.Body>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: "💼", label: "LinkedIn", color: "from-blue-600 to-blue-700", link: "https://linkedin.com/in/muzaffar" },
                  { icon: "💻", label: "GitHub", color: "from-gray-700 to-gray-900", link: "https://github.com/muzaffarbek" },
                  { icon: "💬", label: "Telegram", color: "from-blue-400 to-blue-500", link: "https://t.me/muzaffarbek_dev" },
                  { icon: "📸", label: "Instagram", color: "from-pink-500 to-pink-600", link: "https://instagram.com/muzaffarbek" },
                  { icon: "🐦", label: "Twitter", color: "from-blue-400 to-blue-500", link: "https://twitter.com/muzaffarbek" },
                  { icon: "📹", label: "YouTube", color: "from-red-500 to-red-600", link: "https://youtube.com/@muzaffarbek" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-white hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white text-xl mb-2 group-hover:scale-110 transition-transform`}>
                      {social.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Map Location (Placeholder) */}
      <Card className="overflow-hidden">
        <Card.Header>
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-red-600 dark:text-red-400">📍</span>
            Joylashuv
          </h2>
        </Card.Header>
        
        <Card.Body className="p-0">
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Samarkand, Uzbekistan
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Remote hamkorlik uchun tayyor
                </p>
              </div>
            </div>
            
            {/* Map overlay pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-grid"></div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;