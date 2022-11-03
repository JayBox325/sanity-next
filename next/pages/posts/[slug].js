// Sanity
import client from '../../utils/sanity/client'
import urlFor from '../../utils/sanity/helpers/urlFor'
import ptComponents from '../../utils/sanity/helpers/ptComponents'
import { PortableText } from '@portabletext/react'
import groq from 'groq'

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

    console.log('post', post)

    return (
        <article>
            <h1>{title}</h1>


            {authorImage && (
                <div>
                    <img
                        src={urlFor(authorImage)
                            .width(50)
                            .url()}
                    />
                </div>
            )}

            {author ? (
                <p>by {author}</p>
            ) : ''}

            {categories ? (
                <>
                    <p>Posted in: </p>
                    <ul>
                        {categories.map(category => {
                            <li key={category}>{category}</li>
                        })}
                    </ul>
                </>
            ) : ''}

            <PortableText
                value={body}
                components={ptComponents}
            />

        </article>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "author": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    body
}`

export async function getStaticPaths() {
    const paths = await client.fetch(
        groq`*[_type == "post" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params
    const post = await client.fetch(query, { slug })

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