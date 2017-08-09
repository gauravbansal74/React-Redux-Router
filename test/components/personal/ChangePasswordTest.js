import React from 'react';
import { shallow } from 'enzyme';
import ChangePassword from 'components/personal/ChangePassword.js';

describe('<ChangePassword />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ChangePassword />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "changepassword-component"', function () {
      expect(component.hasClass('changepassword-component')).to.equal(true);
    });
  });
});
