import styled from "styled-components";
import Formulario from "../Formulario/Formulario";

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Body = () => {
    return (
        <BodyContainer>
            <Formulario />
        </BodyContainer>
    );
}

export default Body;