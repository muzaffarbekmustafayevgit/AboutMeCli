import React from "react";

function ProjectDetails() {
  // Misol loyiha detali
  const project = {
    name: "AI Chat Platform",
    description:
      "React, Node.js va MongoDB yordamida yaratilgan interaktiv chat platformasi. Foydalanuvchilar ro‘yxatdan o‘tib, AI bilan suhbat qurishlari mumkin. Backend JWT orqali xavfsizlikni ta’minlaydi.",
    features: [
      "Foydalanuvchi autentifikatsiyasi (Login/Register)",
      "Real-time chat",
      "Admin panel orqali foydalanuvchilarni boshqarish",
      "Responsive UI",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    github: "https://github.com/yourusername/aichat",
    demo: "#",
    images: [
      "/images/project1-1.png",
      "/images/project1-2.png",
      "/images/project1-3.png",
    ],
  };

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">{project.name}</h1>

      <p className="text-gray-700 leading-relaxed">{project.description}</p>

      <div className="bg-white shadow p-5 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">Asosiy funksiyalar</h2>
        <ul className="list-disc ml-6 text-gray-700">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow p-5 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">Texnologiyalar</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Demo
          </a>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.name} screenshot ${idx + 1}`}
            className="rounded-lg shadow hover:scale-105 transition-transform"
          />
        ))}
      </div>

    </div>
  );
}

export default ProjectDetails;
