// class Node를 만들어 놓고
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// class Queue를 만든다
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value); // 위에서 생성한 class Node를 이용해서 newNode 만들어준다.
        if (this.length === 0){ // 아직 객체에 아무것도 들어있지 않으면
            this.first = newNode; // 새로만든 노드가 head노드가 된다.
            this.last = newNode; // 노드 하나밖에 없으니까 동시
        } else { // 객체 안에 노드가 있으면
            this.last.next = newNode; // 마지막요소의 다음에 newNode를 생성한다.
            this.last = newNode;
        }
        this.length++; 
        return this;
    }

    dequeue(){
        if(!this.first) { // 첫번째 요소가 없으면 (객체 안이 비어있다는 상태)
            return null;
        }
        if (this.first === this.last){// 객체 안에 요소가 하나만 있으면
            this.last = null;
        }
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--; 
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue('joy');

console.log(myQueue);