import urlFor from './urlFor'

const ptComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <img
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={urlFor(value).width(800).height(500).fit('max').auto('format')}
                />
            )
        }
    }
}

export default ptComponents