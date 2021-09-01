"use strict";
/* 
    Bank Account Class 
    This class is responsible for holding data about a single bank account
*/
class BankAccount
{
    constructor(fullName, accountNumber) 
    {
        this._balance = 0;
        this._accountName = fullName;
        this._transactionHistory = [];
        this._accountNumber = accountNumber;
    }
    
    // Accessors
    get balance() 
    { 
        return this._balance; 
    } 

    get accountName()
    {
        return this._accountName;
    }
    
    get accountNumber()
    {
        return this._accountNumber;
    }
    
    // Note: no mutators because you shouldn't be able to amend the data
    //       directly. Instead we have methods to do that
    
    // Methods
    viewTransactionHistory() // method to view the transaction history of the account
    {
        // define and initialise output variable
        let output = "Transaction Record for " + this.accountNumber + "\n";
        // loop over the transaction history
        for (let i = 0; i < this._transactionHistory.length; i++)
        {
            // generate output in two styles...
            //output += this._transactionHistory[i].date + " => " + this._transactionHistory[i].type + " " + this._transactionHistory[i].result + " on amount $" + this._transactionHistory[i].value + "<br>";
            output += `${this._transactionHistory[i].date} => ${this._transactionHistory[i].type} ${this._transactionHistory[i].result} on amount $${this._transactionHistory[i].value} \n`;
        }
        // return history output
        return output;
    }

    deposit(amount) // deposit method. Takes one parameter amount.
    {
        // create a new record
        let record = {
            value: amount,
            type: "deposit",
            date: new Date()
        };
        // some quick validation to see if the transaction is valid
        if (typeof amount === "number" && amount > 0)
        {
            this._balance += amount; // add amount to balance
            record.result = "success"; // record that it's a success
            this._transactionHistory.push(record); // add the record to the history of this account
        }
        else
        {
            record.result = "failed"; // record that it failed
            this._transactionHistory.push(record); // add the record to the history of this account
        }
        // return the result
        return record.result; 
    }

    withdraw(amount)
    {
        // create a new record
        let record = {
            value: amount,
            type: "withdrawal",
            date: new Date()
        };
        // check if the transaction is valid
        if (typeof amount === "number" && amount > 0) 
        {
            this._balance -= amount; // remove amount from balance
            record.result = "success"; // record that it's a success
            this._transactionHistory.push(record); // add the record to the history of this account
        }
        else
        {
            record.result = "failed"; // record that it failed
            this._transactionHistory.push(record); // add the record to the history of this account
        }
        // return the result
        return record.result;
    }

    toString()
    {
        return `Bank Account of ${this.accountName()} with balance ${this.balance()}`;
    }
    
}

/* 
    Bank Class 
    This class is responsible for holding data about the bank and its associated accounts
*/
class Bank
{
    constructor(bankName) 
    {
        this._accountsArray = [];
        this._bankName = bankName;
    }
    
    // accessors
    get bankName() 
    { 
        return this._bankName; 
    } 
    // Note: no mutators here either. We use methods to change values instead.
    
    // private methods
    _searchForAccount(accountNumber)
    {
        let accountIndex = -1;
        if (this._accountsArray.length > 0)
        {
            accountIndex = this._accountsArray.findIndex(
                function(account){ return account.accountNumber == accountNumber; }
            );
        }
        return accountIndex;
    }
    _getAccount(accountNumber)
    {
        let index = this._searchForAccount(accountNumber);
        if (index != -1)
        {
            console.log("Account found, returning ... ");
            return this._accountsArray[index];
        }
        console.log("Account not found");
        return null;
    }
    // public methods
    createAccount(fullName, accountNumber) // method to create a new bank account
    {
        let account = new BankAccount(fullName, accountNumber); // create new bank account
        this._accountsArray.push(account); // add it to the array of accounts
        return "Account created";
    }
    viewAccountHistory(accountNumber) // method to view the history of a bank account
    {
        let account = this._getAccount(accountNumber);
        if (account === null)
        {
            return null;
        }
        return account.viewTransactionHistory();
    }
    deposit(accountNumber, amount) // method to deposit into an account
    {
        let account = this._getAccount(accountNumber);
        if (account === null)
        {
            return null;
        }
        let result = account.deposit(amount);
        return result + " on depositing $" + amount;
    }
    withdraw(accountNumber, amount) // method to withdraw into an account
    {
        let account = this._getAccount(accountNumber);
        if (account === null)
        {
            return null;
        }
        let result = account.withdraw(amount);
        return result + " on withdrawing $" + amount;
    }
    viewAccountBalance(accountNumber) // method to view the account balance
    {
        let account = this._getAccount(accountNumber);
        if (account === null)
        {
            return null;
        }
        return account.toString();
    }
    toString()
    {
        return this.bankName;
    }
}

// Code for testing
let commBank = new Bank("commBank");
console.log(commBank.createAccount("Tian",3875762892));
console.log(commBank.deposit(3875762892,50000));
console.log(commBank.withdraw(3875762892,11));
console.log("");
console.log(commBank.viewAccountHistory(3875762892));