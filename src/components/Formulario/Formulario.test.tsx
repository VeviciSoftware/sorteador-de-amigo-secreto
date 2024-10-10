import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

//Jest

test("quando o input esta vazio, novos participantes nao podem ser adicionados", () => {
    //Arrange
    render(<Formulario />);

    //Act
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const botao = screen.getByRole('button');

    //Assert
    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
});