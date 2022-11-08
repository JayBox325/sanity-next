const GET_PAGE_BY_SLUG = `*[_type == "page" && slug.current == $slug][0]{
    title,
    publishedAt,
    body,
    slug,
    _type,
    "parent": parent->slug
}`

export default GET_PAGE_BY_SLUG