// src/pages/Resume.jsx
import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

function Resume() {
  const experience = [
    {
      role: "Full-Stack Developer",
      company: "Freelance / Remote",
      period: "2023 – Present",
      description: "React va Node.js yordamida interaktiv web ilovalar yaratish, backend APIlar ishlab chiqish va ma'lumotlar bazasi bilan ishlash.",
      achievements: [
        "50+ loyiha muvaffaqiyatli yakunlandi",
        "Mijozlar qoniqish darajasi 98%",
        "Performans optimizatsiyasi bilan 40% tezlik oshirildi",
        "RESTful API va GraphQL interfeyslari yaratildi"
      ],
      skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
      icon: "🚀"
    },
    {
      role: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      period: "2022 – 2023",
      description: "UI/UX dizaynni React.js yordamida amalga oshirish, kod standartlariga rioya qilish va jamoaviy ishlar.",
      achievements: [
        "Korporativ dashboard interfeysi yaratildi",
        "Kod review va best practices",
        "Agile metodologiyada ishlash tajribasi",
        "Testing va debugging"
      ],
      skills: ["React", "JavaScript", "CSS", "Git", "Jira"],
      icon: "💼"
    },
    {
      role: "Web Developer",
      company: "Digital Agency",
      period: "2021 – 2022",
      description: "Kichik va o'rta bizneslar uchun veb-saytlar va CRM tizimlarini ishlab chiqish.",
      achievements: [
        "20+ veb-sayt ishlab chiqildi",
        "SEO optimallashtirish",
        "Responsive design implementatsiyasi",
        "WordPress va Shopify platformalari"
      ],
      skills: ["HTML/CSS", "JavaScript", "WordPress", "Shopify", "SEO"],
      icon: "🌐"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Software Engineering",
      school: "Samarkand State University",
      period: "2022 – Present",
      grade: "4.8/5.0",
      courses: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Web Development",
        "Software Engineering",
        "Computer Networks"
      ],
      icon: "🎓"
    },
    {
      degree: "Advanced JavaScript Development",
      school: "Udemy, Coursera, freeCodeCamp",
      period: "2021 – 2022",
      grade: "Top 5%",
      courses: [
        "Modern JavaScript ES6+",
        "React & Redux",
        "Node.js & Express",
        "MongoDB & PostgreSQL",
        "REST APIs & GraphQL"
      ],
      icon: "📚"
    }
  ];

  const certificates = [
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Coursera)",
      year: "2023",
      skills: ["React", "Advanced JavaScript", "UI/UX", "Git"],
      credential: "Verified Certificate",
      icon: "🏆"
    },
    {
      name: "Node.js Backend Development",
      issuer: "Udemy",
      year: "2022",
      skills: ["Express.js", "MongoDB", "JWT", "REST API"],
      credential: "Certificate of Completion",
      icon: "⚙️"
    },
    {
      name: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      year: "2021",
      skills: ["Algorithms", "Data Structures", "Problem Solving"],
      credential: "Certification",
      icon: "🧠"
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2021",
      skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive"],
      credential: "Certification",
      icon: "🎨"
    }
  ];

  const skills = {
    "Frontend": [
      { name: "React.js", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Expert" }
    ],
    "Backend": [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "GraphQL", level: "Intermediate" }
    ],
    "Tools & DevOps": [
      { name: "Git & GitHub", level: "Expert" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Beginner" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "Jira", level: "Advanced" }
    ],
    "Soft Skills": [
      { name: "Problem Solving", level: "Expert" },
      { name: "Team Collaboration", level: "Advanced" },
      { name: "Communication", level: "Advanced" },
      { name: "Project Management", level: "Intermediate" },
      { name: "Time Management", level: "Advanced" }
    ]
  };

  const languages = [
    { name: "Uzbek", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Russian", level: "Conversational" }
  ];

  const downloadCV = () => {
    // Bu yerda haqiqiy CV faylini yuklab olish logikasi bo'ladi
    alert("CV yuklab olinmoqda...");
    // window.open('/files/Muzaffarbek_CV.pdf', '_blank');
  };

  const printCV = () => {
    window.print();
  };

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-32 translate-x-32"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="block text-gray-800 dark:text-white">Muzaffar Akbarov</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                3+ yillik tajribaga ega Full-Stack Developer. React, Node.js va modern web texnologiyalari 
                orqali innovatsion web ilovalarni yaratishga ixtisoslashganman.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    MA
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: "📧", label: "Email", value: "muzaffar@example.com", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
              { icon: "📱", label: "Phone", value: "+998 90 123 45 67", color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" },
              { icon: "📍", label: "Location", value: "Samarkand, Uzbekistan", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" },
              { icon: "💼", label: "Status", value: "Available for work", color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400" },
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-3 p-4 rounded-xl ${item.color}`}>
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              size="lg"
              icon="📥"
              onClick={downloadCV}
            >
              CV Yuklab Olish
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon="🖨️"
              onClick={printCV}
            >
              Chop etish
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              icon="👁️"
              as="a"
              href="/portfolio"
            >
              Portfolio Ko'rish
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Experience & Education */}
        <div className="lg:col-span-2 space-y-8">
          {/* Work Experience */}
          <Card className="relative overflow-hidden" hoverable gradient>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            <Card.Header>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400">💼</span>
                Ish Tajribasi
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  (3+ Years)
                </span>
              </h2>
            </Card.Header>
            
            <Card.Body>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative pb-8 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl">
                        {job.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                              {job.role}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                              {job.company}
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                            {job.period}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {job.description}
                        </p>
                        
                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            Yutuqlar
                          </h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Skills */}
                        <div>
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                            <span className="text-blue-500">⚡</span>
                            Qo'llangan Texnologiyalar
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>

          {/* Education */}
          <Card padding="lg" hoverable>
            <Card.Header>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-purple-600 dark:text-purple-400">🎓</span>
                Ta'lim
              </h2>
            </Card.Header>
            
            <Card.Body>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pb-8 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl">
                        {edu.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                              {edu.degree}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                              {edu.school}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {edu.period}
                            </span>
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                        
                        {/* Courses */}
                        <div>
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Asosiy Kurslar
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Right Column - Skills & Certificates */}
        <div className="space-y-8">
          {/* Skills */}
          <Card padding="lg" hoverable>
            <Card.Header>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-green-600 dark:text-green-400">⚡</span>
                Ko'nikmalar
              </h2>
            </Card.Header>
            
            <Card.Body>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                      <span className={`
                        ${category === 'Frontend' ? 'text-blue-500' : ''}
                        ${category === 'Backend' ? 'text-green-500' : ''}
                        ${category === 'Tools & DevOps' ? 'text-purple-500' : ''}
                        ${category === 'Soft Skills' ? 'text-pink-500' : ''}
                      `}>
                        {category === 'Frontend' && '🎨'}
                        {category === 'Backend' && '⚙️'}
                        {category === 'Tools & DevOps' && '🔧'}
                        {category === 'Soft Skills' && '🤝'}
                      </span>
                      {category}
                    </h3>
                    
                    <div className="space-y-2">
                      {skillList.map((skill, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className={`
                            text-sm font-medium px-2 py-1 rounded-full
                            ${skill.level === 'Expert' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : ''}
                            ${skill.level === 'Advanced' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}
                            ${skill.level === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' : ''}
                            ${skill.level === 'Beginner' ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400' : ''}
                          `}>
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>

          {/* Certificates */}
          <Card padding="lg" hoverable>
            <Card.Header>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-yellow-600 dark:text-yellow-400">🏆</span>
                Sertifikatlar
              </h2>
            </Card.Header>
            
            <Card.Body>
              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                        <span className="text-white text-lg">{cert.icon}</span>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full">
                        {cert.credential}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>

          {/* Languages */}
          <Card padding="lg" hoverable>
            <Card.Header>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400">🗣️</span>
                Tillar
              </h2>
            </Card.Header>
            
            <Card.Body>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {lang.name}
                      </span>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`
                          h-2 rounded-full
                          ${lang.level === 'Native' ? 'bg-gradient-to-r from-green-400 to-green-600 w-full' : ''}
                          ${lang.level === 'Professional' ? 'bg-gradient-to-r from-blue-400 to-blue-600 w-4/5' : ''}
                          ${lang.level === 'Conversational' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 w-3/5' : ''}
                        `}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 border-2 border-blue-200 dark:border-blue-800">
        <div className="text-center max-w-2xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6">
            Hamkorlik qilishga tayyormisiz?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Men sizning loyihangizni amalga oshirishda yordam berishdan mamnunman.
            Bog'laning va birgalikda ajoyib natijalarga erishamiz!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              icon="💬"
              as="a"
              href="/contact"
            >
              Bog'lanish
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon="💼"
              as="a"
              href="/portfolio"
            >
              Portfolio
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              icon="📧"
              as="a"
              href="mailto:muzaffar@example.com"
            >
              Email Yuborish
            </Button>
          </div>
        </div>
      </Card>

      {/* Print Styles (hidden on screen) */}
      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            background: white !important;
            color: black !important;
          }
          
          .print-only {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Resume;