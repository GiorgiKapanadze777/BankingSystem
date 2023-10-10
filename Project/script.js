const accounts = {};

function displayOutput(message) {
    document.getElementById("output").textContent = message;
}

function createAccount() {
    const name = prompt("Enter your name:");
    if (name) {
        const accountNumber = generateAccountNumber();
        accounts[accountNumber] = { name, balance: 0 };
        displayOutput(`Account created successfully. Your account number is ${accountNumber}`);
    }
}

function generateAccountNumber() {
    return Object.keys(accounts).length + 1;
}

function depositFunds() {
    const accountNumber = prompt("Enter your account number:");
    if (accountNumber in accounts) {
        const depositAmount = parseFloat(prompt("Enter the deposit amount:"));
        if (!isNaN(depositAmount) && depositAmount > 0) {
            accounts[accountNumber].balance += depositAmount;
            displayOutput(`Deposited $${depositAmount}. Current balance: $${accounts[accountNumber].balance.toFixed(2)}`);
        } else {
            displayOutput("Invalid deposit amount. Please enter a valid amount.");
        }
    } else {
        displayOutput("Account not found. Please create an account first.");
    }
}

function withdrawFunds() {
    const accountNumber = prompt("Enter your account number:");
    if (accountNumber in accounts) {
        const withdrawalAmount = parseFloat(prompt("Enter the withdrawal amount:"));
        if (!isNaN(withdrawalAmount) && withdrawalAmount > 0) {
            if (accounts[accountNumber].balance >= withdrawalAmount) {
                accounts[accountNumber].balance -= withdrawalAmount;
                displayOutput(`Withdrawn $${withdrawalAmount}. Current balance: $${accounts[accountNumber].balance.toFixed(2)}`);
            } else {
                displayOutput("Insufficient balance.");
            }
        } else {
            displayOutput("Invalid withdrawal amount. Please enter a valid amount.");
        }
    } else {
        displayOutput("Account not found. Please create an account first.");
    }
}

function checkBalance() {
    const accountNumber = prompt("Enter your account number:");
    if (accountNumber in accounts) {
        const { name, balance } = accounts[accountNumber];
        displayOutput(`${name}'s account balance is $${balance.toFixed(2)}`);
    } else {
        displayOutput("Account not found. Please create an account first.");
    }
}

function exitProgram() {
    displayOutput("Thank you for using the Simple Banking System!");
}
