/*524. Longest Word in Dictionary through Deleting (Medium)
 *524. 通过删除字母匹配到字典里最长单词
 *给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。
 *如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。
 *
 *示例 1:
 *输入:
 *s = "abpcplea", d = ["ale","apple","monkey","plea"]
 *
 *输出: 
 *"apple"
 *
 *来源：力扣（LeetCode）
 *链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting
 *著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */

function findLongestWord(s, d) {
    let longestword = "";
    d.forEach(target => {
        let l1 = longestword.length;
        let l2 = target.length;
        if (l1 > l2 || (l1 == l2 && longestword.localeCompare(target) < 0)) {
            return true;
        }
        if (isSubstr(s, target)) {
            longestword = target;
        }
    });
    return longestword;
}

function isSubstr(s, target) {
    let i = 0,
        j = 0;
    while (i < s.length && j < target.length) {
        if (s.charAt(i) == target.charAt(j)) {
            j++;
        }
        i++;
    }
    return j == target.length;
}