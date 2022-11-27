import { RiLayoutFill } from 'react-icons/ri'
import asyncSlugifier from '../helpers/asyncSlugifier'

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
                filter: ({ document }) => {
                    console.log('filter document', document)

                    // Already has been published, so hide this document from the list
                    if (document.publishedAt) {

                        return {
                            filter: 'slug.current != $slug',
                            params: {slug: document.slug.current}
                        }
                    }

                    // Document isn't published yet, don't need to remove it
                    return {
                        filter: '!defined(parent)'
                    }
                },
            },
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                //Change to schema title to automatically populate
                source: (doc, options) => ({ doc, options }),
                slugify: asyncSlugifier,
            },
            validation: (Rule) => Rule.required(),
        },
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'parent.title',
            media: 'mainImage',
        },
        prepare: ({ title, media, subtitle }) => ({
            title,
            media,
            subtitle: subtitle ? `- ${subtitle}` : ``,
        }),
    },
}
