import matter from 'gray-matter';
import fs from 'fs';
import {join} from 'path'
import Link from "next/link"

export function getPostSlugs() {
    return fs.readdirSync("./blog");
}

export function getPostBySlug(slug) {
    const p = slug
    const path = join(process.cwd(), "/blog/" + p)
    const fileContent = fs.readFileSync(path, 'utf8')
    const meta = matter(fileContent)
    const post = meta.data
    const content = meta.content
    return {
        title: post.title,
        description: post.description,
        date: post.date,
        readTime: post.readTime,
        content: content,
        slug: "/blog/" + p,
   }
}

export async function getAllPosts() {
    const slugs = getPostSlugs()
    const posts = slugs.map(post => {
        const p = getPostBySlug(post)
        return p
    })
    return posts
}

