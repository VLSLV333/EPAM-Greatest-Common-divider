function findGreatestDivisor(num1, num2){
    if (num2 != 0){
        return findGreatestDivisor(num2, num1%num2)
    } else {
        return num1 
    }
}

