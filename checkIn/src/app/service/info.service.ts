import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Info } from '../interface/info.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  patients: Info[] = [
    {
      birth: '2022-05-02',
      zipcode:'11111'
    },
    {
      birth: '2022-05-01',
      zipcode:'22222'
    }
  ]
  constructor() { }

  getInfo(){
    return this.patients;
  }

  validatePatients(user: {birth: string, zipcode: string}){
    for(let i = 0; i < this.patients.length; i++){
      if(this.patients[i].birth === user.birth && this.patients[i].zipcode === user.zipcode){
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
