import React from "react";
import { shallow } from "enzyme";
import ProductosCard from "./ProductosCard";

describe("ProductosCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProductosCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
