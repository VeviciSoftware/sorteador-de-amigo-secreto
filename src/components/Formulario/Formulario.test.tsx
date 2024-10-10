import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

//Jest

test("quando o input esta vazio, novos participantes nao podem ser adicionados", () => {
  //Arrange
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );

  //Act
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const botao = screen.getByRole("button");

  //Assert
  expect(input).toBeInTheDocument();
  expect(botao).toBeDisabled();
});

test("adicionar um participante caso exista um nome preenchido", () => {
  //Arrange
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );

  //Act
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const botao = screen.getByRole("button");
  fireEvent.change(input, { target: { value: "Lucas" } });
  fireEvent.click(botao);

  //Assert
  expect(input).toHaveFocus();
  expect(input).toHaveValue("");
  expect(botao).toBeDisabled();
});
