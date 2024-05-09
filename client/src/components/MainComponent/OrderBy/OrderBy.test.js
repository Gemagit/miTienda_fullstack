import React from "react";
import { shallow } from "enzyme";
import OrderBy from "./OrderBy";

describe("OrderBy", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<OrderBy />);
    expect(wrapper).toMatchSnapshot();
  });
});
