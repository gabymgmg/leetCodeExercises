
/* Definition for a binary tree node.**/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    // base case
    if(root===null) return root
    let temp = root.left
    //swap the values
    root.left = root.right
    root.right = temp
    // make the recursive call in both nodes
    invertTree(root.left)
    invertTree(root.right)
    return root
}

