export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true


  // :)

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance = value
  }

  getStatus = (): boolean => {
    return this.status
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
      console.log(`Você depositou R$${value}!`)
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value
      console.log(`Você Sacou R$${value}!`)
    } else {
      console.log('Saldo Insuficiente!')
    }
  }


  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    //Não precisa do else pois se o if for true a função acaba no return.
    throw new Error('Conta inválida')
  }
}

