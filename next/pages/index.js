import groq from 'groq'
import client from '@/utils/sanity/client'
import GridItem from '@/components/GridItem'
import GET_SITE_SETTINGS from '@/utils/sanity/queries/getSiteSettings'
import GET_ALL_POSTS from '@/utils/sanity/queries/getAllPosts'
import GET_ALL_PAGES from '@/utils/sanity/queries/getAllPages'
import Hero from '@/components/Hero'

const Index = (props) => {

    const {
        posts,
        pages,
        siteSettings
    } = props || {}

    return (
        <div>
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
                    <h1>Welcome to a blog!</h1>
                </div>
            </div>
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
        </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`${GET_ALL_POSTS}`)
    const pages = await client.fetch(groq`${GET_ALL_PAGES}`)
    const siteSettings = await client.fetch(groq`${GET_SITE_SETTINGS}`)

    return {
        props: {
            posts,
            pages,
            siteSettings
        }
    }
}

export default Index