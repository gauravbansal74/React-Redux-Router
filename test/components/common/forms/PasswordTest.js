import React from 'react';
import { shallow } from 'enzyme';
import Password from 'components/common/forms/Password.js';

describe('<Password />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Password />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "password-component"', function () {
      expect(component.hasClass('password-component')).to.equal(true);
    });
  });
});
