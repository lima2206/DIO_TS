import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// peopleAccount.deposit(10)
// peopleAccount.withdraw(15)
// console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
companyAccount.withdraw(5)
companyAccount.getLoan(100)
console.log(companyAccount)

// const specialAccount: SpecialAccount = new SpecialAccount('Lima', 21)
// specialAccount.deposit(100)
// console.log(specialAccount)