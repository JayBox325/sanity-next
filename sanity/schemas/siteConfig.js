export default {
    name: 'siteConfig',
    type: 'document',
    title: 'Site Settings',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Site title',
      },
      {
        title: 'URL',
        name: 'url',
        type: 'url',
        description: 'The main site url.',
      },
      {
          name: "mainNav",
          type: "array",
          title: "Main Navigation",
          of: [{ type: "navItem" }]
      }
   ],
};