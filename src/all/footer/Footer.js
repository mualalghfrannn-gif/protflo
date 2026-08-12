

   




import "../../App.css"
import logo from "../../img/muhamed.jpg"
import { useTranslation } from 'react-i18next';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

export default function Contact() {
 const { t } = useTranslation();



  const contactData = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      value: '+963 997 591 670', // ضع رقمك هنا
      link: 'https://wa.me/963997591670', // رابط الواتساب المباشر
      icon: <WhatsAppIcon className="icon whatsapp-icon" />
    },
    {
      id: 'gmail',
      name: 'Gmail',
      value: 'mualalghfrannn@gmail.com',
      link: 'mailto:mualalghfrannn@gmail.com',
      icon: <EmailIcon className="icon gmail-icon" />
    },
    {
      id: 'github',
      name: 'GitHub',
      value: 'muhamed-albasha',
      link: 'https://github.com/mualalghfrannn-gif',
      icon: <GitHubIcon className="icon github-icon" />
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      value: 'Muhamed Albasha', 
      link: 'https://www.linkedin.com/in/muhamed-albasha-3552203b1?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      icon: <LinkedInIcon className="icon linkedin-icon" />
    }
  ];

  return (

<div id="contact" className='footer-all'>
{/* one */}
<div className='footer_h'>
    <h3>contact</h3>
</div>
{/* tow */}
    <div className="contact-container">
      <div className="contact-grid">
        {contactData.map((item) => (
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={item.id} 
            className={`contact-card ${item.id}`}
          >
            <div className="icon-wrapper">
              {item.icon}
            </div>
            <div className="contact-info">
              <h3 className="contact-name">{item.name}</h3>
              <p className="contact-value">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>

{/* thre */}






<div className="color-footer-and-for">






    <footer className="footer-container-one">
      <div className="footer-content-one">
        
        {/* العمود الأول: الشعار والاسم مع النبذة */}
        <div className="footer-col-one brand-col-one">
          <div className="brand-header-one">
            <img src={logo} alt="Logo" className="footer-logo-one" />
            <h2 className="brand-name-one">Muhamed</h2>
          </div>
          <p className="brand-desc-one">
            {t("footer_desc") }
          </p>
        </div>

        {/* العمود الثاني: الروابط السريعة */}
     
        <div className="footer-col-one links-col-one">
          <h3 className="col-title-one">{t("quick_links") }</h3>
          <ul className="footer-links-one">
            <li><a href="#about">{t("about") || "About Me"}</a></li>
            <li><a href="#projects">{t("projects") || "My Projects"}</a></li>
            <li><a href="#skills">{t("skills") || "My Skills"}</a></li>
            <li><a href="#contact">{t("contact") || "Contact Me"}</a></li>
          </ul>
        </div>

        {/* العمود الثالث: أزرار التواصل */}
        <div className="footer-col-one social-col-one">
          <h3 className="col-title-one">{t("follow_me") || "Follow Me"}</h3>
          <div className="social-icons-one">
            <a href="https://github.com/mualalghfrannn-gif" target="_blank" rel="noopener noreferrer" className="social-btn-one linkedin-one">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/muhamed-albasha-3552203b1?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="social-btn-one github-one">
              <LinkedInIcon />
            </a>
            <a href="https://wa.me/963997591670" target="_blank" rel="noopener noreferrer" className="social-btn-one whatsapp-one">
              <WhatsAppIcon />
            </a>
          </div>
       
        </div>

      </div>
    </footer>

<div className="ahfor">
    <p>{t("als")}</p>
</div>





</div>



</div>
  );
}
















  