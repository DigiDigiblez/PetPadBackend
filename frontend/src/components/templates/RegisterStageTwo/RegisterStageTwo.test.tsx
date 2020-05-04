import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import RegisterStageTwo from "./RegisterStageTwo";

describe("Given the RegisterCreatedStage component", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<RegisterStageTwo />);
    });

    it("should render the expected markup", () => {
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
