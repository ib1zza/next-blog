import React from 'react';
import s from "./page.module.css"
import Link from "next/link";

interface Props {
    text: string;
    url: string;
}

const Button = ({text, url}: Props) => {
    return (
        <Link href={url}>
            <button className={s.container}>
                {text}
            </button>
        </Link>
    );
};

export default Button;
