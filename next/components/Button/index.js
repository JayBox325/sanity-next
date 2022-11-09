import isExternalURL from "@/utils/helpers/isExternalURL"
import Link from "next/link"

function Button(props) {
    const {
        label,
        href,
        onClick
    } = props || {}


    // if (linkIsExternal == true) {
    //     isExternal = true
    // }

    console.log('button', props)

    const className = 'h-14 bg-indigo-500 hover:bg-indigo-800 transition rounded-lg px-6 text-white items-center justify-center inline-flex'

    if (href) {
    // If it's a href it needs to be a <Link> or <a> tag for external hrefs.

    let isExternal = isExternalURL(href)

        if (isExternal) {
            return (
                <a target="_blank" rel="noopener noreferrer" onClick={onClick} href={href} className={className}>
                    {label}
                </a>
            )
        }

        return (
            <Link onClick={onClick} href={href} className={className}>
                {label}
            </Link>
        )

    } else if (onClick) {
    // If it has an onClick event.

        return (
            <button onClick={onClick} className={className}>
                {label}
            </button>
        )
        
    }
}

export default Button