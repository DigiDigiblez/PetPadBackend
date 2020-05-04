import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import RegisterStageOne from "./RegisterStageOne";

describe("Given the RegisterCreatedStage component", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<RegisterStageOne />);
    });

    it("should render the expected markup", () => {
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
