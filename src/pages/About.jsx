import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex dark:text-white  items-center justify-center px-4 py-20"
    >
      <div
        className="rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-xl lg:max-w-3xl xl:max-w-4xl
               bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50
               shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)]
               shadow-blue-500/10 dark:shadow-blue-500/20
               hover:shadow-[0_15px_50px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_15px_50px_rgba(59,130,246,0.25)]
               transition-all duration-500 ease-out"
      >
        {/* Animated Title */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 md:space-y-8 text-lg leading-relaxed">
          {/* Opening Statement with special styling */}
          <p
            className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 italic
                     bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900
                     p-4 md:p-6 rounded-xl border-l-4 border-blue-600 dark:border-blue-500
                     shadow-sm"
          >
            "I build digital products with patience, precision, and purpose."
          </p>

          {/* Introduction */}
          <div
            className="group p-4 dark:text-white  md:p-5 rounded-lg transition-all duration-300
                       hover:bg-gray-50/50 dark:hover:bg-gray-800/30"
          >
            <p className="transition-transform duration-300 group-hover:translate-x-2">
              My name is{" "}
              <span className="font-bold text-gray-900 dark:text-white text-lg">
                Muzaffarbek Mustafayev
              </span>
              . I am a Software Engineer and a third-year student at Samarkand
              State University.
            </p>
          </div>

          {/* Tech Stack */}
          <div
            className="bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-900/10
                       p-5 md:p-6 rounded-xl border border-blue-100 dark:border-blue-900/30
                       shadow-[0_5px_20px_rgba(59,130,246,0.1)] dark:shadow-[0_5px_25px_rgba(59,130,246,0.15)]
                       transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)]"
          >
            <p>
              I specialize in{" "}
              <span className="font-bold text-blue-700 dark:text-blue-400">
                React, Node.js, JavaScript, MongoDB
              </span>{" "}
              and enjoy crafting interfaces that are clean, fast, and intuitive.
              To me,{" "}
              <span className="italic">
                code is not noise — it is architecture
              </span>
              .
            </p>
          </div>

          {/* Experience */}
          <div className="relative p-5 md:p-6 rounded-xl overflow-hidden group">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 
                         dark:from-blue-400/5 dark:via-transparent dark:to-blue-400/5 
                         group-hover:from-blue-500/10 group-hover:to-blue-500/10 
                         transition-all duration-500"
            ></div>
            <p className="relative z-10">
              I have experience developing fullstack systems including
              authentication, role-based access control, RESTful APIs, and
              modern frontend applications. I care deeply about{" "}
              <span className="font-semibold">scalability</span> and
              <span className="font-semibold"> long-term maintainability</span>.
            </p>
          </div>

          {/* Interests */}
          <div
            className="p-4 md:p-5 rounded-lg border border-gray-100 dark:border-gray-700
                       shadow-inner dark:shadow-inner dark:shadow-gray-800/50"
          >
            <p>
              Outside of classic web development, I actively explore
              <span className="font-semibold text-gray-900 dark:text-white">
                {" "}
                cybersecurity, ethical hacking, and artificial intelligence
              </span>
              . Growth, for me, is a daily discipline — not a phase.
            </p>
          </div>

          {/* Goal - Highlighted */}
          <div
            className="relative p-6 md:p-8 rounded-2xl
                       bg-gradient-to-r from-blue-600/10 via-white to-blue-600/10
                       dark:from-blue-900/20 dark:via-gray-900 dark:to-blue-900/20
                       border-2 border-blue-200/50 dark:border-blue-800/30
                       shadow-lg dark:shadow-xl
                       transform transition-all duration-500 hover:scale-[1.01]"
          >
            <div
              className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 dark:bg-blue-500 
                         text-white text-sm font-semibold rounded-full"
            >
              Mission
            </div>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100 pt-2">
              My goal is simple but ambitious: to become an engineer whose work
              speaks clearly, lasts long, and solves real problems —{" "}
              <span className="text-blue-700 dark:text-blue-400">
                without unnecessary complexity
              </span>
              .
            </p>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="mt-10 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400">#</span>{" "}
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              "React",
              "Node.js",
              "JavaScript",
              "TypeScript",
              "MongoDB",
              "Express.js",
              "Tailwind CSS",
              "Next.js",
              "Git",
              "REST APIs",
              "Redux",
              "Firebase",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 md:px-4 md:py-2 
                         bg-white dark:bg-gray-800 
                         text-gray-800 dark:text-gray-200 
                         rounded-full text-sm font-medium
                         border border-gray-200 dark:border-gray-700
                         shadow-sm hover:shadow-md
                         hover:bg-blue-50 dark:hover:bg-blue-900/20
                         hover:border-blue-300 dark:hover:border-blue-700
                         hover:-translate-y-0.5
                         transition-all duration-300 cursor-default
                         group"
              >
                <span
                  className="group-hover:text-blue-600 dark:group-hover:text-blue-400 
                               transition-colors duration-300"
                >
                  {tech}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Subtle Glow Effect */}
        <div
          className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
                     dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 
                     blur-3xl rounded-full opacity-50"
        ></div>
      </div>

      {/* Add to your global CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default About;
