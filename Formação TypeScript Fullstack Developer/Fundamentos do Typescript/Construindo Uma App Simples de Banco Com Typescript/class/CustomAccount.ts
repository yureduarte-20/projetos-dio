"use strict";
import { DioAccount } from "./DioAccount";

export class CustomAccount extends DioAccount { 
  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  } 

  public deposit(value: number): void {
    super.deposit(value + 10)    
  }

}