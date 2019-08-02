import React from "react";
import { shallow } from "enzyme";

import NavigationBar from '../Components/NavigationBar'

it("contains text", () => {
  const wrapper = shallow(<NavigationBar />);
  expect(wrapper).toMatchSnapshot();
});