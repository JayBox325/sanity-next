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
            initialValue: (new Date()).toISOString(),
            validation: Rule => Rule.required(),
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
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
