import { useEffect, useMemo, useState } from "react";
import css from "./Introduction.module.css"

export const Introduction = () => {
    const messages = useMemo(() => [
        '  Software ',
        '  Coding   ',
        'Development'], [])
    const [indexText, setIndexText] = useState(0);

    useEffect(() => {
        const ref = setInterval(() => {
            setIndexText((prev) => (prev + 1) % messages.length)
        }, 4000);

        return () => clearInterval(ref);
    }, [messages]);

    return (
        <div className={css.introduction_container}>
            {messages.map((message, index) => (
                <span key={index} className={`${css.introduction_box} ${css.letters_rotate}`}>{[...message].map((letter, indexLetter) => (
                    <b key={letter + index + indexLetter} className={indexText === index ? css.animation_in : css.animation_out}>{letter !== ' ' ? letter : '\u00A0'}</b>
                ))}</span>
            ),)}
        </div>
    )
}