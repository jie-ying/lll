import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Info } from '../interface/info.model';
import { InfoService } from '../service/info.service';
import { checkin, patientsDetail } from '../statements/checkin.action';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent{

  patients!: Info;
  validate: boolean = false;
  infoForm: FormGroup = this.fb.group({
    birth: ['', Validators.required],
    zipcode: ['', Validators.required]
  });

  getBirth(){
    return this.infoForm.get('birth');
  }

  getZipcode(){
    return this.infoForm.get('zipcode');
  }

  constructor(private infoService: InfoService, 
    private fb: FormBuilder, 
    private store: Store,
    private router: Router) {  }

  onSubmit(){
    // this.validate = true;
    this.patients = {
      birth: this.infoForm.value.birth,
      zipcode: this.infoForm.value.zipcode
    }
    console.log(this.patients);

    this.validate = this.infoService.validatePatients(this.patients);
    console.log(this.validate);

    setTimeout(() => {
      this.router.navigate(['info'])
      this.store.dispatch(checkin({
        birth: this.infoForm.value.birth,
        zipcode: this.infoForm.value.zipcode
      }));
      this.store.dispatch(patientsDetail(this.infoService.getPatient(this.patients)))
      console.log("login successful")
    }, 2000);
  }

}
