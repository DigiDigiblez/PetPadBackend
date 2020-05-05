import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import History from "./History";

describe("Given the RegisterCreatedStage component", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<History />);
    });

    it("should render the expected markup", () => {
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
