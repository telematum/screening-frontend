import PATIENT_CONST from './patientConst';
import { PatientActionTypes } from './patientActions';

const initialState = {
  patientList: [],
  error: '',
  loading: false
};

const Patient = (state = initialState, action: PatientActionTypes) => {
  console.log(state, action, 'reducers');

  switch (action.type) {
    case PATIENT_CONST.PATIENT_LIST_REQUEST:
      console.log('err');
      state = {
        ...state,
        loading: true,
        patientList: [],
        error: ''
      };
      break;
    case PATIENT_CONST.PATIENT_LIST_SUCCESS:
      state = {
        ...state,
        loading: false,
        patientList: action.payload.statusCode === 200 ? action.payload.data : false,
        error: ''
      };
      break;
    case PATIENT_CONST.PATIENT_LIST_ERROR:
      state = {
        ...state,
        loading: true,
        patientList: [],
        error: action.payload.data ? action.payload.data.errorDescription : ''
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Patient;
