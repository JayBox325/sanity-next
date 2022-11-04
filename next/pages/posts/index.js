import Link from 'next/link'
import groq from 'groq'
import client from '@/sanity/client'
import GET_ALL_POSTS from '@/sanity/queries/GET_ALL_POSTS'

const Posts = (props) => {

    const {
        posts
    } = props || {}

    return (
        <div>
            <h1>Page full of posts</h1>
            {posts.length > 0 ? (
                <>
                    {posts.map(
                        ({ _id, title = '', slug = '', publishedAt = '' }) => slug && (
                            <li key={_id}>
                                <Link href="/posts/[slug]" as={`/posts/${slug.current}`}>{title}</Link>
                                ({new Date(publishedAt).toDateString()})
                            </li>
                        )
                    )}
                </>
            ) : (
                <p>No posts exist</p>
            )}

        </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`${GET_ALL_POSTS}`)
    return {
        props: {
            posts
        }
    }
}

export default Posts;