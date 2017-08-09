import React from 'react';
import { shallow } from 'enzyme';
import EmailConfirmation from 'components/main/EmailConfirmation.js';

describe('<EmailConfirmation />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<EmailConfirmation />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "emailconfirmation-component"', function () {
      expect(component.hasClass('emailconfirmation-component')).to.equal(true);
    });
  });
});
