export default {
    name: 'link',
    type: 'object',
    title: 'Link',
    fields: [
        {
            name: 'isExternal',
            type: 'boolean',
            title: 'Is external?',
            initialValue: false,
            description: 'Turn this on if you need to paste a URL to an external website.',
        },
        {
            name: 'external',
            type: 'url',
            title: 'Paste an external URL',
            hidden: ({ parent }) => (
                parent?.isExternal === false
            )
        },
        {
            name: 'internal',
            type: 'reference',
            title: 'Select a page from within Sanity',
            to: [{ type: 'page' }, { type: 'post' }],
            hidden: ({ parent }) => parent?.isExternal === true
        }
    ]
}