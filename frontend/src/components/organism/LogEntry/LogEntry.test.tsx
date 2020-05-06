import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import LogEntry from "./LogEntry";

describe("Given the RegisterCreatedStage component", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<LogEntry />);
    });

    it("should render the expected markup", () => {
        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
