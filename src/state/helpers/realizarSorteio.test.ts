import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o proprio nome', () => {
        const participante = [
            'participante 1',
            'participante 2',
            'participante 3'
        ]

        const sorteio = realizarSorteio(participante)
        participante.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })

    })
})