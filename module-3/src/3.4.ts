{
    //Getter and setter

    class BankAccount {
        constructor(
            public readonly id: number,
            public name: string,
            private _balance: number,
            protected _email: string,
        ) {}

        // setter
        set addDeposit(amount: number) {
            this._balance += amount;
        }

        //getter
        get Balance() {
            return this._balance;
        }
    }
    const masud = new BankAccount(121, 'Masud', 400, '@.com');

    masud.addDeposit = 50;
    const getBalance = masud.Balance;

    class Student extends BankAccount {
        test() {}
    }

    //
}
