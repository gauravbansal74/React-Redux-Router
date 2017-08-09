import React from 'react';
import { shallow } from 'enzyme';
import Members from 'components/organization/Members.js';

describe('<Members />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Members />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "members-component"', function () {
      expect(component.hasClass('members-component')).to.equal(true);
    });
  });
});
