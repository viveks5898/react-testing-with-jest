import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Login } from "../Login/Login";

describe("Login form testing", () => {
  test("Username", () => {
    render(<Login />);
    const UserinputElement = screen.getByPlaceholderText("Enter Your Name");
    const Demotest = "test";
    fireEvent.change(UserinputElement, { target: { value: Demotest } });
    expect(UserinputElement.value).toBe(Demotest);
  });
  test("Psswordd", () => {
    render(<Login />);

    const PasswordinputElement = screen.getByPlaceholderText("Password");
    const Demotest = "1";
    fireEvent.change(PasswordinputElement, { target: { value: Demotest } });
    expect(PasswordinputElement.value).toBe(Demotest);
  });
  test("Button", () => {
    render(<Login />);
    const Buttonrole = screen.getByRole("button");
  });
});
