import Link from "next/link"

function SingleMenuItem(props) {

    const {
        item
    } = props || {}

    const {
        value
    } = item || {}

    const {
        reference
    } = value || {}
    
    return (
        <li>
            <Link href={`/${reference.slug.current}`}>{reference.title}</Link>
        </li>
    )
}

export default SingleMenuItem