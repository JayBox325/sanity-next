import SingleMenuItem from "./Item"

function SingleMenu(props) {

    const {
        navigation,
        menuIsOpen
    } = props || {}

    console.log('navigation', navigation)

    return (
        <>
            {navigation.length ? (
                <nav className={`${menuIsOpen ? 'visibile -translate-x-full' : 'invisibile translate-x-0'} transition-all bg-gray-100 fixed sm:max-w-sm top-0 pt-20 left-full bottom-0 w-screen z-50 sm:top-20 lg:w-auto sm:py-6 lg:static lg:bg-transparent lg:translate-x-0`}>
                    <div className="container lg:p-0">
                        <ul className="inline-flex flex-col w-full gap-4 lg:flex-row">
                            {navigation.map((item, n) => (
                                <SingleMenuItem key={n} item={item} />
                            ))}
                        </ul>
                    </div>
                </nav>
            ) : ''}
        </>
    )
}

export default SingleMenu