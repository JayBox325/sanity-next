import Link from 'next/link'
import groq from 'groq'
import client from '@/sanity/client'
import GET_ALL_POSTS from '@/utils/sanity/queries/getAllPosts'
import GET_PAGES_STRUCTURE from '@/sanity/queries/getPagesStructure'
import Hero from '@/components/Hero'
import Layout from '@/components/_Layout'
import convertDataToTree from '@/utils/helpers/convertDataToTree'

const Posts = (props) => {

    const {
        posts,
        tree
    } = props || {}

    return (
        <Layout
            seo={{
                title: 'All posts',
                description: 'SEO description'
            }}
            navigation={tree}
        >
            <Hero
                heading='All posts'
            />
            <section className="row">
                <div className="container">
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
            </section>

        </Layout>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`${GET_ALL_POSTS}`)
    const navigation = await client.fetch(groq`${GET_PAGES_STRUCTURE}`)

    return {
        props: {
            posts,
            tree: convertDataToTree(navigation.tree)
        }
    }
}

export default Posts;