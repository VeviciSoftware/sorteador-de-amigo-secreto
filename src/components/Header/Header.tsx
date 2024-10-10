import styled from 'styled-components';
import LogoImage from "../../assets/images/logo.png";
import Partipante from "../../assets/images/participante.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #0b53c7;
  width: 100%;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;
`;

const Participante = styled.img`
  width: 300px;
  height: auto;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src={LogoImage} alt="Logo" />
            <Participante src={Partipante} alt="Participante" />
        </HeaderContainer>
    );
}

export default Header;