/*
 *141. Linked List Cycle 
 *141. 环形链表
 *给定一个链表，判断链表中是否有环。
 *
 *为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
 *如果 pos 是 -1，则在该链表中没有环。
 */

/*
 *   思想：使用双指针，一个指针每次移动一个节点，一个指针每次移动两个节点，
 *        如果存在环，那么这两个指针一定会相遇。
 */

function hasCycle(head) {
    if (head == null) {
        return false;
    };
    let slow = head,
        fast = head.next;
    while (slow != null && fast != null && fast.next != null) {
        if (slow == fast) {
            return true;
        };
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;

};