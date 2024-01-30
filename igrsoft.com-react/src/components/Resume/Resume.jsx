import getsupport from "assets/About/getsupport.png"
import { useTranslation } from 'react-i18next';
import 'utils/18n';
import css from "components/Resume/Resume.module.css"
import ResumePdf from "assets/Files/resume.pdf"

export const Resume = () => {
    const { t } = useTranslation();
    return (
        <section className={css.resume}>
            <div className={css.resume_content}>
                <button className={css.resume_button}>
                    <a className={css.resume_link} href={ResumePdf}>{t("contact.contact_button")}
                    </a>
                </button>
                <img className={css.resume_img} src={getsupport} alt="Get support" />
            </div>
        </section>
    )
}