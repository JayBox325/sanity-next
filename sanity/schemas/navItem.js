export default {
    name: "navItem",
    type: "object",
    title: "Navigation Item",
    fields: [
        {
            name: "label",
            type: "string",
            title: "Title"
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