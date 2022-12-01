import { useState } from "react"
import SingleMenu from "@/layout/SingleMenu"

const { default: Link } = require("next/link")

function Header(props) {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const {
        navigation
    } = props || {}

    return (
        <header className="fixed top-0 z-50 left-0 w-full h-20 bg-gray-200">
            <div className="container flex items-center h-full justify-between">
                <Link href="/" className="inline-block relative z-60">Boilerplate</Link>

                {/* Hamburger */}
                <button onClick={()=>{setMenuIsOpen(!menuIsOpen)}} className="relative z-60 lg:hidden" aria-label={menuIsOpen ? 'Close menu' : 'Open menu'}>
                    Menu
                </button>

                {/* <MegaMenu navigation={navigation} menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} /> */}

                <SingleMenu
                    navigation={navigation}
                    menuIsOpen={menuIsOpen}
                    setMenuIsOpen={setMenuIsOpen}
                />
            </div>
        </header>
    )
}

export default Header