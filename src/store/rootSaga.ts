import { all } from 'redux-saga/effects';
import PatientSaga from './patient/patientSaga';

export default function* rootSaga() {
  yield all([PatientSaga()]);
}
