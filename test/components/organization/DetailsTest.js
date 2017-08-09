import React from 'react';
import { shallow } from 'enzyme';
import Details from 'components/organization/Details.js';

describe('<Details />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Details />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "details-component"', function () {
      expect(component.hasClass('details-component')).to.equal(true);
    });
  });
});
