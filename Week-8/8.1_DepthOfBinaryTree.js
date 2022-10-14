class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

depth = function (root) {
    let countL = 0;
    let countR = 0;
    let v1 = root;
    let v3 = root;
    while (v1 != null) {
        let v2 = v1.left;
        v1 = v2;
        countL += 1;
    }
    while (v3 != null) {
        let v4 = v3.right;
        v3 = v4;
        countR += 1;
    }
    return Math.max(countL, countR);
}

let root = new TreeNode(10);
root.left = new TreeNode(20);
root.right = new TreeNode(30);
root.left.left = new TreeNode(40);
root.left.right = new TreeNode(50);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(70);

console.log(depth(root));


//Recursion function------------------------------------------------
// maxDepth = function (root) {
//     if (root === null) {
//         return 0;
//     }
//     let depth = 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
//     return depth;
// }

// console.log(maxDepth(root));


