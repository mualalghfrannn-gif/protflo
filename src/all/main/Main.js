
import "./Main.css"
import DownloadIcon from '@mui/icons-material/Download';

import MailIcon from '@mui/icons-material/Mail';
import { useTranslation } from 'react-i18next';

export default function Main() {
    const { t } = useTranslation();
return(
   
<div className="dark">
<main  className="main-container">
     
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
<div className="all-about">
     <div className="about">
        <h1 > {t("hi, i am muhamed ali albasha")}</h1>
        <h1 className="front">{t("front-end developer")}</h1>
        <p>{t("i build fast, beautiful , and effective web applications")}</p>
        <div className="downloade">
            <button>
              
                <a href="/muhamed_albasha-cv.pdf" target="_blank" rel="noopener noreferrer">
                    <p> {t(" resume")}</p>
                    <span><DownloadIcon /></span>
                </a>
            </button>
{/* githabe */}
            <button>
                <a href="mailto:mualalghfrannn@gmail.com">
                    <p>{t("email")}</p>
                    <span><MailIcon/></span>
                </a>
            </button>
        </div>
     </div>
     </div>
     
    </main>
    </div>
  
)
}