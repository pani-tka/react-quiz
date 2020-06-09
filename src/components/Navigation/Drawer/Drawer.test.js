import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";

configure({
  adapter: new Adapter(),
});

describe("<Drawer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Drawer />);
  });

  it("should render two <NavLink /> elements if not authenticated", () => {
    expect(wrapper.find(NavLink)).toHaveLength(2);
  });

  it("should render three <NavLink /> elements if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavLink)).toHaveLength(3);
  });

  it("should an exact logout button", () => {
    wrapper.setProps({ isAuthenticated: true, clickHandler: () => {} });
    expect(wrapper.find(NavLink).filter({ to: "/logout" })).toHaveLength(1);
  });
});
