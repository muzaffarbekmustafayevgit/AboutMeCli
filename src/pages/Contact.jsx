import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "../components/Button";
import { socialMedias } from "../data/socialMedias";
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
 <div className="min-h-screen pt-14 px-3 md:px-5 lg:px-6 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
  <div className="max-w-6xl mx-auto">

    {/* Sarlavha */}
    <div className="text-center mt-16 mb-6">
      <h1 className="light:text-gray-700 text-3xl dark:text-gray-300">
        Loyihalar yoki hamkorlik uchun murojaat qiling
      </h1>
    </div>

    {/* Kontent */}
    <div className="grid lg:grid-cols-2 gap-6">

      {/* Chap blok */}
      <div className="space-y-4">
        {/* Aloqa ma'lumotlari */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg transition-colors">
         

          <div className="space-y-3">

            {/* Email */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl 
                 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <div className="w-11 h-11 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {}
                </p>
                <a 
                  href="mailto:muzaffar@example.com" 
                  className="font-medium text-gray-800 dark:text-gray-200"
                >
               {socialMedias.email.path}
                </a>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl 
                 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <div className="w-11 h-11 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Telefon
                </p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {socialMedias.phone.path}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Xarita */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
          <div className="h-56 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              className="rounded-xl"
              title="Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg">
        <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white">
          Xabar Yuborish
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3.5">

          <input
            type="text"
            name="name"
            placeholder="Ismingiz"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border 
                       border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-700 
                       text-gray-800 dark:text-gray-100
                       placeholder-gray-500 dark:placeholder-gray-400
                       focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                       transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border 
                       border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-700 
                       text-gray-800 dark:text-gray-100
                       placeholder-gray-500 dark:placeholder-gray-400
                       focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                       transition"
            required
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Xabaringiz"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border 
                       border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-700 
                       text-gray-800 dark:text-gray-100
                       placeholder-gray-500 dark:placeholder-gray-400
                       focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                       transition"
            required
          ></textarea>

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
            <div className="p-3.5 bg-green-100 dark:bg-green-900/30 rounded-xl">
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