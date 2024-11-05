import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

jest.mock("../../state/hooks/useListaDeParticipantes", () => {
    return {
        useListaDeParticipantes: jest.fn()
    };
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavegacao
}));

jest.mock("../../state/hooks/useSorteador", () => {
    return {
        useSorteador: () => mockSorteio
    };
});

describe("Quando não existem participantes suficientes", () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
    });

    test("a brincadeira não pode ser iniciada se tiver menos que 3 participantes", () => {
        render(
            <BrowserRouter>
                <RecoilRoot>
                    <Rodape />
                </RecoilRoot>
            </BrowserRouter>
        );

        const botao = screen.getByRole("button");
        expect(botao).toBeDisabled();
    });
});

describe("Quando existem participantes suficientes", () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'João', 'Lucas', 'Maria']);
    });

    test("a brincadeira pode ser iniciada se tiver 3 ou mais participantes", () => {
        render(
            <BrowserRouter>
                <RecoilRoot>
                    <Rodape />
                </RecoilRoot>
            </BrowserRouter>
        );

        const botao = screen.getByRole("button");
        expect(botao).toBeEnabled();
    });

    test("ao clicar no botão, o usuário é redirecionado para a página de sorteio", () => {
        render(
            <BrowserRouter>
                <RecoilRoot>
                    <Rodape />
                </RecoilRoot>
            </BrowserRouter>
        );

        const botao = screen.getByRole("button");
        botao.click();

        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    });
});