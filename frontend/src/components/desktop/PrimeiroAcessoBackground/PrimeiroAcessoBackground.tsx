import React from "react";
import logo from "../../../assets/images/logo-white.png";
import {PrimeiroAcessoContainer, Logo} from "./styles";
import { PrimeiroAcessoText } from "../PrimeiroAcessoText/PrimeiroAcessoText";
import {cadastro1} from '../../../utils/constants';

const PrimeiroAcessoBackground: React.FC = () => {
    return (
      <PrimeiroAcessoContainer>
        <Logo>
            <img src={logo} alt="Logo" style={{ width: '40%', height: '40%' }} />
        </Logo>
        <PrimeiroAcessoText textoInstrucao={cadastro1}></PrimeiroAcessoText>
      </PrimeiroAcessoContainer>
    );
  };
  
  export {PrimeiroAcessoBackground};