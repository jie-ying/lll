import { createAction, props } from '@ngrx/store';
import { Info, Details } from '../interface/info.model';


export const checkin = createAction('[Check Page] checkin', props <Info>());
export const patientsDetail = createAction('[Info Page] detail', props<Details>());
export const checkout = createAction('checkout');