import css from 'components/About/About.module.css';
import fav from 'assets/Home/fav.png';
import { useTranslation } from 'react-i18next';
import 'utils/18n';


export const About = () => {

    const { t } = useTranslation();

    return (
        <section className={css.about}>
            <div className={css.about_content}>
                <img alt='logo' src={fav} />
                <div className={css.about_block}>
                    <h2 className={css.about_title}>{t("about_company.title")}</h2>
                    <p className={css.about_text}>{t("about_company.description")}</p>
                </div>
            </div>
        </section>
    )
}