import { FaShareAlt } from 'react-icons/fa'

export default {
    name: "socialNetwork",
    type: "object",
    icon: FaShareAlt,
    title: "Social Network",
    fields: [
        {
            name: "url",
            type: "url",
            description: 'Paste the full url to your network account',
            title: "Network URL",
        },
        {
          title: 'Select a network',
          name: 'network',
          description: 'This is so we can display the correct network icon on the front-end',
          type: 'string',
          options: {
            list: [
              {title: 'Facebook', value: 'facebook'},
              {title: 'Twitter', value: 'twitter'},
              {title: 'Instagram', value: 'instagram'},
              {title: 'YouTube', value: 'youtube'},
              {title: 'LinkedIn', value: 'linkedin'},
              {title: 'Vimeo', value: 'vimeo'}
            ],
          }
        }
    ],
    preview: {
      select: {
        title: 'network',
        subtitle: 'url'
      }
    }
};