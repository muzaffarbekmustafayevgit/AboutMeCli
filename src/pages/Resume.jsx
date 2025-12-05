
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code, 
  ExternalLink,
  Download,
  Globe,
  Linkedin,
  Github,
  Award,
  Calendar,
  ChevronRight,
  Link2,
  Youtube
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { socialMedias } from "../data/socialMedias";
const Resume = () => {


  const downloadResume = () => {
    alert("Resume downloaded! In a real app, this would trigger a PDF download.");
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Theme Toggle */}
 
<div className="w-full hidden flex justify-end pr-4">
  <ThemeToggle />
</div>
      {/* Main Container */}
      <div className="max-w-4xl mx-auto mt-12 px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Muzaffarbek Mustafayev
              </h1>
              <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-400 mb-4">
                <Briefcase size={20} />
                <span>Fullstack Developer</span>
                <span className="mx-2">•</span>
                <Code size={20} />
                <span>React & Node.js Expert</span>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-4">
                <a href="mailto:muzaffarbekmustafayev@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <Mail size={18} />
                  <span className="text-sm">muzaffarbekmustafayev@gmail.com</span>
                </a>
                <a href="tel:+998944755100" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <Phone size={18} />
                  <span className="text-sm">{socialMedias.phone.path}</span>
                </a>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <MapPin size={18} />
                  <span className="text-sm">Samarkand, Uzbekistan</span>
                </div>
              </div>
            </div>
            
            {/* Download Button */}
            <button
              onClick={downloadResume}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all hover:shadow-lg"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a href={socialMedias.linkedin.path} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href={socialMedias.git_hub.path} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <Github size={18} />
              <span className="text-sm">GitHub</span>
            </a>
            <a href={socialMedias.youtube.path} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <Youtube size={18} />
              <span className="text-sm">You tube</span>
            </a>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Award size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold">Professional Summary</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Experienced Software Engineer with 2+ years of expertise in React, Node.js, and fullstack development. 
                Passionate about building efficient, scalable web applications with modern architectures. 
                Strong problem-solving skills and a continuous learner who stays updated with the latest technologies.
              </p>
            </section>

            {/* Experience */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Briefcase size={24} className="text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="absolute left-[7px] top-6 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-1">Software Engineer</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">Samarkand State University</span>
                      <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} />
                        2023 – Present
                      </span>
                    </div>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                        <span>Developed scalable web applications using React, Node.js, and MongoDB</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                        <span>Implemented JWT authentication and role-based access control systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                        <span>Collaborated with cross-functional teams using Agile methodologies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <Code size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">Projects</h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold">AI Chat Platform</h3>
                    <a href="#" className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      Live Demo <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Fullstack chat application with real-time messaging, AI responses, and role-based authentication.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">React</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">Node.js</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">MongoDB</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Socket.io</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold">Face ID Login System</h3>
                    <a href="#" className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      View Code <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Secure authentication system using facial recognition technology with Node.js backend.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">Node.js</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">Face-api.js</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Express</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">JWT</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                  <Code size={24} className="text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold">Skills</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-lg text-gray-700 dark:text-gray-300">Frontend</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">React</span>
                    <span className="px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">Redux</span>
                    <span className="px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">React Router</span>
                    <span className="px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">TailwindCSS</span>
                    <span className="px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">TypeScript</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-lg text-gray-700 dark:text-gray-300">Backend</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300">Node.js</span>
                    <span className="px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300">Express</span>
                    <span className="px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300">MongoDB</span>
                    <span className="px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300">MySQL</span>
                    <span className="px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300">REST API</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-lg text-gray-700 dark:text-gray-300">Tools & Others</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">Git</span>
                    <span className="px-3 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">JWT</span>
                    <span className="px-3 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">Agile</span>
                    <span className="px-3 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">Docker</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                  <GraduationCap size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-indigo-500"></div>
                  
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold mb-1">Bachelor in Software Engineering</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Samarkand State University</span>
                      <span>•</span>
                      <span>2022 – Present</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Currently pursuing degree with focus on modern web technologies, algorithms, and software architecture.
                  </p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-6">Languages</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Uzbek</span>
                    <span className="text-gray-500 dark:text-gray-400">Native</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">English</span>
                    <span className="text-gray-500 dark:text-gray-400">Fluent</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Russian</span>
                    <span className="text-gray-500 dark:text-gray-400">Professional</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </section>

          
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Muzaffarbek Mustafayev. All rights reserved.</p>
          <p className="mt-1">Last updated: December 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;