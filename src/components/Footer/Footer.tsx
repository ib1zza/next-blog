import React from 'react';
import s from "./page.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={s.container}>
            <div >
                Lorem ipsum dolor sit amet.
            </div>
            <div className={s.social}>
                <Image src={"/img/socials/vk.png"} alt={"vk"} width={15} height={15} className={s.icon}/>
                <Image src={"/img/socials/inst.png"} alt={"inst"} width={15} height={15} className={s.icon}/>
                <Image src={"/img/socials/twitter.png"} alt={"twitter"} width={15} height={15} className={s.icon}/>
                <Image src={"/img/socials/yt.png"} alt={"yt"} width={15} height={15} className={s.icon}/>
            </div>
        </footer>
    );
};

export default Footer;
