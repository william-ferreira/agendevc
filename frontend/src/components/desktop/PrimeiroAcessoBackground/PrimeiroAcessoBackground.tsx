import React from "react";
import logo from "../../../assets/images/logo-white.png";
import {PrimeiroAcessoContainer, Logo} from "./styles";
import { PrimeiroAcessoText } from "../PrimeiroAcessoText/PrimeiroAcessoText";

interface PrimeiroAcessoProps {
  instrucaoCadastroText: string;
  children?: React.ReactNode;
}

const PrimeiroAcessoBackground: React.FC<PrimeiroAcessoProps> = ({
  instrucaoCadastroText 
}) => {
    return (
      <PrimeiroAcessoContainer>
        <Logo>
            <img src={logo} alt="Logo" style={{ width: '40%', height: '40%' }} />
        </Logo>
        <PrimeiroAcessoText textoInstrucao={instrucaoCadastroText}></PrimeiroAcessoText>
      </PrimeiroAcessoContainer>
    );
  };
  
  export {PrimeiroAcessoBackground};