// Sanity
import client from '@/sanity/client'
import groq from 'groq'
import GET_POST_BY_SLUG from '@/utils/sanity/queries/getPostBySlug'
import GET_PAGES_STRUCTURE from '@/sanity/queries/getPagesStructure'
import Layout from '@/layout/index'
import PageBuilder from '@/components/_PageBuilder'
import Hero from '@/components/Hero'
import convertDataToTree from '@/utils/helpers/convertDataToTree'

const Post = (props) => {

    const {
        post,
        tree
    } = props || {}

    const {
        title,
        categories,
        pageBuilder = []
    } = post || {}

    return (
        <Layout
            seo={{
                title: title,
                description: 'SEO description'
            }}
            navigation={tree}
        >
            <Hero
                heading={title}
                body={<p>{post ? `"${title}" page found` : 'no page found'}</p>}
            />
                        
            <PageBuilder content={pageBuilder} />

            {categories ? (
                <div className="row bg-gray-200">
                    <div className="container">
                        <>
                            <p>Posted in: </p>
                            <ul>
                                {categories.map(category => {
                                    <li key={category}>{category}</li>
                                })}
                            </ul>
                        </>
                    </div>
                </div>
            ) : ''}
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        groq`*[_type == "post" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({ params: { slug} })),
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params
    const post = await client.fetch(GET_POST_BY_SLUG, { slug })
    const navigation = await client.fetch(groq`${GET_PAGES_STRUCTURE}`)

    // Send to 404 if no post exists
    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post,
            tree: convertDataToTree(navigation.tree)
        }
    }
}

export default Post