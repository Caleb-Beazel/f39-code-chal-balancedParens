// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function balancedParens(string){
    let openPar = 0
    let closedPar = 0

    let stringArr = string.split('')

    for( i=0 ; i < stringArr.length; i++){
        if (stringArr[i] === '('){
            openPar++
        } else if (stringArr[i] === ')'){
            closedPar++
        }
    }
    if (openPar === closedPar){
        return true
    } else {
        return false
    }
}

console.log(balancedParens(sample1))
console.log(balancedParens(sample2))
console.log(balancedParens(sample3))
console.log(balancedParens(sample4))