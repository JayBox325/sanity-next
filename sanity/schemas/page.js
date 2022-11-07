import { RiLayoutFill } from 'react-icons/ri'

export default {
  name: 'page',
  title: 'Page',
  icon: RiLayoutFill,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        //Change to schema title to automatically populate
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, "-")
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'parent',
      type: 'reference',
      title: 'Parent',
      to: { type: 'page' },
      options: {
        disableNew: true,
        filter: '!defined(parent)',
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'parent.title',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle: subtitle ? `– ${subtitle}` : ``,
    }),
  },
}
