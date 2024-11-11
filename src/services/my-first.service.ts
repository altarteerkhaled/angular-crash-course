import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({name: 'khaled', email:'kal@gmail.com',message:'msg'});
    this.insert({name: 'ali', email:'ali@gmail.com',message:'msg'});
    this.insert({name: 'hazem', email:'haz@gmail.com',message:'msg'});
    this.insert({name: 'monte', email:'monte@gmail.com',message:'msg'});
  }
  insert(message: {name:string, email: string, message: string}): void{
   this.messages.push(message);
  }

  getAllMessages(): any{
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index,1);
  }
}
