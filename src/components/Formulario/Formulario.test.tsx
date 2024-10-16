import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

//Jest
describe("Descrevendo o comportamento do Formulario.tsx", () => {
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
  
  test("nomes duplicados não podem ser adicionados a lista", () => {
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
    fireEvent.change(input, { target: { value: "Lucas" } });
    fireEvent.click(botao);
  
    const mensagemDeErro = screen.getByRole("alert");
  
    //Assert
    expect(mensagemDeErro).toBeInTheDocument();
    expect(mensagemDeErro.textContent).toBe("Participante já adicionado!");
  });
  
  
  test('a mensagem de erro deve sumir após os timers', () => {
    jest.useFakeTimers()
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>)
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')
    fireEvent.change(input, {
        target: {
            value: 'Ana Catarina'
        }
    })
    fireEvent.click(botao)
    fireEvent.change(input, {
        target: {
            value: 'Ana Catarina'
        }
    })
    fireEvent.click(botao)
    let mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeInTheDocument()

    act(() => {
        jest.runAllTimers()
    });

    mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeNull()
})
});
