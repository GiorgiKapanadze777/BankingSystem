let accounts = {};

function handleChoice() {
    let choice = document.getElementById('choice').value;
    let output = document.getElementById('output');

    switch (choice) {
        case '1':
            createAccount();
            break;
        case '2':
            depositFunds();
            break;
        case '3':
            withdrawFunds();
            break;
        case '4':
            checkBalance();
            break;
        case '5':
            output.innerHTML = "Thank you for using the Banking System!";
            break;
        default:
            output.innerHTML = "Invalid choice. Please enter a valid option.";
    }
}

function createAccount() {
    let name = prompt("Enter your name: ");
    let accountNumber = Object.keys(accounts).length + 1;
    accounts[accountNumber] = {"name": name, "balance": 0};
    document.getElementById('output').innerHTML = `Account created successfully. Your account number is ${accountNumber}`;
}

function depositFunds() {
    let accountNumber = parseInt(prompt("Enter your account number: "));
    if (accountNumber in accounts) {
        let depositAmount = parseFloat(prompt("Enter the deposit amount: "));
        if (depositAmount > 0) {
            accounts[accountNumber]["balance"] += depositAmount;
            document.getElementById('output').innerHTML = `Deposited $${depositAmount}. Current balance: $${accounts[accountNumber]['balance']}`;
        } else {
            document.getElementById('output').innerHTML = "Invalid deposit amount. Please enter a valid amount.";
        }
    } else {
        document.getElementById('output').innerHTML = "Account not found. Please create an account first.";
    }
}

function withdrawFunds() {
    let accountNumber = parseInt(prompt("Enter your account number: "));
    if (accountNumber in accounts) {
        let withdrawalAmount = parseFloat(prompt("Enter the withdrawal amount: "));
        if (0 < withdrawalAmount && withdrawalAmount <= accounts[accountNumber]["balance"]) {
            accounts[accountNumber]["balance"] -= withdrawalAmount;
            document.getElementById('output').innerHTML = `Withdrawn $${withdrawalAmount}. Current balance: $${accounts[accountNumber]['balance']}`;
        } else {
            document.getElementById('output').innerHTML = "Invalid withdrawal amount or insufficient balance.";
        }
    } else {
        document.getElementById('output').innerHTML = "Account not found. Please create an account first.";
    }
}

function checkBalance() {
    let accountNumber = parseInt(prompt("Enter your account number: "));
    if (accountNumber in accounts) {
        let account = accounts[accountNumber];
        document.getElementById('output').innerHTML = `Name: ${account['name']}, Account Number: ${accountNumber}, Balance: $${account['balance']}`;
    } else {
        document.getElementById('output').innerHTML = "Account not found. Please create an account first.";
    }
}
