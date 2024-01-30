import React, { useState } from 'react';
import 'utils/18n';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import css from "./Header.module.css"
import logo from 'assets/Home/logo.png';
import "/node_modules/flag-icons/css/flag-icons.min.css";


export const Header = () => {

    const { i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const { t } = useTranslation();

    const [nav, setNav] = useState(false);


    return (
        <header className={css.header}>
            <div className={css.header_content} >
                <div className={css.header_logo}>
                    <NavLink to="/">
                        <img src={logo} height="18" alt="logo" />
                    </NavLink>
                </div>
                <nav className={css.header_navigation}>
                    <ul className={
                        nav ? [css.navigation_menu, css.active].join(' ') : [css.navigation_menu]
                    }>
                        <li onClick={() => setNav(!nav)}>
                            <NavLink className={css.navigation_link} to="/services">{t("navigation.services")}</NavLink>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                            <NavLink className={css.navigation_link} to="/portfolio">{t("navigation.portfolio")}</NavLink>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                            <NavLink className={css.navigation_link} to="/about">{t("navigation.about")}</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={css.navigation_localisation}>
                    <div className={css.localisation_icon} onClick={() => changeLanguage('en')}>
                        <span className="fi fi-gb"></span>
                    </div>
                    <div className={css.localisation_icon} onClick={() => changeLanguage('ua')}>
                        <span className="fi fi-ua"></span>
                    </div>
                </div>
            </div>
        </header>
    )
}