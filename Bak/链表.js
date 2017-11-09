class Node {
  constructor(value, next = null) {
      this.value = value;
      this.next = next;
  }
}

class NodeList {

  constructor() {
    this.head = null;
    this.end = null;
  }

  insert(value, after) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.end = node;
      return ;
    }
    var currentAfter = this.find(after);
    var oNext = currentAfter.next;
    currentAfter.next = node;
    node.next = oNext;
  }

  push(value) {
    var node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.end = node;
    }
    this.end.next = node;
    this.end = node;
  }

  find(value) {
    if (this.head === null) return null;
    if (this.head.value === value) return this.head;
    let cur = this.head;
    while(cur.next) {
      cur = cur.next;
      if (cur.value === value) {
        return cur;
      }
    }
  }

  print() {
    var index = this.head;
    console.log(index.value);
    while (index !== this.end) {
      index = index.next;
      console.log(index.value);
    }
  }
}

function testNodeList() {
  var list = new NodeList();
  for (let i = 0;i < 10;i ++) {
    list.push(i);
  }
  return list;
}