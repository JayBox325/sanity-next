// Sanity
import client from '@/sanity/client'
import urlFor from '@/sanity/helpers/urlFor'
import ptComponents from '@/sanity/helpers/ptComponents'
import { PortableText } from '@portabletext/react'
import groq from 'groq'
import GET_POST_BY_SLUG from '@/utils/sanity/queries/getPostBySlug'

const Post = (props) => {

    const {
        post
    } = props || {}

    const {
        title,
        author,
        authorImage,
        categories,
        body = []
    } = post || {}

    return (
        <article>
            <div className="row">
                <div className="container text-center">
                    <h1 className="text-6xl font-medium">{title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="container">

                    <div className="grid grid-cols-12">
                        <div className="col-span-5">
                            {author ? (
                                <div className="sticky top-12 flex flex-row gap-8 items-center">
                                    <div className="w-24 h-24">
                                        <img
                                            className="w-full h-full object-cover rounded-full"
                                            src={urlFor(authorImage)
                                                .width(200)
                                                .url()}
                                        />
                                    </div>
                                    <div className="">
                                        <p className="text-xl">{author}</p>
                                    </div>
                                </div>
                            ) : ''}
                        </div>

                        <div className="col-span-7">
                            <div className="w-content">
                                <PortableText
                                    value={body}
                                    components={ptComponents}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

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
    // if (!post) {
    //     return {
    //         notFound: true,
    //     }
    // }

    return {
        props: {
            post
        }
    }
}

export default Post