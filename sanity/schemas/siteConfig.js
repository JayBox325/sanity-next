import { FaCogs } from 'react-icons/fa'

export default {
    name: 'siteConfig',
    type: 'document',
    icon: FaCogs,
    title: 'Site Settings',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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