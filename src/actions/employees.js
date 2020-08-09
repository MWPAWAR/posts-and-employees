import fetchEmployees from '../apis/employees';
import { FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAILURE } from '../constants/action-types';

export default () => dispatch => {
  dispatch({ type: FETCH_EMPLOYEES });

  return fetchEmployees()
    .then(response => {
      dispatch({ type: FETCH_EMPLOYEES_SUCCESS, payload: { data: response.data } });
    })
    .catch(() => {
      dispatch({ type: FETCH_EMPLOYEES_FAILURE });
    })
};
