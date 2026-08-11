
 import "./Skills.css"
 import "../../App.css"
 import { useTranslation } from 'react-i18next';
export default function Skills(){
 const { t } = useTranslation();
  const skillsCategories = [
    {
      title: "Core & Languages",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"]
    },
    {
      title: "Frameworks & Styling",
      skills: ["React.js", "Tailwind CSS", "Bootstrap" , "material ui"]
    },
    {
      title: "APIs & Developer Tools",
      skills: ["REST APIs", "Postman", "Git & GitHub", "npm / Vite"]
    },
    {
      title: "Engineering & Practices",
      skills: ["Clean Code", "Responsive Design", "Performance Optimization", "UI/UX Concepts"]
    }
  ];
  return (
    <section  className="skills-section" id="skills">
      <h2 className="skills-title">{t("skills")}</h2>
      <div className="skills-container">
        {skillsCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3 className="category-title"> {t(category.title)} :</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span className="skill-tag" key={skillIndex}>
                <span> / </span>  {t(skill)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}