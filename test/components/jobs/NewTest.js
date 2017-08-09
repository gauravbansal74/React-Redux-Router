import React from 'react';
import { shallow } from 'enzyme';
import New from 'components/jobs/New.js';

describe('<New />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<New />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "new-component"', function () {
      expect(component.hasClass('new-component')).to.equal(true);
    });
  });
});
