export default {
    name: 'link',
    type: 'object',
    description: 'Choose either to paste a URL to another website or select a page from within Sanity.',
    title: 'Link',
    fields: [
        {
            name: 'external',
            type: 'url',
            title: 'Paste an external URL',
            hidden: ({ parent, value }) => !value && parent?.internal
        },
        {
            name: 'internal',
            type: 'reference',
            title: 'Select a page from within Sanity',
            to: [{ type: 'page' }, { type: 'post' }],
            hidden: ({ parent, value }) => !value && parent?.external
        }
    ]
}