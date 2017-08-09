import React from 'react';
import { shallow } from 'enzyme';
import Side from 'components/menu/Side.js';

describe('<Side />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Side />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "side-component"', function () {
      expect(component.hasClass('side-component')).to.equal(true);
    });
  });
});
