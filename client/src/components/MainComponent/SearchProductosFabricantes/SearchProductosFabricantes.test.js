import React from "react";
import { shallow } from "enzyme";
import SearchProductosFabricantes from "./SearchProductosFabricantes";

describe("SearchProductosFabricantes", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchProductosFabricantes />);
    expect(wrapper).toMatchSnapshot();
  });
});
