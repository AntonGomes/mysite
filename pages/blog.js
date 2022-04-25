import Default from "../components/default"
import Link from "next/link"
import {useState} from 'react'
import styles from "../styles/blog.module.css"
import {getAllPosts} from "../utils/index"
import {FaSearch} from "react-icons/fa"



export default function Blog(props) {
    const posts = props.posts
    const [input, setInput] = useState("")
    const [hide, setHide] = useState(true)
    
    let filteredPosts = posts.filter(post => post.title.includes(input))

    let h = hide ? "none" : "block"

    return (
        <Default>
        <div className={styles.body}>

        <div className={styles.search}>
            {/*Display search bar onClick*/}
            <button
                className={styles.button}
                onClick={() => {
                    setHide(!hide);
                }}>
            <FaSearch />
            </button> 

            <br />

            <input type="search" className={styles.input} style={{display: h}} onChange={e => setInput(e.target.value)} />
        </div>
        <div className={styles.title}>
            <ul>
            {
                filteredPosts.map(post => {
                    return (
                        <li>
                            <div className={styles.link}>
                                <Link href={post.slug.replace(".md", "")}>{post.title}</Link>
                                <p>{post.description}</p>
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
