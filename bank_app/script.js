class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

let account1 = new BankAccount(1001, "John Doe", 1000);
let account2 = new BankAccount(1002, "Jane Smith", 500);

account1.displayAccountInfo();
account1.deposit(200);
account1.withdraw(300);
account1.withdraw(1000);
console.log("Current balance:", account1.getBalance());

console.log("----------------------------------");

account2.displayAccountInfo();
account2.deposit(1000);
account2.withdraw(800);
console.log("Current balance:", account2.getBalance());
