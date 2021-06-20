const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        :
        `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`
).split('\n');

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    createNode(value, prev, next) {
        return { value, prev, next };
    }

    push(value) {
        const curNode = this.createNode(value, this.tail, this.head);
        if (this.head) { // 큐의 제일 head이면 (첫번째 요소이면)
            this.tail.next = curNode; // 제일 뒤에 넣은게 curNode
            this.head.prev = curNode; // 헤드 앞에 curNode
            this.tail = curNode; // 제일 뒤에 curNode
        } else {
            this.head = curNode; 
            this.tail = curNode;
            curNode.prev = curNode;
            curNode.next = curNode;
        }
        this.size++; // size 1 증가시킨다. 
    }

    pop() {
        if (this.size > 2) { // head도 있고 tail도 있으면
            const value = this.head.value; // head의 value 찾아주고
            const newHead = this.head.next; // head 다음요소가 newHead가 된다.
            this.head = newHead; // head는 newHead로 바뀐다.
            newHead.prev = this.tail;
            this.tail.next = this.head;
            this.size--; // size 1 감소시킨다. 
            return value; // 값을 리턴
        } else if (this.size === 2) { // head와 tail이 붙어있으면
            const value = this.head.value; // head의 value를 찾아주고
            this.head = this.tail; // tail이 head가 된다.
            this.tail.prev = this.tail; // tail 앞에 있던게 tail이 된다. 
            this.tail.next = this.tail;
            this.size--; // size 1 감소시킨다.
            return value; // 값을 리턴
        } else if (this.size === 1) { // 뺄게 하나밖에 없으면
            const value = this.head.value; // head의 value를 찾아주고
            this.head = null; // head는 null이 된다. 
            this.tail = null; // tail도 null이 된다. 
            this.size--; // size 1 감소시킨다. 
            return value; // 값을 리턴
        } else { // 아예 아무것도 없으면
            return -1; // -1 리턴
        }
    }

    empty() {
        return this.size ? 0 : 1;
    }

    front() {
        return this.head ? this.head.value : -1; // 지금 노드가 this.head인가? 맞으면 head값 리턴, 아니면 -1
    }

    back() {
        return this.tail ? this.tail.value : -1; // 지금 노드가 this.tail인가? 맞으면 tail값, 아니면 -1
    }
}

const myQueue = new Queue();
const output = []; // 값을 담아줄 빈 배열

for (let i = 1; i < input.length; i++) {
    const [queueCommand, value] = input[i].split(" ");
    switch (queueCommand) {
        case "push": 
            myQueue.push(value); 
            break;
        case "pop": 
            output.push(myQueue.pop()); 
            break;
        case "size": 
            output.push(myQueue.size); 
            break;
        case "empty": 
            output.push(myQueue.empty()); 
            break;
        case "front": 
            output.push(myQueue.front()); 
            break;
        case "back": 
            output.push(myQueue.back()); 
            break;
    }
}
console.log(output.join("\n"));
