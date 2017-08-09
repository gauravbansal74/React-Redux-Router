import React from 'react';
import { shallow } from 'enzyme';
import Payment from 'components/organization/Payment.js';

describe('<Payment />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Payment />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "payment-component"', function () {
      expect(component.hasClass('payment-component')).to.equal(true);
    });
  });
});
