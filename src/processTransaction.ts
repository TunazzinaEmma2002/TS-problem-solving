type Transaction = {
    type: "deposite" | "withdraw"
    amount: number
}


const processTransaction = (balance:number, transaction:Transaction):number|string => {
    if(transaction.type === "deposite"){
        return balance + transaction.amount
    }
    if(transaction.type === "withdraw"){
        if(transaction.amount > balance){
            return "Insefficiante balance😅"
        }
    }
    return balance - transaction.amount
}

console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));










// // 7000
 

// // 3000
 
// // insufficient balance:

// // 5000  (unchanged) 
// // insufficient balance
