import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  clean: any = [];

  constructor() { }

  

  ngOnInit(): void {
    setInterval(() => {})//this is data string, it can trigger multiple time
    //this is infinity loop
  }


  ngOnDestroy(): void {
    this.clean.array.forEach((element: any) => {
      clearInterval(element)//stop the loop, data stream
    });
  }
  onclickbtn(){
    this.clean.push(setInterval(() => {}));
    
    
  }

}
