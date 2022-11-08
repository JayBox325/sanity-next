const GET_POST_BY_SLUG = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "author": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    body
}`

export default GET_POST_BY_SLUG