import Link from "next/link"
import styles from "../styles/navbar.module.css"
export default function Navbar(props) {
    return (
        <ul className={styles.navbar}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
        </ul>
    )
}

