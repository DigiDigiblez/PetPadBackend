import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Assistant from "./Assistant";

describe("Given the RegisterCreatedStage component", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Assistant />);
    });

    it("should render the expected markup", () => {
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
