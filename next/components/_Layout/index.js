function Layout(props) {

    const {
        children
    } = props || {}

    return (
        <main className="min-h-screen">
            {children}
        </main>
    )
}

export default Layout