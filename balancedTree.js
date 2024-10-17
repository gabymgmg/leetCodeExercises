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
 * @return {number}
 */

var diameterOfBinaryTree = function (root) {
    if (root === null) return 0 // Handle empty tree
    let max = 0; // keep the max value of the longest path

    function getHeight(node) {
        if (node === null) return 0 // when it reaches a leaf node

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);
        max = Math.max(max, leftHeight + rightHeight); // Update max diameter

        return Math.max(leftHeight, rightHeight) + 1;
    }
    getHeight(root);
    return max;
}
