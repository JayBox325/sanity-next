export default {
    name: "bodyText",
    type: "object",
    title: "Body Text",
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'body',
            type: 'blockContent',
            title: 'Body'
        },
    ]
}