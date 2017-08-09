import React from 'react';
import { shallow } from 'enzyme';
import Org from 'components/Org.js';

describe('<Org />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Org />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "org-component"', function () {
      expect(component.hasClass('org-component')).to.equal(true);
    });
  });
});
