const Node = (data) => {
  this.data = data;
  this.link = null;
}

const LinkedList = () => {
  this.length = 0;
  this.head = null;
}

LinkedList.prototype.add = (data) => {
  const newNode = new Node(data);
  if (this.head === null) {
    this.head = newNode;
    this.length++;
  } else {
    let currentNode = this.head;
    while (currentNode.link !== null) {
      currentNode = currentNode.link;
    }
    currentNode.link = newNode;
    this.length++;
  }
}

LinkedList.prototype.insertFisrtNode = (data) => {
  const newNode = new Node(data);
  newNode.link = this.head;
  this.head = newNode;
  this.length++;
}

LinkedList.prototype.insertMiddleNode = (pre, data) => {
  const newNode = new Node(data);
  let currentNode = this.head;

  while (currentNode.data !== pre) {
    currentNode = currentNode.link;
  }

  let temp = currentNode.link;
  newNode.link = temp;
  currentNode.link = newNode;
  this.length++;
}

LinkedList.prototype.remove = () => {
  let currentNode = this.head;
  while (currentNode.link !== null) {
    currentNode = currentNode.link;
  }
  currentNode.link = null;
  this.length--;
}

LinkedList.prototype.delete = (data) => {
  let currentNode = this.head;
  let temp;

  if (currentNode.data !== data) {
    while (currentNode.link.data !== data) {
      currentNode = currentNode.link;
    }
    temp = currentNode.link.link;
    currentNode.link.link = null;
    currentNode.link = temp;
  }
  this.length--;
}

LinkedList.prototype.showData = () => {
  let currentNode = this.head;
  const result = Array(this.length).fill(0);
  for (let i = 0; i < this.length; i++) {
    result[i] = currentNode.data;
    currentNode = currentNode.link;
  }
  return result;
}

const linkedList = new LinkedList();
console.log("Add: 마지막 노드로 삽입하기");