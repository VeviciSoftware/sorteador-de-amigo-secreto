import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";


jest.mock("../../state/hooks/useListaDeParticipantes", () => {
    return {
        useListaDeParticipantes: jest.fn()
    };
});

const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
    return {
        useNavigate: () => mockNavegacao
    }
});

describe("Quando não existem participantes suficientes", () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
    });

  test("a brincadeira não pode ser iniciada se tiver menos que 3 participantes", () => {
    //Arrange
    render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

    //Act
    const botao = screen.getByRole("button")

    //Assert
    expect(botao).toBeDisabled()
  });
});

describe("Quando existem participantes suficientes", () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'João', 'Lucas', 'Maria']);
    });
    test("a brincadeira pode ser iniciada se tiver 3 ou mais participantes", () => {
        //Arrange
        render(<RecoilRoot>
                <Rodape />
            </RecoilRoot>)
    
        //Act
        const botao = screen.getByRole("button")
    
        //Assert
        expect(botao).toBeEnabled()
    });

    test("ao clicar no botão, o usuário é redirecionado para a página de sorteio", () => {
        //Arrange
        render(<RecoilRoot>
                <Rodape />
            </RecoilRoot>)
    
        //Act
        const botao = screen.getByRole("button")
        botao.click()
    
        //Assert
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    })
});