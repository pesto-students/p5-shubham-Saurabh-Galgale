class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// validate = function (root) {
//     let currentL = root;
//     let currentR = root;
//     while (currentL && currentR) {
//         if (currentL.left != null && currentL.left.value > currentL.value) {
//             return false;
//         } else {
//             currentL = currentL.left; 
//         }
//         if (currentR.right != null && currentR.right.value < currentR.value) {
//             return false;
//         } else {
//             currentR = currentR.right; 
//         }
//     }
//     return true;
// }


validate = function (root) {
    let currentL = root.left;
    let currentR = root.right;
    let q1 = [];
    let q2 = [];
    if (!root) {
        return "no element found";
    }
    q1.push(currentL);
    q2.push(currentR);

    while (q1) {
        let temp1 = q1.shift();
        if (!temp1) { break; }
        if (temp1) {
            if (temp1.left != null || temp1.right != null) {
                if (temp1.value < root.value && temp1.left.value < temp1.value) {
                    q1.push(temp1.left);
                } else {
                    return false;
                }
                if (temp1.value < root.value && temp1.right.value > temp1.value && temp1.right.value < root.value) {
                    q1.push(temp1.right);
                } else {
                    // console.log(temp1.value);
                    // console.log(temp1.right.value);
                    return false;
                }
            }
        }
    }
    while (q2) {
        let temp2 = q2.shift();
        if (!temp2) { break; }
        if (temp2) {
            if (temp2.left != null || temp2.right != null) {
                if (temp2.value > root.value && temp2.left.value < temp2.value && temp2.left.value > root.value) {
                    q2.push(temp2.left);
                } else { return false }
                if (temp2.value > root.value && temp2.right.value > temp2.value) {
                    q2.push(temp2.right);
                } else { return false }
            }
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