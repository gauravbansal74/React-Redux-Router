import React from 'react';
import { shallow } from 'enzyme';
import Register from 'components/main/Register.js';

describe('<Register />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Register />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "register-component"', function () {
      expect(component.hasClass('register-component')).to.equal(true);
    });
  });
});
