/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root,p, q) {
    // if root is null
    if(!root) return null
    while(root){
        // verify that the node is within the same side of the tree
        if(root.val<p.val && root.val<q.val){
            root = root.right
        } else if(root.val>p.val && root.val>q.val){
            root = root.left
        } else {
            break
        }
    }
    return root
};
