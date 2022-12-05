import MegaMenuItem from "@/layout/MegaMenuItem"

function MegaMenu(props) {

    const {
        navigation,
        menuIsOpen,
        setMenuIsOpen
    } = props || {}

    return (
        <>
            {navigation?.length ? (
                <nav className={`${menuIsOpen ? 'visibile -translate-x-full' : 'invisibile translate-x-0'} transition-all bg-white fixed sm:max-w-sm top-20 left-full bottom-0 w-screen z-50 lg:static lg:bg-transparent`}>
                {/* <nav> */}
                    <ul className="inline-flex flex-col w-full gap-4 p-4 lg:p-0 lg:flex-row">
                        {navigation.map((item, n) => (
                            <MegaMenuItem menuIsOpen={menuIsOpen} item={item} key={n} setMenuIsOpen={setMenuIsOpen} />
                        ))}
                    </ul>
                </nav>
            ) : ''}
        </>
    )
}

export default MegaMenu