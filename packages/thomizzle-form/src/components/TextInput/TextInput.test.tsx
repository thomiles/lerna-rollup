import React from "react";
import { render } from "@testing-library/react";

import { TextInput } from "./index";

describe("TextInput", () => {
  test("renders the Button component", () => {
    render(<TextInput />);
  });
});
