import Default from "../components/default"
import styles from '../styles/contact.module.css'
import { FaGithub, FaTwitter, FaLinkedin, FaInbox } from "react-icons/fa"

export default function Contact(props) {
    return (
        <Default> 
        <div className={styles.body}>
        <h1>Get in touch</h1>
        <p>Check out my <a href="https://github.com/AntonGomes">GitHub</a> to see what I'm working on!</p>
        <p>Check out my <a href="https://twitter.com/AntonLGomes">Twitter</a> for constant complaints, comments and the like about (sometimes) interesting things!</p>
        <p>I'm looking for work! If you happen to be hiring (or know someone who is) drop me a message on <a href="https://www.linkedin.com/in/anton-gomes-377a97233/">LinkedIn</a> or any of my socials, or even better, <a href="mailto:aoml@gmail.com">email me directly!</a></p>
        </div>
        </Default>
    )
}
