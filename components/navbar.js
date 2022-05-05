import Link from "next/link"
import { useRouter } from "next/router";
import styles from "../styles/navbar.module.css"


export default function Navbar(props) {
    const router = useRouter();
    return (
        <div className={styles.header}>
        
            <ul className={styles.nav}>
                <li className={router.pathname == "/" ? styles.active : ""}><Link href="/">Anton Gomes</Link></li>
                <li className={router.pathname == "/blog" ? styles.active : ""}><Link href="/blog">Posts</Link></li>
                <li className={router.pathname == "/bordle" ? styles.active : ""}><Link href="/bordle">Bordle</Link></li>
                <li className={router.pathname == "https://kk.org/thetechnium/103-bits-of-advice-i-wish-i-had-known/" ? styles.active : ""}><a href="https://kk.org/thetechnium/103-bits-of-advice-i-wish-i-had-known/">Something Cool?</a></li>
                <li className={router.pathname == "https://www.autodidacts.io/what-game-are-you-playing/" ? styles.active : ""}><a href="https://www.autodidacts.io/what-game-are-you-playing/">Something Cool 2?</a></li>
            </ul> 

            <div className={styles.contact}> 
                <div className={router.pathname == "/thought" ? styles.active : ""}>
        <Link href="/contact">Contact</Link>
                </div>
            </div>

        </div>
    )
}
