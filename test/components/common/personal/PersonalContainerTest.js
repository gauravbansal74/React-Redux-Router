import React from 'react';
import { shallow } from 'enzyme';
import PersonalContainer from 'components/common/personal/PersonalContainer.js';

describe('<PersonalContainer />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<PersonalContainer />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "personalcontainer-component"', function () {
      expect(component.hasClass('personalcontainer-component')).to.equal(true);
    });
  });
});
