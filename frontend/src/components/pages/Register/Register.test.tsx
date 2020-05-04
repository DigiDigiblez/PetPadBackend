import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Register from "./Register";

describe("Given the RegisterForm component", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Register />);
    });

    it("should render the expected markup", () => {
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
