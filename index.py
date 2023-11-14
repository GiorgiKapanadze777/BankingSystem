accounts = {}

while True:
    print("Menu:")
    print("1. Create an Account")
    print("2. Deposit Funds")
    print("3. Withdraw Funds")
    print("4. Check Balance")
    print("5. Exit")

    choice = input("Enter your choice: ")

    if choice == '1':
        name = input("Enter your name: ")
        account_number = len(accounts) + 1
        accounts[account_number] = {"name": name, "balance": 0}
        print(f"Account created successfully. Your account number is {account_number}")

    elif choice == '2':
        account_number = int(input("Enter your account number: "))
        if account_number in accounts:
            deposit_amount = float(input("Enter the deposit amount: "))
            if deposit_amount > 0:
                accounts[account_number]["balance"] += deposit_amount
                print(f"Deposited ${deposit_amount}. Current balance: ${accounts[account_number]['balance']}")
            else:
                print("Invalid deposit amount. Please enter a valid amount.")
        else:
            print("Account not found. Please create an account first.")

    elif choice == '3':
        account_number = int(input("Enter your account number: "))
        if account_number in accounts:
            withdrawal_amount = float(input("Enter the withdrawal amount: "))
            if 0 < withdrawal_amount <= accounts[account_number]["balance"]:
                accounts[account_number]["balance"] -= withdrawal_amount
                print(f"Withdrawn ${withdrawal_amount}. Current balance: ${accounts[account_number]['balance']}")
            else:
                print("Invalid withdrawal amount or insufficient balance.")
        else:
            print("Account not found. Please create an account first.")

    elif choice == '4':
        account_number = int(input("Enter your account number: "))
        if account_number in accounts:
            account = accounts[account_number]
            print(f"Name: {account['name']}, Account Number: {account_number}, Balance: ${account['balance']}")
        else:
            print("Account not found. Please create an account first.")

    elif choice == '5':
        print("Thank you for using the Banking System!")
        break

