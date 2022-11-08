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
        name: 'email',
        title: 'Email',
        description: 'Key contact email address that will appear in the site footer.',
        type: 'string',
        validation: Rule => Rule.custom(email => {
            if (typeof email === 'undefined') {
                return true // Allow undefined values
            }
            
            return email.toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  )
                  
                ? true
                : 'This is not a valid email address'
          })
      },
      {
          name: "mainNav",
          type: "array",
          title: "Main Navigation",
          of: [{ type: "navItem" }]
      }
   ],
};