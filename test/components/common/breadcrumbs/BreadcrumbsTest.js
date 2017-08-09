import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs.js';

describe('<Breadcrumbs />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Breadcrumbs />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "breadcrumbs-component"', function () {
      expect(component.hasClass('breadcrumbs-component')).to.equal(true);
    });
  });
});
