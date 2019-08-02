import React from "react";
import { shallow } from "enzyme";

import Register from '../Components/Register'

it("contains text", () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).toMatchSnapshot();
});

// it("clicks a button", () => {
//     const wrapper = shallow(<Register title="A Title" />);

//     expect(wrapper).toMatchSnapshot();

//     wrapper.find('[name="clickme"]').simulate("click");

//     expect(wrapper).toMatchSnapshot();
// });
