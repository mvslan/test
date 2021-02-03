let nodeList = [
  {
    id: 0,
    parentId: 0,
  },
  {
    id: 1,
    parentId: 0,
  },
  {
    id: 2,
    parentId: 1,
  },
];

function changeNodeList(nodeList) {
  for (let i = 0; i < nodeList.length; ) {
    let node = nodeList[i];
    if (node.parentId === 0) {
      i++;
    } else {
      let parentNode = findNode(nodeList, node.parentId);
      parentNode.children = parentNode.children || [];
      parentNode.children.push(node);
      nodeList.splice(i, 1);
    }
  }
}

function findNode(nodeList, id) {
  for (let i = 0; i < nodeList.length; i++) {
    let node = nodeList[i];
    if (node.id === id) {
      return node;
    } else {
      if (node.children && node.children.length) {
        return findNode(node.children, id);
      } else {
        continue;
      }
    }
  }
}

changeNodeList(nodeList);
console.log(nodeList);
