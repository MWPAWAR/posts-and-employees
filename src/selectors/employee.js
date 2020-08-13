import { createSelector } from 'reselect';
import getEmployees from './employees';

const getEmpId = (_, empId) => empId;

export default createSelector(getEmployees, getEmpId, (employees, empId) =>
  employees.find((emp) => String(emp.id) === String(empId))
);
