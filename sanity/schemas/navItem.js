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
          hidden: true,
          title: 'Children',
          of: [{ type: 'navChildItem' }]
        }
    ],
    preview: {
      select: {
        title: 'label',
        internalTitle: 'navItemUrl.internal.title',
        internalUrl: 'navItemUrl.internal.slug.current',
        external: 'navItemUrl.external',
      },
      prepare(selection) {
        const {
            title,
            internalTitle,
            internalUrl,
            external
        } = selection

        console.log('internalUrl', internalUrl)

        let heading = title
        let subtitle = ''

        if (internalUrl) {
            heading = title ?? internalTitle
            subtitle = 'Is internal'
        } else if (external) {
            heading = title
            subtitle = `External to ${external}`
        }

        return {
          title: heading,
          subtitle: `${subtitle}`
        }
      }
    }
};