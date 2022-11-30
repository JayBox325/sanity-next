import MegaMenu from "@/layout/MegaMenu"
import Menu from "@/layout/Menu"

const { default: Link } = require("next/link")

function Header(props) {
    const {
        navigation
    } = props || {}

    // console.log('navigation', navigation)

    return (
        <header className="fixed top-0 z-50 left-0 w-full h-20 bg-gray-200">
            <div className="container flex items-center h-full justify-between">
                <Link href="/" className="inline-block">Boilerplate</Link>
                {/* <MegaMenu navigation={navigation} /> */}
                <Menu navigation={navigation} />
            </div>
        </header>
    )
}

export default Header