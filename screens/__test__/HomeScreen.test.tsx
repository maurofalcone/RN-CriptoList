import React, { useContext } from "react";
import HomeScreen from "../HomeScreen";
import { renderHook } from "@testing-library/react-hooks";
import { render, fireEvent, act } from "react-native-testing-library";
import AuthContextProvider, { AuthContext } from "../../context/AuthContext";

it("should not trigger error for correct values", async () => {
  const { getByTestId, queryByTestId } = render(
    <HomeScreen navigation={{} as any} />
  );

  fireEvent.changeText(getByTestId("usernameTextFieldId"), "Mauro");

  await act(async () => {
    fireEvent.press(getByTestId("submitId"));
  });

  expect(
    queryByTestId("Name must not contain special characters or numbers")
  ).not.toBeTruthy();
});

it("should trigger error due to exception", async () => {
  const { getByTestId } = render(<HomeScreen navigation={{} as any} />);

  fireEvent.changeText(getByTestId("usernameTextFieldId"), {
    obj: "this obj property will trigger the exception",
  });

  await act(async () => {
    fireEvent.press(getByTestId("submitId"));
  });

  expect(getByTestId("genericErrorId")).toBeTruthy();
});

it("should not trigger error for correct values", async () => {
  const { getByTestId, queryByTestId } = render(
    <HomeScreen navigation={{} as any} />
  );

  fireEvent.changeText(getByTestId("usernameTextFieldId"), "Mauro");

  await act(async () => {
    fireEvent.press(getByTestId("submitId"));
  });

  expect(queryByTestId("Invalid Credentials")).not.toBeTruthy();
});

test("should save the logged in user", async () => {
  const wrapper = ({ children }: any) => (
    <AuthContextProvider>{children}</AuthContextProvider> // To-Do refactor to create a reusable wrapper.
  );
  const { result } = renderHook(() => useContext(AuthContext), { wrapper });

  act(() => {
    result.current?.login({ username: "Mauro", password: "Secret" });
  });

  expect(result.current?.loggedInUser).toBe("Mauro");
});

it("Home Screen renders correctly", () => {
  const tree = render(<HomeScreen navigation={{} as any} />).toJSON();
  expect(tree).toMatchSnapshot();
});
