{
    //

    class BankAccount {
        constructor(
            public readonly id: number,
            public name: string,
            private _balance: number,
            protected _email: string,
        ) {}

        addDeposit(amount: number) {
            this._balance += amount;
        }

        getBalance() {
            return this._balance;
        }
    }
    const masud = new BankAccount(121, 'Masud', 400, '@.com');
    masud.addDeposit(200);

    class Student extends BankAccount {
        test() {}
    }

    //
}
