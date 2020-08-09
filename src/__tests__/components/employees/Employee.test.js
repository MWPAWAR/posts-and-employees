import React from 'react';
import { shallow } from 'enzyme';

import Employee from '../../../components/employees/Employee';
import employeeMock from '../../mocks/employee.json';

describe('Employee', () => {
  test('it renders correctly with default data', () => {
    const component = shallow(<Employee {...employeeMock} />);
    expect(component).toMatchSnapshot();
  });
});
