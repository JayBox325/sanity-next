import client from '@/sanity/client'
import GET_PAGE_BY_SLUG from '@/utils/sanity/queries/getPageBySlug'
import { useRouter } from 'next/router'

const Error404 = () => {
  const router = useRouter()

    return (
      <div>
        <h1>404 page</h1>
      </div>
    )
}

// export async function getStaticProps(context) {
//   const { slug = "" } = context.params
//   console.log('slugggg', slug)
//   // const page = await client.fetch(GET_PAGE_BY_SLUG, { slug })

//   // Send to 404 if no post exists
//   // if (!page) {
//   //     return {
//   //         notFound: true,
//   //     }
//   // }

//   return {
//       props: {
//           page
//       }
//   }
// }

export default Error404