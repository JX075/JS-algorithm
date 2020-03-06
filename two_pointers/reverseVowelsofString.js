/*
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 *   示例 1:
 *   输入: "hello"
 *   输出: "holle"
 *
 */
//版本1
function reverseVowels(s) {
    let mode = "aeiouAEIOU";
    s = s.split("");
    let i = 0,
        j = s.length - 1;
    while (i < j) {
        while (mode.indexOf(s[i]) == -1 && i < j) {
            i++;
        }
        while (mode.indexOf(s[j]) == -1 && i < j) {
            j--;
        }
        if (i == j) {
            break;
        }
        let t = 0;
        t = s[i];
        s[i] = s[j];
        s[j] = t;
        i++;
        j--;
    }
    return s.join("");
}


//版本2
function reverseVowels2(s) {
    if (s.match(/[aeiou]/ig)) {
        var vowels = s.match(/[aeiou]/ig).reverse();
    } else {
        return s;
    }

    let i = 0;
    return s.replace(/[aeiou]/ig, () => {
        return vowels[i++];
    });
}