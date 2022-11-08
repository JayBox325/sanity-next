import { FaCogs } from 'react-icons/fa'

export default {
    name: 'socialNetworks',
    type: 'document',
    icon: FaCogs,
    title: 'Social Networks',
    __experimental_actions: ['update', 'publish'],
    fields: [
      {
          name: "networks",
          type: "array",
          title: "Networks",
          of: [{ type: "socialNetwork" }]
      },
   ],
};