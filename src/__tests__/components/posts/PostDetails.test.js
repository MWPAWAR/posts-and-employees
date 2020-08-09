import React from 'react';
import { shallow } from 'enzyme';

import { PostDetails } from '../../../components/posts/PostDetails';
import postMock from '../../mocks/post.json';

describe('PostDetails', () => {
  test('renders data unavailable message if post is undefined', () => {
    const component = shallow(<PostDetails />);
    expect(component).toMatchSnapshot();
  });

  test('renders correctly with default data', () => {
    const component = shallow(<PostDetails post={postMock} />);
    expect(component).toMatchSnapshot();
  });
});
