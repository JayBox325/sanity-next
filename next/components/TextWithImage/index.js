function TextWithImage(props) {
    const {
        heading,
        body
    } = props || {}

    return (
        <section className="row bg-white">
            <div className="container">
                <p>This is a text with image block.</p>
            </div>
        </section>
    )
}

export default TextWithImage