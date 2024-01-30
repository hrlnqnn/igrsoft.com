import css from "components/Service/Service.module.css"
import { useTranslation } from 'react-i18next';
import 'utils/18n';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { IoPulseOutline } from 'react-icons/io5';
import { IoEarth } from 'react-icons/io5';
import { IoArrowUpCircleOutline } from 'react-icons/io5';
import { Contacts } from 'components/Contacts/Contacts';



export const Service = ({ classSection, classItem, classOverlay }) => {

    const { t } = useTranslation();

    return (
        <section className={classSection ? `${css.services} ${classSection}` : css.services}>
            <div className={css.services_content}>
                <ul className={css.services_list}>
                    <li className={classItem ? `${css.services_item} ${classItem}` : css.services_item}>
                        <LiaClipboardListSolid size={50} />
                        <h3 className={css.services_title}>{t("services.architecture")}</h3>
                        <p className={css.services_description}>{t("services.architecture_description")}</p>
                        <div className={classOverlay ? `${css.overlay} ${classOverlay}` : css.overlay}>
                            <div className={css.overlay_content}>
                                <p className={css.overlay_text}>{t("services.order")}</p>
                                    <Contacts/>
                            </div>
                        </div>
                    </li>
                    <li className={classItem ? `${css.services_item} ${classItem}` : css.services_item}>
                        <IoMdCheckmarkCircleOutline size={50} />
                        <h3 className={css.services_title}>{t("services.design")}</h3>
                        <p className={css.services_description}>{t("services.design_description")}</p>
                        <div className={classOverlay ? `${css.overlay} ${classOverlay}` : css.overlay}>
                            <div className={css.overlay_content}>
                                <p className={css.overlay_text}>{t("services.order")}</p>
                                    <Contacts/>
                            </div>
                        </div>
                    </li>
                    <li className={classItem ? `${css.services_item} ${classItem}` : css.services_item}>
                        <IoSpeedometerOutline size={50} />
                        <h3 className={css.services_title}>{t("services.performance")}</h3>
                        <p className={css.services_description}>{t("services.performance_description")}</p>
                        <div className={classOverlay ? `${css.overlay} ${classOverlay}` : css.overlay}>
                            <div className={css.overlay_content}>
                                <p className={css.overlay_text}>{t("services.order")}</p>
                                    <Contacts/>
                            </div>
                        </div>
                    </li>
                    <li className={classItem ? `${css.services_item} ${classItem}` : css.services_item}>
                        <IoPulseOutline size={50} />
                        <h3 className={css.services_title}>{t("services.friendly")}</h3>
                        <p className={css.services_description}>{t("services.friendly_description")}</p>
                        <div className={classOverlay ? `${css.overlay} ${classOverlay}` : css.overlay}>
                            <div className={css.overlay_content}>
                                <p className={css.overlay_text}>{t("services.order")}</p>
                                    <Contacts/>
                            </div>
                        </div>
                    </li>
                    <li className={classItem ? `${css.services_item} ${classItem}` : css.services_item}>
                        <IoEarth size={50} />
                        <h3 className={css.services_title}>{t("services.localisation")}</h3>
                        <p className={css.services_description}>{t("services.localisation_description")}</p>
                        <div className={classOverlay ? `${css.overlay} ${classOverlay}` : css.overlay}>
                            <div className={css.overlay_content}>
                                <p className={css.overlay_text}>{t("services.order")}</p>
                                    <Contacts/>
                            </div>
                        </div>
                    </li>
                    <li className={classItem ? `${css.services_item} ${classItem}` : css.services_item}>
                        <IoArrowUpCircleOutline size={50} />
                        <h3 className={css.services_title}>{t("services.upgrage")}</h3>
                        <p className={css.services_description}>{t("services.upgrage_description")}</p>
                        <div className={classOverlay ? `${css.overlay} ${classOverlay}` : css.overlay}>
                            <div className={css.overlay_content}>
                                <p className={css.overlay_text}>{t("services.order")}</p>
                                    <Contacts/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}