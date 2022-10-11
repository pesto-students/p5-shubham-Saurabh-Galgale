class Stack {

    constructor() {
        this.items = [];
    }

    getBuffer() {
        return this.items.slice();
    }

    pushing(element) {
        this.items.push(element);
    }

    remove() {
        if (this.items.length == 0) {
            return "undefine";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }
}


class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }


    enqueue = function (value) {
        this.s1.pushing(value);
        return value;
    }

    dequeue = function () {
        while (!this.s1.isEmpty()) {
            this.s2.pushing(this.s1.remove());//4 3 2 1
        }
        return this.s2.remove();
    }
}


let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.dequeue());
console.log(queue.dequeue());


