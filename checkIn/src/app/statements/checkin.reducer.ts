import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { checkin, patientsDetail, checkout } from './checkin.action';

export const initialState: any ={
    info: {birth: '', zipcode: ''},
    patients: {
        firstName: '',
        lastName: '',
        DOB: '',
        zipCode: '',
        appointmentDateTime: '',
    }
};

export const checkinReducer = createReducer(
  initialState,
  on(checkin, (state, user) => {
      return {...state, info: {birth: user.birth, zipcode: user.zipcode }}
  }),
  on(patientsDetail, (state, patients) => {
      return {...state, patients: patients}
  }),
  on(checkout, () => initialState)
);