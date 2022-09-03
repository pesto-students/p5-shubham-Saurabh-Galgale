// function createStack() {
//     return {
//         items: [],
//         push(items) {
//             this.items.push(items);
//         },
//         pop() {
//             return this.items.pop();
//         }
//     };
// }




// const stack = createStack();
// stack.push(10);
// stack.push(5);
// // stack.pop();
// // stack.items;
// // stack.items = [10, 100, 1000];
// console.log(stack.pop());
// console.log(stack.items);


function createStack() {
    return {
        items: [],
        push(items) {
            this.items.push(items);
        },
        pop() {
            return this.items.pop();
        }
    };
}




const stack = createStack();
stack.push(10);
stack.push(5);
// stack.pop();
// stack.items;
// stack.items = [10, 100, 1000];
console.log(stack.pop());
console.log(stack.items);

