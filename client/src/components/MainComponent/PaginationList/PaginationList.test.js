import React from "react";
import { shallow } from "enzyme";
import PaginationList from "./PaginationList";

describe("PaginationList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PaginationList />);
    expect(wrapper).toMatchSnapshot();
  });
});
