import { NavLink } from 'react-router-dom';
import css from 'components/Badge/Badge.module.css';


export const Badge = () => {
    return (
        <>
            <NavLink to="https://bank.gov.ua/ua/about/humanitarian-aid-to-ukraine">
                <div title="We stand with Ukraine" className={css.badge}></div>
            </NavLink>
        </>
    )
}