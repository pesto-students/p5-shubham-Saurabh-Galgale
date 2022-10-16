class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }


    insert = function (value) {
        var thisNode = new TreeNode(value);
        if (!this.root) {
            this.root = thisNode;
        } else {
            var currentRoot = this.root;
            while (true) {
                if (currentRoot.value > value) {
                    if (currentRoot.left != null) {
                        currentRoot = currentRoot.left;
                    } else {
                        currentRoot.left = thisNode;
                        break;
                    }
                } else if (currentRoot.value < value) {
                    if (currentRoot.right != null) {
                        currentRoot = currentRoot.right;
                    } else {
                        currentRoot.right = thisNode;
                        break;
                    }
                } else {
                    console.log("Repeated");
                    break;
                }
            }
        }
    }

    levelOrderTraversal = function () {
        let treeis = [];
        let parent = this.root;
        let queue = [];

        if (!parent) {
            return "no element found";
        }
        queue.push(parent);

        while (queue.length) {
            var temp = queue.shift();
            treeis.push(temp.value);
            if (temp.left) {
                queue.push(temp.left);
            }
            if (temp.right) {
                queue.push(temp.right);
            }
        }
        return treeis;
    }
}

let bt = new BinaryTree();
bt.insert(20);// root
bt.insert(10);
bt.insert(30);
// console.log(bt.root);
console.log(bt.levelOrderTraversal());

