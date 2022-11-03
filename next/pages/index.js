import Link from 'next/link'
import groq from 'groq'
import client from '../utils/sanity/client'
import PostItem from '../components/PostItem'

const Index = (props) => {

    const {
        posts
    } = props || {}

    console.log('posts', posts)

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

const query = groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc)`

export async function getStaticProps() {
    const posts = await client.fetch(query)
    return {
        props: {
            posts
        }
    }
}

export default Index