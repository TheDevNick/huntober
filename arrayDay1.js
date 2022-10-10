function checkEquality(arr1, arr2) {
let strArr1 = arr1.flat().join('')

let strArr2 = arr2.flat().join('')

    return strArr1 === strArr2 ? true : false
}

console.log(checkEquality([['a','b','c'],['d','e','f'],['g','h','i']], [['a','b','c'],['d','e','f'],['g','h','i']] ))