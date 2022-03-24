import Link from 'next/link'
import styles from "../styles/header.module.css"
import { FaGithub, FaTwitter, FaInstagram, FaInbox } from "react-icons/fa"

export default function Header(props) {
    return (
        <div className = {styles.header}> 
            <div className = {styles.title1}>
                Anton
            </div>
            <div className = {styles.L}>L</div>
            <div className = {styles.title2}>Gomes</div>
            <div className = {styles.contacts}>
                <ul> 
                    <li>
                    <a href = "https://github.com/AntonGomes"> <FaGithub /> </a>
                    </li>
                    <li>
                    <a href = "https://twitter.com/AomlGomes"><FaTwitter /> </a>
                    </li>  
                </ul>
            </div>
        </div>
    )
}
