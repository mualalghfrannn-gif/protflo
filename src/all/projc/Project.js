import React from 'react';
import './Project.css'; // استدعاء ملف الـ CSS العادي
import "../../App.css"
export default function Project() {
  // 1. مصفوفة البيانات (Array of Objects) فوق الـ return
  const projectsData = [
    {
      id: 1,
      title: "coffee shop website",
      description:  "A responsive and elegant Coffee Shop website featuring menu showcases, interactive order UI, and smooth layout navigation.",
      image: "src/img/muhame.jpg", 
      techStack: ["HTML5","css3" ,"JavaScript","react.js", "CSS Tailwind"], 
      projectLink: "https://mualalghfrannn-gif.github.io/coffe/"
    },
    {
      id: 2,
      title: "Albasha_E-commerce",
      description: "A modern, responsive E-commerce web application built with react.js featuring interactive product catalog and cart management ",
      image: "/src/img/muhame.jpg",
      techStack: ["html", "css3", "javascript(ES6+)","react.js", "REST API","material ui","responsiv" ],
      projectLink: " https://mualalghfrannn-gif.github.io/albasha-store-react/"
    },
     {
      id: 3,
      title: "React Admin Dashboard",
      description: "A modern, responsive admin dashboard built with React featuring interactive charts and a clean UI for seamless data management. ",
      image: "https://via.placeholder.com/600x350",
      techStack: ["html", "css3", "javascript(ES6+)","react.js","material ui","responsiv" ],
      projectLink: " https://mualalghfrannn-gif.github.io/react-admin-dashboard/"
    },
     {
      id: 4,
      title: "Reda Store - E-Commerce Web App",
      description: "A modern, responsive e-commerce storefront featuring product categorization, promotional banners, and an interactive shopping cart system.",
      image: "https://via.placeholder.com/600x350",
      techStack: ["html", "css3", "javascript(ES6+)","react.js","material ui","responsiv" ],
      projectLink: " https://muhamedalbasha028-lgtm.github.io/brojects/"
    },
    
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