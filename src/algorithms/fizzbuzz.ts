import { FB } from '../types/fb'

export function FizzBuzz (numbers: number[]): FB {
  const fizzBuzz: FB = []

  numbers.forEach(number => {
    if (number % 3 === 0) {
      if (number % 5 === 0) {
        fizzBuzz.push('FizzBuzz')
      } else {
        fizzBuzz.push('Fizz')
      }
    } else if (number % 5 === 0) {
      fizzBuzz.push('Buzz')
    } else {
      fizzBuzz.push(number)
    }
  })

  return fizzBuzz
}
