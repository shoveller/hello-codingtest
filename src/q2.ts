const digits = [1, 9, 9, 9]
const newDigits = []

while (true) {
    const last: number | undefined = digits.pop()
    if (!last) {
        break
    }

    const newValue = last + 1
    if (newValue === 10) {
        const lastValue = digits[digits.length -1]
        newDigits.unshift(0)
        newDigits.unshift(lastValue + 1)
    } else {
        newDigits.unshift(newValue)
    }
}

// console.log(newDigits)
//
// const reduce = (value: number, add: number): number => {
//     const result = value + add
//     console.log('result', result)
//     if (result >= 10) {
//         return reduce(0, 1)
//     }
//
//     return reduce(result, 0)
// }
//
// const digits = [1, 9, 9, 9]
// const newDigits = []
// while (true) {
//     const last = digits.pop()
//     console.log('last', last)
//     if (!last) {
//         break
//     }
//     newDigits.unshift(reduce(last, 1))
// }
//
// console.log(newDigits)
