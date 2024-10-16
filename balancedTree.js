/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null) return true
    let balanceF = Math.abs(getHeight(root.left)-getHeight(root.right))
    if(balanceF>1) return false
    return isBalanced(root.left) && isBalanced(root.right)
};

// function that gets the height
var getHeight= function(node){
    if(node === null) return 0 // base case: when it reaches 
    let left = getHeight(node.left)
    let right = getHeight(node.right)
    return Math.max(left,right)+1
}
