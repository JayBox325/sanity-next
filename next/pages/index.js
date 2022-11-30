import groq from 'groq'
import client from '@/sanity/client'
import GridItem from '@/components/GridItem'
import GET_PAGES_STRUCTURE from '@/sanity/queries/getPagesStructure'
import GET_ALL_POSTS from '@/sanity/queries/getAllPosts'
import Hero from '@/components/Hero'

import convertDataToTree from '@/helpers/convertDataToTree'
import Layout from '@/layout/index'
import GET_ALL_PAGES from '@/utils/sanity/queries/getAllPages'

const Index = (props) => {

    const {
        posts,
        pages,
        tree,
    } = props || {}

    return (
        <Layout navigation={tree}>
            <Hero
                brow="Welcome!"
                heading="Sanity + Next.JS bootstrap"
                body={<p>Built to make building Next.js websites with Sanity quicker...</p>}
                buttons={[
                    {
                        label: 'Internal Button URL',
                        href: '/about'
                    },
                    {
                        label: 'External Button URL (TBC)',
                        href: 'https://google.com'
                    },
                    {
                        label: 'onClick Event',
                        onClick: (()=>{alert('clicked this button')})
                    },
                    {
                        label: 'URL + onClick',
                        href: '/about',
                        onClick: (()=>{alert('clicked this button')})
                    }
                ]}
            />

            <div className="row">
                <div className="container">

                    <h2 className="mb-7">Posts</h2>

                    {posts.length > 0 ? (
                        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post, n) => (
                                <li key={n} className="col-span-1">
                                    <GridItem
                                        item={post}
                                    />
                                </li>
                            ))}
                        </ul>
                    ) : ''}
                    
                </div>
                <div className="row">
                    <div className="container">
                    
                        <h2 className="mb-7">Pages</h2>

                        {pages.length > 0 ? (
                            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {pages.map((page, n) => (
                                    <li key={n} className="col-span-1">
                                        <GridItem
                                            item={page}
                                        />
                                    </li>
                                ))}
                            </ul>
                        ) : ''}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`${GET_ALL_POSTS}`)
    const pages = await client.fetch(groq`${GET_ALL_PAGES}`)
    const navigation = await client.fetch(groq`${GET_PAGES_STRUCTURE}`)

    return {
        props: {
            posts,
            pages,
            tree: convertDataToTree(navigation.tree)
        }
    }
}

export default Index