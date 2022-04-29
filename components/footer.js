import styles from "../styles/footer.module.css"
import { FaGithub, FaTwitter, FaLinkedin, FaInbox } from "react-icons/fa"

export default function Footer(props) {
    return (
        <div className={styles.footer}>
        <ul className={styles.contacts}> 
            <li><a href = "https://github.com/AntonGomes"><FaGithub/></a></li>
            <li><a href = "https://twitter.com/AomlGomes"><FaTwitter/></a></li>  
            <li><a href = "mailto:aoml@gmail.com"><FaInbox/></a></li>  
            <li><a href = ><FaLinkedin/></a></li>
        </ul>
        </div>
    )
}


