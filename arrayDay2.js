let myArray = ["abc", "xyz", 1, 2, "Hey!"]

function moveLeft(arr) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(`${i}: ${arr[i]}`)
        if(arr[i - 1]) {
            arr[i] = arr[i - 1]
        }
    }
}

// // call move left function with 'xyz' and myArray as arguments
// console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!']

// // call move left function again, same arguments
// // Note that 'xyz' is already as far left as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// // call move right function this time, with 2 and myArray as arguments
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// // call move right function again, same arguments
// // Note that 2 is already as far right as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change


console.log(moveLeft(myArray))