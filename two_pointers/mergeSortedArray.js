/*88. Merge Sorted Array (Easy)
 *
 *给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
 *
 *说明:
 *初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 *你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 *示例:
 *输入:
 *nums1 = [1,2,3,0,0,0], m = 3
 *nums2 = [2,5,6],       n = 3
 *输出: [1,2,2,3,5,6]
 *
 *来源：力扣（LeetCode）
 *链接：https://leetcode-cn.com/problems/merge-sorted-array
 *著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 */
/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 常规代码v1.0
function merge(nums1, m, nums2, n) {
    let index1 = m - 1,
        index2 = n - 1,
        indexMerge = m + n - 1;
    while (index1 >= 0 || index2 >= 0) {
        if (index1 < 0) {
            nums1[indexMerge--] = nums2[index2--];
        } else if (index2 < 0) {
            // nums1[indexMerge--] = nums1[index1--];
            index1--;
        } else if (nums1[index1] > nums2[index2]) {
            nums1[indexMerge--] = nums1[index1--];
        } else {
            nums1[indexMerge--] = nums2[index2--];
        }
    }
}


// 优化v2.0 利用splice()插入函数
function merge2(nums1, m, nums2, n) {
    while (n--) {
        while (m >= 0) {
            if (m === 0 || nums2[n] > nums1[m - 1]) {
                nums1.splice(m, 0, nums2[n]);
                break;
            }
            m--;
        }
    }
}