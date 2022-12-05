import Link from "next/link"

function GridItem(props) {
    const {
        item
    } = props || {}

    const {
        title,
        publishedAt,
        slug,
        _type
    } = item || {}

    let urlPath = `/${slug.current}`

    if (_type == 'post') {
        urlPath = `/posts/${slug.current}`
    }

    return (
        <Link className="bg-gray-200 transition hover:bg-gray-300 rounded-xl py-6 px-8 block" href={urlPath}>
            <h3 className="text-2xl font-medium">{title}</h3>
            <span className="text-sm">{new Date(publishedAt).toDateString()}</span>
        </Link>
    )
}

export default GridItem