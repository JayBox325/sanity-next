import Header from '@/layout/Header'

function Layout(props) {

    const {
        children,
        navigation
    } = props || {}

    return (
        <>
            <Header navigation={navigation} />
            <main className="min-h-screen">
                {children} xx
            </main>
        </>
    )
}

export default Layout