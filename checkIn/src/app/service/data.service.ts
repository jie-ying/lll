import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Info } from '../interface/info.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const info = {
      info: [{
        birth: 1/1/1990,
        zipcode: 10000
      },
      {
        birth: 1/2/1990,
        zipcode: 10001
      }
    ]}
    return{info};
  }

}
