import Formulario from "../components/Formulario/Formulario";
import ListaParticipantes from "../components/ListaParticipantes/ListaParticipante";
import Rodape from "../components/Rodape/Rodape";
import Card from "../components/Card/Card";

const Configuracao = () => {
    return (
        <>
            <Card>
                <section>
                    <Formulario />
                    <ListaParticipantes />
                    <Rodape />
                </section >
            </Card>
        </>
    );
}

export default Configuracao;