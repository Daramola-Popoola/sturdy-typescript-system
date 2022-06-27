function factorial(x: number): number{
    let y: number = 1
    
    for(let i:number = 1; i<= x; i++){
        y *= i
    }
    return y   
}

console.log(factorial(2))


