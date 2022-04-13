//给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

//你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

//你可以按任意顺序返回答案。

//解题：
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var arr = []
    for (var i = 0; i < nums.length; i++) {
        for (var j = nums.length; i < j; j--) {
            if (nums[i] + nums[j] == target) {
                arr.push(i);
                arr.push(j);
            }
        }
    }
    return arr;
};