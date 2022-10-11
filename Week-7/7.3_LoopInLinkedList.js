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
        this.loop = 0;
    }

    insert = function (value) {
        if (this.head == null) {
            this.head = new Node(value);
        } else {
            let temp = this.head;
            this.head = new Node(value);
            if(this.loop == 1) {
                temp.next = this.head;
            }
            this.head.next = temp;
        }
        this.loop++;
        this.size++
        return this.head;
    }

    printList = function() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.data + "=>";
            curr = curr.next;
        }
        if(curr == null) {
            str += "Null";
        }
        return str;
    }

    getSize = function () {
        return `size of the LL is ${this.size}.`;
    }
}

function detectLoop(ll) {//10--20--30--40--50--null
    let slow = ll.head;
    let fast = slow;
    while(fast.next != null && slow != null) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast == slow) {
            return true;
        }
    }
    return false;
}

let ll = new singlyLinkedList();
ll.insert(50);
ll.insert(40);
ll.insert(30);
ll.insert(20);
ll.insert(10);

console.log(detectLoop(ll));


