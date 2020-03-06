/*
 *给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。
 */

function judgeSquareSum(c) {
    if (c < 0) {
        return false;
    }
    let i = 0,
        j = parseInt(Math.sqrt(c));
    while (i <= j) {
        if ((i * i + j * j) == c) {
            return true;
        } else if ((i * i + j * j) > c) {
            j--;
        } else {
            i++;
        }
    }
    return false;
}