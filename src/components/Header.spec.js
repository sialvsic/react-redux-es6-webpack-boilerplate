import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('components', () => {
  describe('Header', () => {
    let app;

    beforeEach(() => {
      app = shallow(<Header/>);
    });

    it('should render correctly', () => {
      expect(app.find('h1').text()).to.equal('todos');
    });
  });
});
