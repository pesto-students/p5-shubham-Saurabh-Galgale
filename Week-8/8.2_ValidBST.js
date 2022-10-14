class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

validate = function (root) {
    let currentL = root;
    let currentR = root;
    while (currentL && currentR) {
        if (currentL.left != null && currentL.left.value > currentL.value) {
            return false;
        } else {
            currentL = currentL.left; 
        }
        if (currentR.right != null && currentR.right.value < currentR.value) {
            return false;
        } else {
            currentR = currentR.right; 
        }
    }
    return true;
}


let root = new TreeNode(50);
root.left = new TreeNode(30);
root.left.left = new TreeNode(20);
root.left.left.left = new TreeNode(10);
root.left.left.right = new TreeNode(21);
root.left.right = new TreeNode(32);
root.left.right.left = new TreeNode(31);
root.left.right.right = new TreeNode(35);
root.left.right.right.left = new TreeNode(34);
root.left.right.right.right = new TreeNode(1);//change it
root.right = new TreeNode(80);
console.log(validate(root));