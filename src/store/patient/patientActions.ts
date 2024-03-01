import PATIENT_CONST from './patientConst';

export interface Data {
  statusCode: number;
  data: object;
}

interface PatientRequest {
  type: typeof PATIENT_CONST.PATIENT_LIST_REQUEST;
}

interface PatientListSuccess {
  type: typeof PATIENT_CONST.PATIENT_LIST_SUCCESS;
  payload: Data;
}
interface PatientListError {
  type: typeof PATIENT_CONST.PATIENT_LIST_ERROR;
  payload: any;
}

export type PatientActionTypes = PatientListSuccess | PatientListError;

export const patientListRequest = (): PatientRequest => {
  return {
    type: PATIENT_CONST.PATIENT_LIST_REQUEST
  };
};
export const patientListSuccess = (data: {
  statusCode: number;
  data: Data;
}): PatientListSuccess => {
  console.log(data);
  return {
    type: PATIENT_CONST.PATIENT_LIST_SUCCESS,
    payload: data
  };
};
export const patientListError = (error: any): PatientListError => {
  return {
    type: PATIENT_CONST.PATIENT_LIST_ERROR,
    payload: error
  };
};
