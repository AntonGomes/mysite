import Default from "../../components/default"
import styles from "../../styles/posts.module.css"
import ReactMarkdown from 'react-markdown'
import {getPostSlugs, getPostBySlug} from '../../utils/index'
//import styles from '../styles/[slug].module.css'

function Post(props) {
    return (
        <Default>
        <div className={styles.article}>
            <div className={styles.title}>{props.post.title || ""}</div>
            <div className={styles.children}>
                <ReactMarkdown children={props.post.content}/>
            </div>
        </div>
        </Default>
    )
}

export async function getStaticProps({params}) {
    console.log(params.slug)
    const post = await getPostBySlug(params.slug + ".md")
    return {props: {post: post}}
}

export async function getStaticPaths(){
    let slugs = getPostSlugs()
    console.log(slugs)
    return {
        paths: slugs.map(slug => '/blog/' + slug.replace('.md', '')),
        fallback: false,
    }
}
export default Post
