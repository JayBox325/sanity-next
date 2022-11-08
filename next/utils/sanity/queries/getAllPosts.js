const GET_ALL_POSTS = `*[_type == "post" && publishedAt < now()] | order(publishedAt desc)`

export default GET_ALL_POSTS