import Navbar from "../components/navbar" 
import Footer from "../components/footer" 
import styles from "../styles/default.module.css"

export default function Default(props) {
    return ( 
        <div>
            <Navbar />
            <div className={styles.body}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
