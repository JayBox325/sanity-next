import Button from "../Button"

function Hero(props) {

    const {
        brow,
        heading,
        body,
        buttons
    } = props || {}
    
    return (
        <section className="row bg-gray-100">
            <div className="container py-24">
                <div className="text-center flex flex-col gap-3">

                    {brow ? (
                        <p className="text-lg font-medium leading-tight text-indigo-400">{brow}</p>
                    ) : ''}
                    
                    {heading ? (
                        <h1 className="font-bold leading-[4rem] tracking-tight text-black">{heading}</h1>
                    ) : ''}
                    
                    {body ? (
                        <div className="text-lg leading-relaxed text-slate-400">{body}</div>
                    ) : ''}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    {buttons ? (
                        <>
                            {buttons.map((button, n) => {
                                const {
                                    label,
                                    href,
                                    onClick
                                } = button || {}

                                return (
                                    <Button
                                        key={n}
                                        label={label}
                                        href={href}
                                        onClick={onClick}
                                    />
                                )
                            })}
                        </>
                    ) : ''}
                    
                </div>
            </div>
        </section>
    )
}

export default Hero

