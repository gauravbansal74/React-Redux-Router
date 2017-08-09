import React from 'react';
import { shallow } from 'enzyme';
import ActionBar from 'components/jobs/ActionBar.js';

describe('<ActionBar />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ActionBar />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "actionbar-component"', function () {
      expect(component.hasClass('actionbar-component')).to.equal(true);
    });
  });
});
