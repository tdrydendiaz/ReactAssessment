import React from "react";
import { shallow } from "enzyme";

import Login from '../Components/Login'

it("contains text", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

// it("clicks a button", () => {
//     const wrapper = shallow(<Login title="Login In" />);

//     expect(wrapper).toMatchSnapshot();

//     wrapper.find('[name="clickme"]').simulate("click");

//     expect(wrapper).toMatchSnapshot();
// });