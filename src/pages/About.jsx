// src/pages/About.jsx
import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

function About() {
  const experiences = [
    {
      year: "2023 - Hozirgacha",
      title: "Full Stack Developer",
      company: "Freelance / Remote",
      description: "React, Node.js va MongoDB texnologiyalari yordamida web ilovalarni ishlab chiqish va deploy qilish",
      achievements: [
        "50+ loyiha muvaffaqiyatli yakunlandi",
        "Mijozlar qoniqish darajasi 98%",
        "Performans optimizatsiyasi bilan 40% tezlik oshirildi"
      ]
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      description: "Korporativ dashboard va admin panel interfeyslarini yaratish",
      achievements: [
        "UI/UX dizaynni amalga oshirish",
        "Kod review va best practices",
        "Jamoa bilan agile metodologiyada ishlash"
      ]
    },
    {
      year: "2021 - 2022",
      title: "Web Developer",
      company: "Digital Agency",
      description: "Kichik va o'rta bizneslar uchun veb-saytlar va CRM tizimlarini ishlab chiqish",
      achievements: [
        "20+ veb-sayt ishlab chiqildi",
        "SEO optimallashtirish",
        "Responsive design implementatsiyasi"
      ]
    }
  ];

  const education = [
    {
      degree: "Software Engineering",
      institution: "Samarkand State University",
      year: "2022–2026",
      grade: "4.8/5.0",
      description: "Dasturiy ta'minot muhandisligi, algoritmlar, ma'lumotlar bazasi, tarmoq xavfsizligi"
    },
    {
      degree: "Full Stack JavaScript Development",
      institution: "Udemy, Coursera",
      year: "2021–2022",
      grade: "Top 5%",
      description: "Advanced JavaScript, React, Node.js, Express, MongoDB, REST APIs"
    }
  ];

  const certificates = [
    {
      name: "Advanced React",
      issuer: "Meta (Coursera)",
      year: "2023",
      skills: ["React Hooks", "Context API", "Redux", "Testing"]
    },
    {
      name: "Node.js Backend Development",
      issuer: "Udemy",
      year: "2022",
      skills: ["Express.js", "MongoDB", "JWT", "REST API"]
    },
    {
      name: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      year: "2021",
      skills: ["Algorithms", "Data Structures", "Problem Solving"]
    }
  ];

  const skills = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 75 },
      { name: "Tailwind CSS", level: 92 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 87 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 78 }
    ],
    tools: [
      { name: "Git & GitHub", level: 93 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
      { name: "Jira", level: 88 }
    ]
  };

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full translate-y-48 -translate-x-48"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    M
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block">Assalomu alaykum,</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Men Muzaffar Mustafayev
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              <span className="font-bold text-blue-600 dark:text-blue-400">Full-Stack JavaScript Developer</span> 
              {" "}sifatida zamonaviy web ilovalarni yaratish va ularni amaliyotda qo'llashga ixtisoslashganman. 
              Har bir loyiha — yangi imkoniyat, har bir kod — yangi tajriba.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button 
                variant="primary" 
                size="lg"
                icon="💼"
                as="a"
                href="/portfolio"
              >
                Loyihalarim
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                icon="📄"
                as="a"
                href="/resume"
              >
                CV Yuklab olish
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                icon="👋"
                as="a"
                href="/contact"
              >
                Bog'lanish
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "10+", label: "Bajargan Loyihalar", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
          { value: "3+", label: "Yillik Tajriba", color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30" },
          { value: "98%", label: "Mijozlar Qoniqishi", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" },
          { value: "24/7", label: "Qo'llab-quvvatlash", color: "text-pink-600 dark:text-pink-400", bg: "bg-pink-100 dark:bg-pink-900/30" },
        ].map((stat, index) => (
          <Card key={index} className={`${stat.bg} text-center p-6`} hoverable>
            <div className={`text-4xl font-bold ${stat.color} mb-2`}>
              {stat.value}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              {stat.label}
            </div>
          </Card>
        ))}
      </div>

    
      {/* Experience Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience Timeline */}
        <Card padding="lg" hoverable gradient>
          <Card.Header>
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="text-green-600 dark:text-green-400">💼</span>
              Ish Tajribasi
            </h3>
          </Card.Header>
          
          <Card.Body>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                    
                    {/* Content */}
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                      <div className="flex flex-wrap items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          {exp.year}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.company}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {exp.title}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-green-500">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* Education & Certificates */}
        <div className="space-y-8">
          {/* Education */}
          <Card padding="lg" hoverable>
            <Card.Header>
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-purple-600 dark:text-purple-400">🎓</span>
                Ta'lim
              </h3>
            </Card.Header>
            
            <Card.Body>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-lg text-gray-800 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.year}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.description}
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>

          {/* Certificates */}
          <Card padding="lg" hoverable>
            <Card.Header>
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-yellow-600 dark:text-yellow-400">🏆</span>
                Sertifikatlar
              </h3>
            </Card.Header>
            
            <Card.Body>
              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">🏅</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-800 dark:text-white">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {cert.issuer} • {cert.year}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {cert.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      
    </div>
  );
}

export default About;