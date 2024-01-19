import { useState } from "react";
import { render } from "@testing-library/react";
import InputText from "./index";

const TestInput = () => {
  const [value, setValue] = useState("");

  return (
    <InputText
      type="email"
      name="email"
      placeholder="Email"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onDelete={() => setValue()}
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
