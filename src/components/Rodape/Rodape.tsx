import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import { useSorteador } from "../../state/hooks/useSorteador"

const Rodape = () => {

    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()

    const sortear = useSorteador()

    const iniciarBrincadeira = () => {
        sortear()
        navegarPara('/sorteio')
    }

    return (
        <footer>
            <button disabled={participantes.length < 3} onClick={iniciarBrincadeira}>Iniciar Brincadeira</button>
        </footer>
    )
}

export default Rodape