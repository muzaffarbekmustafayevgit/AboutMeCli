import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI Chat Platform",
      description: "React, Node.js va MongoDB yordamida yaratilgan interaktiv chat platformasi. Foydalanuvchilar ro'yxatdan o'tib, AI bilan suhbat qurishlari mumkin.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
      category: "fullstack",
      github: "https://github.com/muzaffarbek/aichat",
      demo: "https://aichat.demo.com",
      featured: true,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "To'liq funktsional savdo paneli real-time ma'lumotlar, analytics va buyurtma boshqaruvi bilan.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
      category: "fullstack",
      github: "https://github.com/muzaffarbek/ecommerce",
      demo: "https://ecommerce.demo.com",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Jamoa uchun modern vazifa boshqarish tizimi real-time updates va team collaboration bilan.",
      tech: ["React", "Express", "Socket.io", "MongoDB", "JWT"],
      category: "fullstack",
      github: "https://github.com/muzaffarbek/taskapp",
      demo: "https://taskapp.demo.com",
      featured: false,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Real-time ob-havo ma'lumotlari, 7 kunlik prognoz va location-based service.",
      tech: ["React", "API", "Chart.js", "Geolocation"],
      category: "frontend",
      github: "https://github.com/muzaffarbek/weather",
      demo: "https://weather.demo.com",
      featured: false,
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800"
    },
    {
      id: 5,
      title: "Blog CMS",
      description: "To'liq boshqariladigan kontent boshqarish tizimi admin panel va WYSIWYG editor bilan.",
      tech: ["Vue.js", "Express", "MySQL", "AdminLTE"],
      category: "fullstack",
      github: "https://github.com/muzaffarbek/blogcms",
      demo: "https://blogcms.demo.com",
      featured: false,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800"
    },
    {
      id: 6,
      title: "Portfolio Template",
      description: "Responsive va modern portfolio template React va TailwindCSS bilan.",
      tech: ["React", "Tailwind", "Framer Motion", "Responsive"],
      category: "frontend",
      github: "https://github.com/muzaffarbek/portfolio",
      demo: "https://portfolio.demo.com",
      featured: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
    }
  ];

  const filters = [
    { key: "all", label: "Hammasi", count: projects.length },
    { key: "fullstack", label: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
    { key: "frontend", label: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { key: "backend", label: "Backend", count: projects.filter(p => p.category === "backend").length },
    { key: "featured", label: "Featured", count: projects.filter(p => p.featured).length }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => 
        filter === "featured" ? project.featured : project.category === filter
      );

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
          Loyihalar Portfoliom
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Har bir loyiha — yangi imkoniyat, har bir kod — yangi tajriba.
          Quyida men yaratgan ba'zi loyihalarimni ko'rishingiz mumkin.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 justify-center">
        {filters.map((filterItem) => (
          <Button
            key={filterItem.key}
            variant={filter === filterItem.key ? "primary" : "secondary"}
            size="sm"
            onClick={() => setFilter(filterItem.key)}
          >
            {filterItem.label}
            <span className="ml-2 px-2 py-0.5 bg-white/20 dark:bg-black/20 rounded-full text-xs">
              {filterItem.count}
            </span>
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="h-full group" hoverable>
            <div className="relative overflow-hidden rounded-t-xl">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10"></div>
              {project.featured && (
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                    ⭐ Featured
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  {project.category === "fullstack" ? "🌐 Full Stack" : 
                   project.category === "frontend" ? "🎨 Frontend" : "⚙️ Backend"}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  as="a"
                  href={project.github}
                  target="_blank"
                  icon="💻"
                >
                  GitHub
                </Button>
                {project.demo && (
                  <Button 
                    variant="primary" 
                    size="sm"
                    as="a"
                    href={project.demo}
                    target="_blank"
                    icon="🚀"
                  >
                    Demo
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 border-2 border-blue-200 dark:border-blue-800">
        <div className="text-center max-w-2xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6">
            Sizning loyihangizni ham ko'rishni istaysizmi?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Men sizning g'oyalaringizni real loyihaga aylantirishda yordam berishdan mamnunman.
            Keling, birgalikda ajoyib natijalarga erishamiz!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              icon="💬"
              as="a"
              href="/contact"
            >
              Loyiha muhokamasi
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon="📞"
              as="a"
              href="/contact"
            >
              Bog'lanish
            </Button>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="text-center p-6" hoverable>
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {projects.length}+
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Bajargan loyihalar
          </div>
        </Card>
        <Card className="text-center p-6" hoverable>
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {projects.filter(p => p.category === "fullstack").length}+
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Full Stack loyihalar
          </div>
        </Card>
        <Card className="text-center p-6" hoverable>
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            100%
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Mijozlar mamnuniyati
          </div>
        </Card>
        <Card className="text-center p-6" hoverable>
          <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
            24/7
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Qo'llab-quvvatlash
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Portfolio;