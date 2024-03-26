let firstNumber = prompt('Digite o primeiro número:')
let secondNumber = prompt('Digite o segundo número:')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert(`
A soma dos dois números é: ${sum}
`)
alert(`
A subtração dos dois números é: ${sub}
`)
alert(`
A multiplicação dos dois números é: ${mult}
`)
alert(`
A divisão dos dois números é: ${div}
`)
alert(`
O resto da divisão dos dois números é: ${rest}
`)
