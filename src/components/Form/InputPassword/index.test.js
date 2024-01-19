import { useState } from "react";
import { render } from "@testing-library/react";
import InputPassword from "./index";

const TestInput = () => {
  const [value, setValue] = useState("");

  return (
    <InputPassword
      name="password"
      placeholder="Password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const setup = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector(`.relative.z-0`);

  return { input };
};

test("Should have tag <input> and has className .relative.z-0", () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});
