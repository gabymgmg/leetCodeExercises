/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // Base cases: If either list is empty, return the other list
    if (!list1) return list2;
    if (!list2) return list1;
    let head = new ListNode(0)
    let newList = head

    while (list1 && list2) {
        // check for the lowest value
        if (list1.val <= list2.val) {
            newList.next = list1
            list1 = list1.next
        }
        else {
            newList.next = list2
            list2 = list2.next
        }
        // change the pointer to the ones that was assigned
        newList = newList.next
    }
    // Append remaining nodes from either list
    newList.next = list1 || list2
    return head.next
}