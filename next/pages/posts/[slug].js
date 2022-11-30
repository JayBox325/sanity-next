// Sanity
import client from '@/sanity/client'
import urlFor from '@/sanity/helpers/urlFor'
import groq from 'groq'
import GET_POST_BY_SLUG from '@/utils/sanity/queries/getPostBySlug'
import Image from 'next/image'
import Layout from '@/layout/index'
import PageBuilder from '@/components/_PageBuilder'

const Post = (props) => {

    const {
        post
    } = props || {}

    const {
        title,
        author,
        authorImage,
        categories,
        pageBuilder = []
    } = post || {}

    return (
        <Layout>
            <article>

                <div className="row bg-gray-100">
                    <div className="container text-center">
                        <h1 className="text-6xl font-medium">{title}</h1>
                        {author ? (
                            <div className="inline-flex mt-8 flex-row gap-4 items-center">
                                <div className="w-10 h-10">
                                    <Image
                                        src={urlFor(authorImage).width(80).height(80).url()}
                                        className="w-full h-full object-cover rounded-full"
                                        loading='lazy'
                                        width='80'
                                        height='80'
                                    />
                                </div>
                                <div className="">
                                    <p className="text-xl">{author}</p>
                                </div>
                            </div>
                        ) : ''}
                    </div>
                </div>
                        
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

            </article>
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

    // Send to 404 if no post exists
    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post
        }
    }
}

export default Post