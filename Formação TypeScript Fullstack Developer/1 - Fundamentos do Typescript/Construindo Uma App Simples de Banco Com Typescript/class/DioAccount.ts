export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => this.name

  public deposit (value : number): void  {
    if(this.validateStatus()){
      this.balance += value;
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance - value < 0){
      this.balance -= value;
    } else {
      throw new Error('Saldo insuficiente')
    }
  }

  getBalance = (): number => this.balance

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
