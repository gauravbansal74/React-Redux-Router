import React from 'react';
import { shallow } from 'enzyme';
import Jobs from 'components/Jobs.js';

describe('<Jobs />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Jobs />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "jobs-component"', function () {
      expect(component.hasClass('jobs-component')).to.equal(true);
    });
  });
});
