import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Homepage from "./Homepage";

describe("Given the RegisterForm component", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Homepage />);
    });

    it("should render the expected markup", () => {
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
