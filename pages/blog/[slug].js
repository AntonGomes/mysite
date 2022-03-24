import ReactMarkdown from 'react-markdown'
import {getPostSlugs, getPostBySlug} from '../../utils/index'

function Post(props) {

    return (
        <article>
            <h1>{props.post.title || ""}</h1>
           <ReactMarkdown children={props.post.content} />
        </article>
    )
}

export async function getStaticProps({params}) {
    console.log(params.slug)
    const post = await getPostBySlug(params.slug)
    return {props: {post: post}}
}

export async function getStaticPaths(){
    let slugs = getPostSlugs()
    return {
        paths: slugs.map(slug => '/blog/' + slug.replace('.md', '')),
        fallback: false,
    }
}

export default Post
