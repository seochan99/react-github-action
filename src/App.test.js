import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// 0부터 시작?
test("the counter starts at 0", () => {
  render(<App />);
  const counter = screen.getByTestId("countNum");
  expect(counter).toHaveTextContent(0);
});

// 마이너스 들어있음?
test("minus button has correct text", () => {
  render(<App />);
  const btn = screen.getByTestId("minusBtn");
  expect(btn).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);

  const btn = screen.getByTestId("plusBtn");

  expect(btn).toHaveTextContent("+");
});

// + 누르면 올라가? 
test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const btn = screen.getByTestId("plusBtn");

  fireEvent.click(btn); //버튼 클릭 

  //클릭 했을때  숫자가져오기
  const counter = screen.getByTestId("countNum"); 

  // 그게 1맞음? 
  expect(counter).toHaveTextContent(1);
});

// 배경 파랑 마쟈?
test("on/off button has blue color", () => {
  render(<App />);
  const btn = screen.getByTestId("onOffBtn");
  expect(btn).toHaveStyle({ backgroundColor: "blue" });
});

// disable 가능 ?
test("Prevent the -,+ button from being pressed when the on/off button is clicked" , () => {
  render(<App />);
  const onOffBtnClick = screen.getByTestId("onOffBtn");
  fireEvent.click(onOffBtnClick);
  const plusBtnDis = screen.getByTestId("plusBtn");
  expect(plusBtnDis).toBeDisabled();
})