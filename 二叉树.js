class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var node = new BinaryTreeNode(value)
    if (this.root === null) {
      this.root = node;
      return ;
    }
    this._find_insert(this.root, node);
  }

  _find_insert(root_node, next_node) {
    // console.log(root_node, next_node)
    if (root_node.value < next_node.value) {
      if (root_node.right === null) {
        root_node.right = next_node;
      } else {
        this._find(root_node.right, next_node);
      }
    } else {
      if (root_node.left === null) {
        root_node.left = next_node;
      } else {
        this._find(root_node.left, next_node);
      }
    }
  }
}

function testBinaryTree(num = 20) {
  var i = 0, binaryTree = new BinaryTree();
  while (i < num) {
    binaryTree.insert(10 + (Math.random() * 90 | 0));
    i ++;
  }
  return binaryTree;
}

window.BinaryTree = BinaryTree;