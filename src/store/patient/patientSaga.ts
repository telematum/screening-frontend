import { takeEvery, fork, all, call, put } from 'redux-saga/effects';

import PATIENT_CONST from './patientConst';
import { patientListSuccess, patientListError } from './patientActions';
import axios, { AxiosResponse } from 'axios';

function* patientlist() {
  console.log('saga');
  const url =
    'https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json';

  try {
    const apiResponse: AxiosResponse<any> = yield call(axios.get, url);
    console.log(apiResponse);

    if (apiResponse && apiResponse.status === 200) {
      const responseData = {
        statusCode: 200,
        data: apiResponse.data
      };
      yield put(patientListSuccess(responseData));
    } else {
      const responseData = {
        statusCode: apiResponse.status,
        data: { error: 'Server Error' }
      };
      yield put(patientListError(responseData));
    }
  } catch (error) {
    yield put(patientListError(error));
  }
}

export function* watchPatientList() {
  yield takeEvery(PATIENT_CONST.PATIENT_LIST_REQUEST, patientlist);
}

function* PatientSaga() {
  yield all([fork(watchPatientList)]);
}

export default PatientSaga;
