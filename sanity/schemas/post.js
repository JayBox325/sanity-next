import { FaNewspaper } from 'react-icons/fa'
import pageBuilder from './pageBuilder'
import Tabs from 'sanity-plugin-tabs';

export default {
    name: 'post',
    title: 'Post',
    inputComponent: Tabs,
    icon: FaNewspaper,
    type: 'document',
    fieldsets: [
        { name: 'main', title: 'Main', options: { sortOrder: 10 } },
        { name: 'options', title: 'Options', options: { sortOrder: 30 } },
    ],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            fieldset: 'main',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            fieldset: 'options',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'author',
            title: 'Author',
            fieldset: 'options',
            type: 'reference',
            to: { type: 'author' },
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            fieldset: 'options',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'categories',
            title: 'Categories',
            fieldset: 'options',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            fieldset: 'options',
            type: 'datetime',
        },
        {
            name: 'pageBuilder',
            type: 'array',
            fieldset: 'main',
            title: 'Page builder',
            of: [
              { type: 'textWithImage' },
              { type: 'bodyText' }
            ]
        }
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare: ({ title, media, author }) => ({
            title,
            media,
            subtitle: author ? `by ${author}` : ``,
        })
    }
}
