import Link from "next/link"

function PostItem(props) {
    const {
        post
    } = props || {}

    const {
        title,
        publishedAt,
        slug
    } = post || {}

    return (
        <Link className="bg-gray-200 transition hover:bg-gray-300 rounded-xl p-4 block" href="/posts/[slug]" as={`/posts/${slug.current}`}>
            <h3 className="text-xl font-medium">{title}</h3>
            <span className="text-sm">{new Date(publishedAt).toDateString()}</span>
        </Link>
    )
}

export default PostItem