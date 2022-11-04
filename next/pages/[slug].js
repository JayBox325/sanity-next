// Sanity
import client from '@/sanity/client'
import ptComponents from '@/sanity/helpers/ptComponents'
import { PortableText } from '@portabletext/react'
import groq from 'groq'

const Page = (props) => {

    const {
        page
    } = props || {}

    const {
        title,
        body = []
    } = page || {}

    return (
        <article>
            <h1>{title}</h1>

            <PortableText
                value={body}
                components={ptComponents}
            />

        </article>
    )
}

const query = groq`*[_type == "page" && slug.current == $slug][0]{
    title,
    body
}`

export async function getStaticPaths() {
    const paths = await client.fetch(
        groq`*[_type == "page" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params
    const page = await client.fetch(query, { slug })

    // Send to 404 if no post exists
    if (!page) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            page
        }
    }
}

export default Page