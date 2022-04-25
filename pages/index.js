import Default from "../components/default"
import styles from "../styles/pages.module.css"
import {getAllPosts} from "../utils/index"
import Link from "next/link"

function shuffle(arr) {
    let i = arr.length, r
    while (i!= 0) {
        r = Math.floor(Math.random() * i)
        i--
        [arr[i],arr[r]] = [arr[r], arr[i]]
    }
    return arr
}

export default function Home(props) {
    const nposts = props.posts
    const featured = shuffle(nposts.slice(0,3))
        return (
        <Default>
            <div className={styles.page}>
            <h1 className={styles.head}>Welcome!</h1>
            <p className = {styles.intro}>
                Hey! My name is Anton and welcome to my site. I am an aspiring programer and currently study Computer Science and Mathematics at the University of Edinburgh. 
                <br/>
                <br/>
                As I learn and progress I'll be sharing anything that seems worthwhile so those who wish to can follow along. 
                <br/>
                <br/>
                Keep in touch! My contacts are available in the top right of the page.
            </p>
            <div className={styles.title}>
            <h2 className={styles.head2}>Featured Thoughts</h2>
                <ul>
            {
                featured.map(post => {
                    return (
                        <li>
                            <div className={styles.link}>
                                <Link href={post.slug.replace(".md", "")}>{post.title}</Link>
                            </div>
                        </li>
                    )

                })
            }
                </ul>
            </div>
            </div>
        </Default>
    )
}

export async function getStaticProps({params}) {
    const posts = await getAllPosts()
    return {props: {posts: posts}}
}
