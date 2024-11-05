import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';
import Sorteio from './Sorteio';
import { useResultadoDoSorteio } from '../../state/hooks/useResultadoDoSorteio';


jest.mock("../../state/hooks/useListaDeParticipantes", () => {
    return {
        useListaDeParticipantes: jest.fn()
    };
});

jest.mock("../../state/hooks/useResultadoDoSorteio", () => {
    return {
        useResultadoDoSorteio: jest.fn()
    };
});

describe('na pagina de sorteio', () => {
    const listaParticipantes = [
        'participante 1',
        'participante 2',
        'participante 3'
    ]

    const resultado = new Map([
        ['participante 1', 'participante 2'],
        ['participante 2', 'participante 3'],
        ['participante 3', 'participante 1']
    ])

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(listaParticipantes);
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
    });

    test('todos os participantes podem exibir o seu amigo secreto', () => {

        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>)

        const opcoes = screen.getAllByRole('option')
        expect(opcoes).toHaveLength(listaParticipantes.length + 1)
    })

    test('o amigo secreto é exibido para cada participante', () => {
            
            render(<RecoilRoot>
                <Sorteio />
            </RecoilRoot>)
    
            const select = screen.getByPlaceholderText('Selecione o seu nome')

            fireEvent.change(select, {
                target: {
                    value: listaParticipantes[0]
                }
            })

            const botao = screen.getByRole('button')

            fireEvent.click(botao)

            const amigoSecreto = screen.getByRole('alert')

            expect(amigoSecreto).toBeInTheDocument()
    })


})