import { useTranslation } from 'react-i18next';
import 'utils/18n';
import css from "components/Intro/Intro.module.css";


export const Intro = () => {

    const { t } = useTranslation();

    return (
        <section className={css.intro}>
            <div className={css.intro_banner} >
                <div className={css.intro_content} >
                    <h1 className={css.intro_title}>{t("intro.title")}{t("intro.title2")}{t("intro.title3")}</h1>
                    <h5 className={css.intro_text}>{t("intro.text")} macOS / iOS / ipadOS / watchOS / tvOS</h5>
                </div>
            </div>
        </section>
    )
}