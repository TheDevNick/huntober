/* 
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

- function - number as input - print out every num from 1 to the input number
- if / 3 print 'fizz' 
- if /5 print 'buzz'
- /3 and /5 print 'Fizz Buzz'

- function: takes in num as param - always a positive number
- ok to log the string 'fizz, buzz, fizz buzz'
- 
*/

function fizzBuzz(num) {
for (var i = 1; i <= num; i++) {

    const fizz = i % 3 == 0
    const buzz = i % 5 == 0
    const fizzbuzz = i % 5 == 0 && i % 3 == 0
  if (fizzbuzz)  console.log('FizzBuzz')
  else if (fizz)  console.log('Fizz')
  else if (buzz)  console.log('Buzz')
  else console.log(i)
}

}

fizzBuzz(16)// '1, 2, fizz, 4'
fizzBuzz(3)// '1, 2, fizz'