/*

1) Create a Bank Account Class: Write a BankAccount class with the following properties:

 -> accountNumber: string  
 -> balance: number (private)

The class should have methods to:

--deposit(amount: number): void (to add to balance)  
--withdraw(amount: number): void (to subtract from balance)  
--getBalance(): number (to return current balance)

*/

class BankAccount { 
    public accountNumber : string;
    private balance : number;

    constructor(accountNumber: string, initialBalance: number) { 
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount: number) : void { 
        this.balance += amount;
    }

    withdraw(amount: number) : void { 
        if ( amount > this.balance ) { 
            console.log("Insufficient funds!");
        } else {
            this.balance -= amount;
        }
    }

    getBalance(): number { 
        return this.balance;
    }

}

const myAccount = new BankAccount("1234567890", 1000);
myAccount.deposit(500);
console.log("Current Balance: " + myAccount.getBalance());
myAccount.withdraw(200);
console.log("Current Balance: " + myAccount.getBalance());
myAccount.withdraw(2000);  // Should show insufficient funds