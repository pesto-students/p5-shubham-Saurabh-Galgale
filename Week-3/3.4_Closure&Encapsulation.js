// Solution ------------------------------------------------------------------------------------------
function createStack() {
    let items = [];

    return {
        push: function(item) {
            items.push(item);
        },
        pop: function() {
            return items.pop();
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());// 5
console.log(stack.items);// undefined