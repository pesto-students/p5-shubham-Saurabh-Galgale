class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert = function (value) {
        if (this.head == null) {
            this.head = new Node(value);
        } else {
            let temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;
        }
        this.size++
        return this.head;
    }

    getSize = function() {
        return `size of the Linked List is ${this.size}.`;
    }
}

function reverse(ll) {
    let current = ll.head;
    let prev = null;
    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        if (!temp)
            break;
        current = temp;
    }
    ll.head = current;
}


let ll = new singlyLinkedList();// 30--20--10
ll.insert(10);
ll.insert(20);
ll.insert(30);
console.log(ll.head);
// console.log(ll.getSize());
reverse(ll);
console.log(ll.head);

