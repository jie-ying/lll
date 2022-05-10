import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Details, Info } from '../interface/info.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {


  patients: Info[] = [
    {
      birth: '1990-05-02',
      zipcode: '11111'
    },
    {
      birth: '1999-05-01',
      zipcode: '22222'
    }
  ]

  patientDetail: Details[] = [
    {
      address: '111 aa street',
      appointmentDateTime: '2022-05-01',
      appointmentType: 'vaccine',
      city: 'aa',
      clinicId: 1,
      email: 'ada.smith@gmail.com',
      firstName: 'Ada',
      lastName: 'Smith',
      phoneNumber: '12345678',
      state: 'AA',
      zipCode: '22222',
      birth: '1999-05-01'
    },
    {
      address: '222 bb street',
      appointmentDateTime: '2022-05-02',
      appointmentType: 'vaccine',
      city: 'bb',
      clinicId: 2,
      email: 'john.johnson@gmail.com',
      firstName: 'John',
      lastName: 'Johnson',
      phoneNumber: '87654321',
      state: 'BB',
      zipCode: '11111',
      birth: '1990-05-02'
    },
  ];

  

  constructor() {  }

  getPatient(user: Info) {
    this.patientDetail.find((patient) => user.birth === patient.birth && user.zipcode === patient.zipCode);
  }

  

  validatePatients(user: { birth: string, zipcode: string }) {
    for (let i = 0; i < this.patients.length; i++) {
      if (this.patients[i].birth === user.birth && this.patients[i].zipcode === user.zipcode) {
        return true;
      }
    }

    return false;
  }

  

}

// private basedUrl = "api/info/";

  // constructor(private http: HttpClient) { }

  // getInfo() {
  //   return this.http.get<Info[]>(this.basedUrl).pipe(
  //     retry(2),
  //     catchError((error: HttpErrorResponse) => {
  //       console.error(error);
  //       return throwError(error);
  //     })
  //   )
  // }

  // create(infos:Info): Observable<Info> {
  //   return this.http.post<Info>(this.basedUrl, infos)
  // }

  // delete(id: number): Observable<any> {
  //   return this.http.delete(this.basedUrl + id);
  // }
