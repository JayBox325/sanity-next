import Link from "next/link"
import { useEffect, useState, useRef } from 'react'
import { FiChevronDown,FiChevronLeft,FiChevronRight } from 'react-icons/fi'

function MegaMenuItem(props) {
    const [childIsActive, setChildIsActive] = useState(false)
    const parentItem = useRef(null)

    const {
        item,
        menuIsOpen,
        setMenuIsOpen
    } = props || {}

    const {
        value,
        children
    } = item || {}

    // Close children when menu is closed
    useEffect(() => {
        setChildIsActive(false)
    }, [menuIsOpen])

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setChildIsActive(false)
                parentItem?.current?.focus()
                setMenuIsOpen(false)
            }
        }

        window.addEventListener('keydown', handleEsc)

        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [])

    return (
        <li className="w-full">

            {children.length ? (
                <>
                    <button ref={parentItem} onClick={() => {
                        setChildIsActive(!childIsActive)
                    }} className="bg-gray-100 flex rounded-md items-center justify-between w-full text-left px-6 py-4 hover:bg-gray-200 transition lg:bg-transparent lg:rounded-none lg:w-auto lg:hover:underline lg:hover:bg-transparent">
                        <span>{value.reference.title}</span>
                        <span className="ml-1 inline-block">
                            <FiChevronRight className="lg:hidden"/>
                            <FiChevronDown className="hidden lg:block"/>
                        </span>
                    </button>

                    <ul className={`absolute top-0 left-full bg-white transition-all w-full h-full z-50 p-4 ${childIsActive ? 'visibile -translate-x-full' : 'invisibile translate-x-0'} lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:bg-red-500 lg:w-screen`}>
                        <div className="">

                            <div className="flex flex-row justify-between items-center mb-2 lg:hidden">
                                <span className="text-3xl">{value.reference.title}</span>
                                <button
                                    onClick={() => {
                                        setChildIsActive(false)
                                    }}
                                    className="inline-flex items-center"
                                >
                                    <span className="mr-1 inline-block"><FiChevronLeft /></span>
                                    Back
                                </button>
                            </div>

                            <ul className="flex flex-col gap-4">
                                {children.map((item, n) => {

                                    const {
                                        value,
                                        children
                                    } = item || {}

                                    return (
                                        <li className="" key={n}>
                                            <Link onClick={()=>{setMenuIsOpen(false)}} className="py-4 block px-6 hover:bg-gray-200 rounded-md bg-gray-100" href={`/${value.reference.slug.current}`}>
                                                {value.reference.title}
                                            </Link>

                                            {children.length ? (
                                                <div className="absolute top-0 left-full bg-white transition-all w-full h-full z-50">
                                                    <ul className="">
                                                        {children.map((item, n) => {

                                                            const {
                                                                value,
                                                                children
                                                            } = item || {}

                                                            return (
                                                                <li className="" key={n}>
                                                                    <Link onClick={()=>{setMenuIsOpen(false)}} href={`/${value.reference.slug.current}`}>
                                                                        {value.reference.title}
                                                                    </Link>

                                                                    {children.length ? (
                                                                        <span>Has children</span>
                                                                    ) : ''}
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            ) : ''}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </ul>
                </>
            ) : (
                <Link
                    onClick={()=>{setMenuIsOpen(false)}}
                    className="bg-gray-100 flex rounded-md items-center justify-between w-full text-left px-6 py-4 hover:bg-gray-200 transition lg:bg-transparent lg:rounded-none lg:w-auto lg:hover:underline lg:hover:bg-transparent"
                    href={`/${value.reference.slug.current}`}
                >
                    {value.reference.title}
                </Link>
            )}
        </li>
    )
}

export default MegaMenuItem