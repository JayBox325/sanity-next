import MegaMenuItem from "@/layout/MegaMenuItem"

function MegaMenu(props) {

    const {
        navigation
    } = props || {}

    return (
        <>
            {navigation.length ? (
                <nav className="">
                    <ul className="inline-flex gap-2">
                        {navigation.map((item, n) => (
                            <MegaMenuItem item={item} key={n} />
                        ))}
                    </ul>
                </nav>
            ) : ''}
        </>
    )
}

export default MegaMenu