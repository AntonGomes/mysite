import Default from "../components/default"
import styles from "../styles/pages.module.css"

export default function Home(props) {
    console.log(props.files)
    return (
        <Default>
        <div className = {styles.page}>
            <div className= {styles.intro}>
            </div>
        </div>
        </Default>
    )
}

