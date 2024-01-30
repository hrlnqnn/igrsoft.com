import css  from "components/Contacts/Contacts.module.css"
import { FiSmartphone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FaViber } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export const Contacts = () => {
    return (
        <div className={css.contacts}>
            <ul className={css.contacts_list}>
            <li className={css.contacts_item}>
                <a className={css.contacts_link} href="tel:+380967187907">
                <FiSmartphone size={25} />
                </a>
            </li>
            <li className={css.contacts_item}>
                <a className={css.contacts_link} href="mailto:vitalii.parovishnyk@igrsoft.com">
                <AiOutlineMail size={25} />
                </a>
            </li>
            <li className={css.contacts_item}>
                <a className={css.contacts_link} href="https://t.me/vi_pa_ua">
                <LiaTelegramPlane size={25} />
                </a>
            </li>
            <li className={css.contacts_item}>
                <a className={css.contacts_link} href="viber://chat?number=%2B380967187907">
                <FaViber size={25} />
                </a>
            </li>
            <li className={css.contacts_item}>
                <a className={css.contacts_link} href="https://wa.me/380967187907">
                <AiOutlineWhatsApp size={25} />
                </a>
            </li>
            </ul>
        </div>
    );
};
