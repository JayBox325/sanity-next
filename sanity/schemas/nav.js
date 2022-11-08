import { FaCogs } from 'react-icons/fa'

export default {
    name: 'nav',
    type: 'document',
    icon: FaCogs,
    title: 'Main Navigation',
    __experimental_actions: ['update', /*'delete', 'create', */ 'publish'],
    fields: [
      {
          name: "mainNav",
          type: "array",
          title: "Main Navigation",
          of: [{ type: "navItem" }]
      }
   ],
};