import React from 'react';
import { shallow } from 'enzyme';
import MemberEdit from 'components/organization/MemberEdit.js';

describe('<MemberEdit />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<MemberEdit />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "memberedit-component"', function () {
      expect(component.hasClass('memberedit-component')).to.equal(true);
    });
  });
});
