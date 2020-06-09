import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "./Button";

configure({
  adapter: new Adapter(),
});

describe("<Button />", () => {
  let wrapper, actionMock;

  beforeEach(() => {
    actionMock = jest.fn();
    wrapper = shallow(<Button action={actionMock}>Cancel</Button>);
  });

  it("should render correctly", () => {
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.text()).toEqual("Cancel");
  });

  // TODO: check why it's not working
  /* it("action function should be invoked after click", () => {
    wrapper.find("button").simulate("click");
    expect(actionMock).toHaveBeenCalled();
  });*/

  it("should not react on click if disabled prop was passed ", () => {
    wrapper = shallow(
      <Button action={actionMock} disabled={true}>
        Cancel
      </Button>
    );

    expect(wrapper.props().disabled).toEqual(true);

    wrapper.find("button").simulate("click");
    expect(actionMock).not.toHaveBeenCalled();
  });
});
