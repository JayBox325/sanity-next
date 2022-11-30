import client from '@/sanity/client'
import GET_PAGE_BY_SLUG from '@/utils/sanity/queries/getPageBySlug'
import { useRouter } from 'next/router'

const Error404 = () => {
  const router = useRouter()

    return (
      <section className="row bg-gray-100 h-screen flex items-center justify-center">
            <div className="container py-24">
                <div className="text-center flex flex-col gap-1 md:gap-2 lg:gap-3">

                    <p className="text-lg font-medium leading-tight text-indigo-400">404 error</p>
                    
                    <h1 className="font-bold leading-[4rem] tracking-tight text-black">Page not found</h1>
                    
                    <div className="text-lg leading-relaxed text-slate-400">
                      <p>There's been a problem finding this page.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error404