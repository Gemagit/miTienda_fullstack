import React from "react";
import { shallow } from "enzyme";
import ProductosDetalles from "./ProductosDetalles";

describe("ProductosDetalles", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProductosDetalles />);
    expect(wrapper).toMatchSnapshot();
  });
});
