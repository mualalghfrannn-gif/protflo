import "./Nav.css"
import "../../App.css"
import { useTranslation } from 'react-i18next';
export default function Nav(){
   const { t } = useTranslation();
    return(
        <div id="about" className="nav">
            <div className="all-nav">
          <div>
            <h1>{t("abouts")}</h1>
          </div>
          <div>
            <p>{t(`about_text`)}</p>
          </div>
          </div>
        </div>
    )
}


