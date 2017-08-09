import React from 'react';
import { shallow } from 'enzyme';
import Submenu from 'components/common/submenu/Submenu.js';

describe('<Submenu />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Submenu />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "submenu-component"', function () {
      expect(component.hasClass('submenu-component')).to.equal(true);
    });
  });
});
