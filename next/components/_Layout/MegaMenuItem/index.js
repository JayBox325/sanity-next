import Link from "next/link"
import { useEffect, useState, useRef } from 'react'
import { FiChevronDown } from 'react-icons/fi'

function MegaMenuItem(props) {
    const [childIsActive, setChildIsActive] = useState(false)
    const parentItem = useRef(null)

    const {
        item
    } = props || {}

    const {
        value,
        children
    } = item || {}

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setChildIsActive(false)
                parentItem?.current?.focus()
            }
        }

        window.addEventListener('keydown', handleEsc)

        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [])

    return (
        <li>
            <div>

                {children.length ? (
                    <>
                        <button ref={parentItem} onClick={() => { setChildIsActive(!childIsActive) }} className="py-2 px-3 inline-flex items-center">
                            <span>{value.reference.title}</span>
                            <span className="ml-1 inline-block"><FiChevronDown /></span>
                        </button>

                        <ul className={`absolute top-full left-0 w-screen bg-white shadow py-6 ${childIsActive ? 'block' : 'hidden'}`}>
                            <div className="container">
                                <ul className="grid grid-cols-4">
                                    {children.map((item, n) => {

                                        const {
                                            value,
                                            children
                                        } = item || {}

                                        return (
                                            <li className="col-span-1" key={n}>
                                                <Link className="inline-block font-bold hover:underline" href={`/${value.reference.slug.current}`}>
                                                    {value.reference.title}
                                                </Link>

                                                {children.length ? (
                                                    <ul>
                                                        {children.map((item, n) => {

                                                            const {
                                                                value,
                                                                children
                                                            } = item || {}

                                                            return (
                                                                <li className="" key={n}>
                                                                    <Link href={`/${value.reference.slug.current}`}>
                                                                        {value.reference.title}
                                                                    </Link>

                                                                    {children.length ? (
                                                                        <span>Has children</span>
                                                                    ) : ''}
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
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
                        className="py-2 px-3 inline-block"
                        href={`/${value.reference.slug.current}`}
                    >
                        {value.reference.title}
                    </Link>
                )}
            </div>
        </li>
    )
}

export default MegaMenuItem