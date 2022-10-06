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
    var node = ll.head;
    var prev = null;
    while (node) {
        var temp = node.next;
        node.next = prev;
        prev = node;
        if (!temp)
            break;
        node = temp;
    }
    return node;
}
let ll = new singlyLinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
console.log(ll.head);
console.log(ll.getSize());
console.log(reverse(ll));
