import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"

const Rodape = () => {

    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()

    const iniciarBrincadeira = () => {
        navegarPara('/sorteio')
    }

    return (
        <footer>
            <button disabled={participantes.length < 3} onClick={iniciarBrincadeira}>Iniciar Brincadeira</button>
        </footer>
    )
}

export default Rodape