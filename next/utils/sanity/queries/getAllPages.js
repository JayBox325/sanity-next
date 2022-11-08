const GET_ALL_PAGES = `*[_type == "page" && publishedAt < now()]{
    title,
    publishedAt,
    slug,
    _type,
    "parent": parent->slug
}`

export default GET_ALL_PAGES