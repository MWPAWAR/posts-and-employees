import React from 'react';
import { shallow } from 'enzyme';

import Post from '../../../components/posts/Post';
import postMock from '../../mocks/post.json'

describe('Post', () => {
  test('it renders correctly with default data', () => {
    const component = shallow(<Post {...postMock} />);
    expect(component).toMatchSnapshot();
  })
});
