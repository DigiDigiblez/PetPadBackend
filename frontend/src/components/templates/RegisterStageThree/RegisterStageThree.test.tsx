import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import RegisterStageThree from "./RegisterStageThree";

describe("Given the RegisterCreatedStage component", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<RegisterStageThree />);
    });

    it("should render the expected markup", () => {
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
