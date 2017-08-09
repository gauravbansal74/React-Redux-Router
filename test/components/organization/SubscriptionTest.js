import React from 'react';
import { shallow } from 'enzyme';
import Subscription from 'components/organization/Subscription.js';

describe('<Subscription />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Subscription />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "subscription-component"', function () {
      expect(component.hasClass('subscription-component')).to.equal(true);
    });
  });
});
