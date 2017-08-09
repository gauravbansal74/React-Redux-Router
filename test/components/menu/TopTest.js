import React from 'react';
import { shallow } from 'enzyme';
import Top from 'components/menu/Top.js';

describe('<Top />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Top />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "top-component"', function () {
      expect(component.hasClass('top-component')).to.equal(true);
    });
  });
});
