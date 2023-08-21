import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if (value > 0) {
            this.setBalance(this.getBalance() + (value + 10))

            console.log('Você fez um deposito Especial! :)')
        } else {
            console.log('Valor insuficiente para deposito Especial!')
        }
    }


}