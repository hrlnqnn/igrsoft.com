import vitalii from "assets/About/vitalii.jpg"
import { useTranslation } from 'react-i18next';
import 'utils/18n';
import css from "components/Person/Person.module.css"
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineFile } from 'react-icons/ai';
import PortfolioPdf from "assets/Files/portfolio.pdf"
import ResumePdf from "assets/Files/resume.pdf"

export const Person = () => {

    const { t } = useTranslation();

    var textSize = 35

    return (
        <section className={css.person}>
            <div className={css.person_content}>
                <img className={css.person_img} alt="Vitalii Foto" src={vitalii} />
                <div className={css.person_info}>
                    <h2 className={css.person_name}>{t("about.name")}</h2>
                    <p className={css.person_experience}>{t("about.experience")}</p>
                    <p className={css.person_description}>{t("about.description")}</p>
                    <ul className={css.person_list}>
                        <li className={css.person_link}>
                            <a href="https://github.com/IGRSoft">
                                <BsGithub size={textSize} />
                            </a>
                        </li>
                        <li className={css.person_link}>
                            <a href="https://www.linkedin.com/in/vitaliip/">
                                <BsLinkedin size={textSize} />
                            </a>
                        </li>
                        <li className={css.person_link}>
                            <a href={PortfolioPdf} ><AiOutlineFile size={textSize} /></a>

                        </li>
                        <li className={css.person_link}>
                            <a href={ResumePdf}>
                                <AiOutlineFile size={textSize} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}