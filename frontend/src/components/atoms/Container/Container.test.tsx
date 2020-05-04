import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Container from "./Container";

describe("Given the Table component", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Container>Hello world!</Container>);
    });

    it("should render the expected markup", () => {
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
