import React from "react";
import Card from "../components/Card";

function Skills() {
  const skills = [
    { 
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "Next.js", level: 85, color: "from-black to-gray-800" },
        { name: "Vue.js", level: 75, color: "from-green-400 to-green-600" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-teal-600" },
      ]
    },
    { 
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 88, color: "from-gray-400 to-gray-600" },
        { name: "NestJS", level: 80, color: "from-red-500 to-red-700" },
        { name: "Python/Django", level: 75, color: "from-green-600 to-green-800" },
        { name: "GraphQL", level: 82, color: "from-pink-500 to-purple-600" },
      ]
    },
    { 
      category: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 87, color: "from-green-400 to-green-600" },
        { name: "PostgreSQL", level: 85, color: "from-blue-300 to-blue-500" },
        { name: "Redis", level: 78, color: "from-red-400 to-red-600" },
        { name: "Docker", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "Git & GitHub", level: 93, color: "from-orange-400 to-orange-600" },
      ]
    },
    { 
      category: "Soft Skills",
      skills: [
        { name: "Team Collaboration", level: 90, color: "from-purple-400 to-purple-600" },
        { name: "Problem Solving", level: 92, color: "from-green-400 to-green-600" },
        { name: "Communication", level: 88, color: "from-blue-400 to-blue-600" },
        { name: "Project Management", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "Client Relations", level: 87, color: "from-pink-400 to-pink-600" },
      ]
    }
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
          Texnik Ko'nikmalar
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Har bir loyiha yangi imkoniyat, har bir texnologiya esa yangi vosita.
          Men o'zlashtirgan ko'nikmalarimni quyida ko'rishingiz mumkin.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skills.map((category, catIndex) => (
          <Card key={catIndex} padding="lg" hoverable gradient>
            <Card.Header>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400">
                  {catIndex === 0 && "🎨"}
                  {catIndex === 1 && "⚙️"}
                  {catIndex === 2 && "🗄️"}
                  {catIndex === 3 && "🤝"}
                </span>
                {category.category}
              </h2>
            </Card.Header>
            
            <Card.Body>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Doimiy o'qish va o'rganish</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Texnologiyalar doimiy ravishda rivojlanmoqda. Men har kuni yangi 
              bilimlar olishga, konferensiyalarda qatnashishga va jamoaviy 
              loyihalarda ishtirok etishga harakat qilaman.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">GitHub Contribution</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Kurslar</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Texnologiyalar</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Skills;