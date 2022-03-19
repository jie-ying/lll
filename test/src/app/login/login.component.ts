import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group(
    {
      username: ['', [Validators.minLength(5),Validators.maxLength(12),Validators.required]],
      password: ['',[Validators.minLength(5),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{5,}$"), Validators.required]]
    },
    {
      Validators: this.matchPassword,
    }
  );

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }


  onSubmit(){
    console.log(this.loginForm.value);
  }

  matchPassword(group: FormGroup): ValidationErrors | null {
    const password = group.get('password')?.value;
    const username = group.get('username')?.value;

    return password !== username ? { notMatch: true }: null;
  }


  

}
// ngOnDestroy(): void {
  //   this.clean.array.forEach((element: any) => {
  //     clearInterval(element)//stop the loop, data stream
  //   });
  // }
  // onclickbtn(){
  //   this.clean.push(setInterval(() => {}));
    
    // setInterval(() => {})//this is data string, it can trigger multiple time
    // //this is infinity loop
  // }