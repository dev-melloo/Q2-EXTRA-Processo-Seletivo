function multiplicaXN(x, n){
    if (n === 0) {
        return 0;
    }
    if (n > 0) {
        return x + multiplicaXN(x, n - 1);
    }
    if (n < 0) {
        return -multiplicaXN(x, -n);
    }
}

x = parseInt(prompt("Digite X")) 
n = parseInt(prompt("Digite N")) 

console.log(multiplicaXN(x,n)) 