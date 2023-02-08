import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskCreator from "./TaskCreator";

describe("Given an input component", () => {
  test("when a button is click then show the input text", () => {
    render(<TaskCreator inputTask={() => {}} />);
    const inputElement = screen.getByTestId("task-input");
    const buttonElement = screen.getByText("Add new task");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  //testear que se llama a la funcion que se pasa por parametro cuando se le hace click al boton del input
  test("when an input has text and a button is clicked then send the value of the input", () => {
    const submit = jest.fn();
    render(<TaskCreator inputTask={submit} />);
    userEvent.click(screen.getByText("Add new task"));
    expect(submit).toHaveBeenCalled();
  });
});
