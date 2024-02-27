import { CompanyAccount } from './class/CompanyAccount'
import { CustomAccount } from './class/CustomAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const custom  = new CustomAccount('aas', 3)
companyAccount.deposit(100)
console.log(companyAccount)
custom.deposit(100)
console.log(custom.getBalance())