import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Header from './Header';
import TodoTextInput from './TodoTextInput';

describe('components', () => {
  describe('Header', () => {
    let app, sandbox, fakeAddTodo;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      fakeAddTodo = sandbox.spy();
      app = shallow(<Header addTodo={ fakeAddTodo }/>);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should render correctly', () => {
      expect(app.find('h1').text()).to.equal('todos');
    });

    it('should call addTodo when text exist', () => {
      app.find(TodoTextInput).props().onSave('text');
      expect(fakeAddTodo.called).to.equal(true);
    });

    it('should not call addTodo when text is empty', () => {
      app.find(TodoTextInput).props().onSave();
      expect(fakeAddTodo.called).to.equal(false);
    });
  });
});
