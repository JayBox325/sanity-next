// Sanity
import Layout from '@/components/_Layout'
import client from '@/sanity/client'
import convertDataToTree from '@/utils/helpers/convertDataToTree'
import GET_PAGES_STRUCTURE from '@/sanity/queries/getPagesStructure'
import GET_PAGE_BY_SLUG from '@/utils/sanity/queries/getPageBySlug'
import groq from 'groq'
import Hero from '@/components/Hero'

const Page = (props) => {

    const {
        page,
        tree
    } = props || {}

    const {
        title,
        body = []
    } = page || {}

    return (
        <Layout
            seo={{
                title: title,
                description: 'SEO description'
            }}
            navigation={tree}
        >
            <Hero
                // brow="Welcome!"
                heading={title}
                body={<p>{page ? `"${title}" page found` : 'no page found'}</p>}
            />
        </Layout>
    )
}

export async function getStaticPaths() {
    const data = await client.fetch(groq`*[_type == "page" && defined(slug.current)][].slug.current`)

    const paths = data
        .filter(({ slug }) => !!slug)
        .map(({ slug }) => `/${slug}`)

    return { paths, fallback: true }
}

export async function getStaticProps({params}) {
    let slug = params.slug
    const page = await client.fetch(groq`${GET_PAGE_BY_SLUG}`, {
        slug: slug
    })

    const navigation = await client.fetch(groq`${GET_PAGES_STRUCTURE}`)

    // Send to 404 if no page exists
    if (!page) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            page,
            tree: convertDataToTree(navigation.tree)
        }
    }
}

export default Page