import groq from 'groq'
import client from '@/utils/sanity/client'
import PostItem from '@/components/PostItem'
import GET_SITE_SETTINGS from '@/sanity/queries/GET_SITE_SETTINGS'
import GET_ALL_POSTS from '@/sanity/queries/GET_ALL_POSTS'

const Index = (props) => {

    const {
        posts,
        siteSettings
    } = props || {}

    return (
        <div>
            <div className="row">
                <div className="container">
                    <h1>Welcome to a blog!</h1>
                </div>
            </div>
            <div className="row">
                <div className="container">

                    {posts.length > 0 ? (
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post, n) => (
                                <li key={n} className="col-span-1">
                                    <PostItem
                                        post={post}
                                    />
                                </li>
                            ))}
                        </ul>
                    ) : ''}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`${GET_ALL_POSTS}`)
    const siteSettings = await client.fetch(groq`${GET_SITE_SETTINGS}`)

    return {
        props: {
            posts,
            siteSettings
        }
    }
}

export default Index