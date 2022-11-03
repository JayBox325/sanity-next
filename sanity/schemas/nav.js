import { FaList } from 'react-icons/fa'

export default {
    name: "nav",
    type: "document",
    icon: FaList,
    title: "Navigation",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "id",
            type: "string",
            title: "Id"
        },
        {
            name: "navItems",
            type: "array",
            title: "Navigation items",
            of: [{ type: "navItem" }]
        }
    ]
};