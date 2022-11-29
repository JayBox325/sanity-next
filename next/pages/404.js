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

export default Error404