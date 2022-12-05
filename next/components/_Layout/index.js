import Header from '@/layout/Header'
import { NextSeo } from 'next-seo'

function Layout(props) {

    const {
        children,
        seo,
        navigation
    } = props || {}

    const {
        title = '',
        description = ''
    } = seo || {}

    return (
        <>
            <NextSeo
                title={`${title}${title ? ' | ' : ''}Sanity Boilerplate`}
                description={description}
                canonical="https://www.canonical.ie/"
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <Header navigation={navigation} />
            <main className="min-h-screen">
                {children}
            </main>
        </>
    )
}

export default Layout