import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.getStatus() == true) {
      this.setBalance(this.getBalance() + value)
      console.log('Você fez um emprestimo!')
    } else {
      console.log('Emprestimo Negado!')
    }
  }

}


