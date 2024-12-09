import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import { useState } from "react"
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio"

const Sorteio = () => {

    const participantes = useListaDeParticipantes()

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoDoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)            
        }
    }

    return (
        <section>
            <form onSubmit={sortear}>
                <select 
                required 
                name="participante" 
                id="participante"
                placeholder="Selecione o seu nome"
                value={participanteDaVez}
                onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    <option value="">Selecione o seu nome</option>
                    {participantes.map(participante =>
                        <option key={participante} value={participante}>{participante}</option>
                    )}
                </select>
                <button>Sortear</button>
            </form>
            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        </section>
    )
}

export default Sorteio