import React from 'react';
import './Project.css'; // استدعاء ملف الـ CSS العادي
import "../../App.css"
export default function Project() {
  // 1. مصفوفة البيانات (Array of Objects) فوق الـ return
  const projectsData = [
    {
      id: 1,
      title: "To Do List App",
      description: "A comprehensive task management app with real-time synchronization, priority levels, and persistent local storage for efficient productivity.",
      image: "src/img/muhame.jpg", // ضع رابط صورة مشروعك هنا
      techStack: ["HTML", "JavaScript", "CSS Tailwind"], // أزرار التقنيات داخل الكائن
      projectLink: "#"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "A real-time weather tracking application providing accurate forecasts, location search, and interactive weather icons.",
      image: "https://via.placeholder.com/600x350",
      techStack: ["React", "TypeScript", "CSS3", "REST API"],
      projectLink: "#"
    },
     {
      id: 3,
      title: "Weather Dashboard",
      description: "A real-time weather tracking application providing accurate forecasts, location search, and interactive weather icons.",
      image: "https://via.placeholder.com/600x350",
      techStack: ["React", "TypeScript", "CSS3", "REST API"],
      projectLink: "#"
    }
  ];

  return (
    <div id='projects' className='all'>
        <h2 className='h2'>projects</h2>
    <div className="projects-container">
      {/* 2. عمل map للمصفوفة لعرض الكروت ديناميكياً */}
      {projectsData.map((project) => (
        <div key={project.id} className="project-card">
          
          {/* صورة المشروع */}
          <div className="card-image-wrapper">
            <img 
              src={project.image} 
              alt={project.title} 
              className="card-image"
            />
          </div>

          {/* محتوى الكارت */}
          <div className="card-content">
            {/* عنوان المشروع */}
            <h3 className="project-title">{project.title}</h3>

            {/* الوصف */}
            <p className="project-description">{project.description}</p>

            {/* أزرار التقنيات (map داخلي) */}
            <div className="tech-stack-container">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* رابط فتح المشروع */}
            <a 
              href={project.projectLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              Open project <span className="arrow">→</span>
            </a>
          </div>

        </div>
      ))}
    </div>
    </div>
  );
}