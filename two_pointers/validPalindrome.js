/*680. 验证回文字符串 Ⅱ
 *给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 *
 *示例 1:
 *输入: "aba"
 *输出: True
 *
 *示例 2:
 *输入: "abca"
 *输出: True
 *解释: 你可以删除c字符。
 *
 *来源：力扣（LeetCode）
 *链接：https://leetcode-cn.com/problems/valid-palindrome-ii
 *著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 */


function validPalindrome(s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s.charAt(i) != s.charAt(j)) {
            // return 判断余下是否是回文
            return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
        }
    }
    //for 循环结束，说明是回文
    return true;
}

function isPalindrome(s, i, j) {
    while (i < j) {
        if (s.charAt(i++) != s.charAt(j--)) {
            return false;
        }
    }
    return true;
}