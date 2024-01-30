import { useEffect, useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import css from 'components/ScrollButton/ScrollButton.module.css';

export function ScrollButton() {
    const [showButton, setShowButton] = useState(true);
    const onScroll = () => {
        window.scrollY > 5 ? setShowButton(true) : setShowButton(false);
    };


    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    });

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <>
            <BsArrowUpShort className={showButton ? css.visible : css.hidden} onClick={scrollToTop} />
        </>
    )
};