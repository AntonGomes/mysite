import matter from 'gray-matter';
import fs from 'fs';
import {join} from 'path'

export function getPostSlugs() {
    return fs.readdirSync("./blog");
}


export async function getPostBySlug(slug) {
   const p = slug + '.md'
   const path = join(process.cwd(), p)
   const fileContent = fs.readFileSync(path, 'utf8')
   const meta = matter(fileContent)
   const post = meta.data
   const content = meta.content
   return {
        title: post.title,
        content: content,
   }
}

export async function getAllPosts() {
    const slugs = getPostSlugs()
    const posts = slugs.map(post => {
        console.log(post)
        slug: post.replace('.md','')
    })
}
