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

    printList = function() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.data + " --> ";
            curr = curr.next;
        }
        if(curr == null) {
            str += "Null";
        }
        return str;
    }

    getSize = function () {
        return `size of the Linked List is ${this.size}.`;
    }
}

function rotateLl(ll, x) {
    if (x == 0) {
        return "bye";
    }
    let current = ll.head;
    let count = 1;

    while (count < x && current != null) {
        current = current.next;
        count++;
    }

    let xth = current;

    while (current.next != null) {
        current = current.next;
    }
    current.next = ll.head;
    ll.head = xth.next;
    xth.next = null;

    return ll.head;
}

let ll = new singlyLinkedList();
ll.insert(50);
ll.insert(40);
ll.insert(30);
ll.insert(20);
ll.insert(10);
// console.log(ll.head);
// console.log(ll.getSize());
// console.log(reverse(ll));
console.log(ll.printList());

rotateLl(ll, 3);
console.log(ll.printList());
