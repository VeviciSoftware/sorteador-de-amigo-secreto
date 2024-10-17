import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from "./ListaParticipante";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

jest.mock("../../state/hooks/useListaDeParticipantes", () => {
    return {
        useListaDeParticipantes: jest.fn()
    };
});

describe("Descrevendo o comportamento do ListaParticipantes.tsx", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("uma lista vazia de participantes", () => {
    //Arrange
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    //Act
    const itens = screen.queryAllByRole("listitem");

    //Assert
    expect(itens).toHaveLength(0);
  });
});

describe("quando a lista de participantes contem participantes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(["Lucas", "João"]);
  });

  test("a lista deve ser exibida", () => {
    //Arrange
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    //Act
    const itens = screen.queryAllByRole("listitem");

    //Assert
    expect(itens).toHaveLength(2);
  });
});
