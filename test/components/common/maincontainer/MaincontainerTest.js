import React from 'react';
import { shallow } from 'enzyme';
import Maincontainer from 'components/common/maincontainer/Maincontainer.js';

describe('<Maincontainer />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Maincontainer />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "maincontainer-component"', function () {
      expect(component.hasClass('maincontainer-component')).to.equal(true);
    });
  });
});
