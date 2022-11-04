export default {
    name: "navItem",
    type: "object",
    title: "Navigation Item",
    fields: [
        {
            name: "label",
            type: "string",
            title: "Title",
            description: "If you select a page within Sanity, the selected page's title will be used by default."
        },
        {
            name: "navItemUrl",
            type: "link",
            title: "Item URL",
        },
        {
          type: 'array',
          name: 'children',
          title: 'Children',
          of: [{ type: 'navChildItem' }]
        }
    ]
};