import { combineReducers } from 'redux';
import Patient from './patient/patientReducer';

const rootReducer = combineReducers({ Patient });
export default rootReducer;
