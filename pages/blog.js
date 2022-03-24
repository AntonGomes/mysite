import Default from "../components/default"
import Link from "next/link"
import styles from "../styles/blog.module.css"

export default function Blog() {
    return (
        <Default>
        <ul>
        <li><Link href="posts/How-When-And-Where-To-Quine"> How, When and Where to Quine </Link></li>
        </ul>
        </Default>
    )
}
