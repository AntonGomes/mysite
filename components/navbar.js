import Link from "next/link"
import { useRouter } from "next/router";
import styles from "../styles/navbar.module.css"
import { FaGithub, FaTwitter, FaLinkedin, FaInbox } from "react-icons/fa"


export default function Navbar(props) {
    const router = useRouter();
    return (
        <div className={styles.header}>
        
            <ul className={styles.nav}>
                <li className={router.pathname == "/" ? styles.active : ""}><Link href="/">Anton Gomes</Link></li>
                <li className={router.pathname == "/blog" ? styles.active : ""}><Link href="/blog">Blog</Link></li>
                <li className={router.pathname == "/bordle" ? styles.active : ""}><Link href="/bordle">Bordle</Link></li>
                <li className={router.pathname == "/thought" ? styles.active : ""}><Link href="/thought">A Shower Thought</Link></li>
            </ul> 

            <div className={styles.contact}> 
        Contact
            </div>

        </div>
    )
}
