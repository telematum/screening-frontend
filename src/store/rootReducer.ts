import { combineReducers } from 'redux';
import Patient, { PatientState } from './patient/patientReducer';

export interface RootState {
  Patient: PatientState;
}

const rootReducer = combineReducers({ Patient });
export default rootReducer;
