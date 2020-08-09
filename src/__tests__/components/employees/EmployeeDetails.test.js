import React from 'react';
import { shallow } from 'enzyme';

import { EmployeeDetails } from '../../../components/employees/EmployeeDetails';
import employeeMock from '../../mocks/employee.json';

describe('EmployeeDetails', () => {
  test('renders data unavailable message if employee is undefined', () => {
    const component = shallow(<EmployeeDetails />);
    expect(component).toMatchSnapshot();
  });

  test('renders correctly with default data', () => {
    const component = shallow(<EmployeeDetails employee={employeeMock} />);
    expect(component).toMatchSnapshot();
  });
});
