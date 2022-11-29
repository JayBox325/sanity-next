// function convertDataToTree(data) {
//     // const idMapping = data.reduce((acc, el, i) => {
//     //     acc[el.id] = i;
//     //     return acc;
//     // }, {});

//     // console.log('mapping', idMapping)

//     return data
// }

function convertDataToTree(data) {
    var map = {}, node, roots = [], i;

    for (i = 0; i < data.length; i += 1) {
        map[data[i].id] = i; // initialize the map
        data[i].children = []; // initialize the children
    }

    for (i = 0; i < data.length; i += 1) {
        node = data[i];

        if (node.parent) {
            // if you have dangling branches check that map[node.parentId] exists
            data[map[node.parentId]].children.push(node);
        } else {
            roots.push(node);
        }
    }

    return roots;
}

export default convertDataToTree