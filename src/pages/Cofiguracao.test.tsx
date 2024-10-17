import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Configuracao from "./Configuracao";

describe("a pagina de configuração", () => {
  test("deve ser renderizada corretamente", () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();


  });
});
