
import "./Header.css";
import "../../App.css"
import { useEffect , useState } from "react";
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import img from "../../img/muhamed.jpg";
export default function Header() {
const { t, i18n } = useTranslation();
const [coll , setcoll] = useState(false)
useEffect(() => {
if(coll){
    document.body.classList.add("light")
}else{
    document.body.classList.remove("light")
}
} , [coll])
function togetadd(){
setcoll((e) => !e)
}
const handlearape = () => {
 const newLanguage = i18n.language === 'ar' ? 'en' : 'ar';
  i18n.changeLanguage(newLanguage);
  document.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
};
return(
    <header className="main-header">
      <div className="header-logo-section">
        <img 
          src={img}  alt="Logo" className="logo-img" 
        />
        <p className="site-title">{t("muhamed albasha")}</p>
      </div>
      <nav className="header-nav-section">
        <ul className="nav-list">
          <li><a href="#about">{t('about')}</a></li>
          <li><a href="#projects">{t('projects')}</a></li>
          <li><a href="#skills">{t('skills')}</a></li>
          <li><a href="#contact">{t('contact')}</a></li>
        </ul>
      </nav>
      <div className="header-actions-section">
    <div onClick={handlearape} className="iconss"><LanguageIcon  ></LanguageIcon></div>
        <div onClick={togetadd} className="iconss" >{coll ?   <Brightness2Icon/> : <Brightness4Icon />}</div>
      </div>
    </header>
)
}