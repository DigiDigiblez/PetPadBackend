import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Pad from "./Pad";

describe("Given the RegisterCreatedStage component", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Pad />);
    });

    it("should render the expected markup", () => {
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
