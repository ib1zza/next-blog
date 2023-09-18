import Link from "next/link";
import s from "./page.module.css";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "About",
        url: "/about"
    },
    {
        id: 3,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 5,
        title: "Dashboard",
        url: "/dashboard"
    },
    {
        id: 6,
        title: "Portfolio",
        url: "/portfolio"
    }
]
const Navbar = () => {
    return (
        <nav className={s.container}>
            <Link href={'/'} className={s.logo}>MyApp</Link>
            <ul className={s.links}>
                {links.map((link) => (
                    <li key={link.id}>
                        <Link href={link.url}>{link.title}</Link>
                    </li>
                ))}
            </ul>

            <button className={s.logout}>Logout</button>
        </nav>
    );
};

export default Navbar;
