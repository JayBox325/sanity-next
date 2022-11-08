// Sanity
import client from '@/sanity/client'
import ptComponents from '@/sanity/helpers/ptComponents'
import GET_PAGE_BY_SLUG from '@/utils/sanity/queries/getPageBySlug'
import { PortableText } from '@portabletext/react'
import groq from 'groq'
import { useRouter } from 'next/router'

const Page = (props) => {
    const router = useRouter()

    const {
        page
    } = props || {}

    const {
        title,
        body = []
    } = page || {}

    console.log('router', router.asPath)

    return (
        <article>
            <p>Page here</p>
            <h1>{title}</h1>

            <p>{page ? `"${title}" page found` : 'no page found'}</p>

            <PortableText
                value={body}
                components={ptComponents}
            />

        </article>
    )
}

export async function getStaticPaths() {
    const data = await client.fetch(groq`*[_type == "page" && defined(slug.current)][].slug.current`)

    console.log('paths', data)

    const paths = data
        .filter(({ slug }) => !!slug)
        .map(({ slug }) => `/${slug}`)

    // return {
    //     paths: paths.map((slug) => ({
    //         params: { slug: slug }
    //     })),
    //     fallback: true,
    // }

    return { paths, fallback: true }
}

export async function getStaticProps({params}) {
    console.log('❌ params', params)
    let slug = params.slug
    if (typeof params.slug == 'array') {
        slug = params.slug.join('/')
    }
    const page = await client.fetch(groq`${GET_PAGE_BY_SLUG}`, { slug: slug })

    // Send to 404 if no post exists
    // if (!page) {
    //     return {
    //         notFound: true,
    //     }
    // }

    return {
        props: {
            page
        }
    }
}

export default Page