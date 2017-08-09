import React from 'react';
import { shallow } from 'enzyme';
import SideStatic from 'components/menu/SideStatic.js';

describe('<SideStatic />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<SideStatic />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "sidestatic-component"', function () {
      expect(component.hasClass('sidestatic-component')).to.equal(true);
    });
  });
});
