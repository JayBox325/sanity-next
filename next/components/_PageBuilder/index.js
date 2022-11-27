import BodyText from "../BodyText";
import TextWithImage from "../TextWithImage";

function PageBuilder(props) {
    
    const {
        content
    } = props || {}

    console.log('content', content)

    return (
        <>
            {content?.map((itemContent, n) => (
                <PageBuilderTarget content={itemContent} key={`pagebuilder-${n}`} />
            ))}
        </>
    );
}

const PageBuilderTarget = (props) => {
    const { content } = props || {};
    const { _type } = content;

    switch (_type) {
        case 'bodyText':
            return <BodyText />
        case 'textWithImage':
            return <TextWithImage />

        default: {
            console.error(`Unknown flexible content type: ${typeHandle} - ${JSON.stringify(content)}`)
            return ''
        }
    }
};

export default PageBuilder