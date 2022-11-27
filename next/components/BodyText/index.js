function BodyText(props) {
    const {
        heading,
        body
    } = props || {}

    return (
        <section className="row bg-white">
            <div className="container">
                <p>This is a body text block.</p>
            </div>
        </section>
    )
}

export default BodyText