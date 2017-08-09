import React from 'react';
import { shallow } from 'enzyme';
import Email from 'components/common/forms/Email.js';

describe('<Email />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Email />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "email-component"', function () {
      expect(component.hasClass('email-component')).to.equal(true);
    });
  });
});
