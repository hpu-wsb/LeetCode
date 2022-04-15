//给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
//
//回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
//
//例如，121 是回文，而 123 不是。
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let str = x.toString()
    var p = x;
    if (x < 0) { return false; }
    else if (x === 0) { return true; }
    else {
        var s = 0;
        while (x !== 0) {
            s = s * 10 + (x % 10);
            x = x / 10 | 0;
        }
    }
    return s === p;
};