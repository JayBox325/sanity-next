export default {
    name: "textWithImage",
    type: "object",
    title: "Text with Image",
    fields: [
        {
            name: 'heading',
            type: 'string',
            validation: Rule => Rule.required(),
            title: 'Heading'
        },
        {
            name: 'tagline',
            type: 'string',
            title: 'Tagline'
        },
        {
            name: 'body',
            type: 'blockContent',
            validation: Rule => Rule.required(),
            title: 'Body'
        },
        {
            title: 'Layout',
            name: 'layout',
            description: 'Select how you want this block to appear',
            type: 'string',
            validation: Rule => Rule.required(),
            initialValue: 'imageLeft',
            options: {
                list: [
                    { title: 'Image / Text', value: 'imageLeft' },
                    { title: 'Text / Image', value: 'imageRight' },
                    { title: 'Background Image', value: 'imageBg' },
                ],
            },
        },
        {
            name: 'image',
            type: 'image',
            validation: Rule => Rule.required(),
            title: 'Image',
            options: {
                hotspot: true,
            }
        }
    ],
    preview: {
      select: {
        title: 'heading',
        subtitle: 'tagline',
        media: 'image'
      },
    },
}