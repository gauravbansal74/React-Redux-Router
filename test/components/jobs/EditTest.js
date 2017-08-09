import React from 'react';
import { shallow } from 'enzyme';
import Edit from 'components/jobs/Edit.js';

describe('<Edit />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Edit />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "edit-component"', function () {
      expect(component.hasClass('edit-component')).to.equal(true);
    });
  });
});
