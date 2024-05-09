import React from "react";
import { shallow } from "enzyme";
import ListaProductos from "./ListaProductos";

describe("ListaProductos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListaProductos />);
    expect(wrapper).toMatchSnapshot();
  });
});
