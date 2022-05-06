import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Info } from '../interface/info.model';
import { InfoService } from '../service/info.service';

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
  })

  getBirth(){
    return this.infoForm.get('birth');
  }

  getZipcode(){
    return this.infoForm.get('zipcode');
  }

  constructor(private infoService: InfoService, private fb: FormBuilder) {  }

  onSubmit(){
    this.validate = true;
    this.patients = {
      birth: this.infoForm.value.birth,
      zipcode: this.infoForm.value.zipcode
    }
    console.log(this.patients);

    this.validate = this.infoService.validatePatients(this.patients);
    console.log(this.validate);

  }

}
