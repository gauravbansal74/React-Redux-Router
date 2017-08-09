import React from 'react';
import { shallow } from 'enzyme';
import EditProfile from 'components/common/personal/EditProfile.js';

describe('<EditProfile />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<EditProfile />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "editprofile-component"', function () {
      expect(component.hasClass('editprofile-component')).to.equal(true);
    });
  });
});
