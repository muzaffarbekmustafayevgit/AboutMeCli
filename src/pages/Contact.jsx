import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "../components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20   px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Sarlavha */}
        <div className="text-center mb-10">
         
          <p className="text-gray-600 dark:text-gray-300">
            Loyihalar yoki hamkorlik uchun murojaat qiling
          </p>
        </div>

        {/* Kontent */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Chap: Aloqa ma'lumotlari */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                Aloqa Ma'lumotlari
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:muzaffar@example.com" className="font-medium">
                      muzaffar@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <p className="font-medium">+998 90 123 45 67</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Xarita */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="h-64 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.057567413494!2d69.57840081520437!3d39.65471387945533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bcde73c3c7d%3A0xa55c92d0c8f0b1e6!2sSamarkand!5e0!3m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* O'ng: Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Xabar Yuborish</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Ismingiz"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-700"
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-700"
                required
              />
              
              <textarea
                name="message"
                rows="4"
                placeholder="Xabaringiz"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-700"
                required
              ></textarea>
              
              {/* Icon prop'ni olib tashladim */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full"
              >
                Yuborish
              </Button>

              {success && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <p className="text-green-700 dark:text-green-400">
                    Xabaringiz yuborildi!
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;