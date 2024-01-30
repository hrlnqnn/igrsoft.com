import { useTranslation } from 'react-i18next';
import 'utils/18n';
import css from "./Footer.module.css";
import { Contacts } from 'components/Contacts/Contacts';


export const Footer = (contacts) => {

    const { t } = useTranslation();

    return (
        <section className={css.footer}>
            <div className={css.footer_content}>
                <p className={css.footer_copyright}> © {t("footer.copyright")} 2008 - {new Date().getFullYear()}
                </p>
            </div>
            <div className={css.footer_contacts}>
            <Contacts/>
            </div>
        </section>
    )
}