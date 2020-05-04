import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Hero from "./Hero";

describe("Given the RegisterForm component", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Hero />);
    });

    it("should render the expected markup", () => {
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
