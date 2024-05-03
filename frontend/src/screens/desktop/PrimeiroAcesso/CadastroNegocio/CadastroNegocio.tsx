import React from "react";
import {cadastro1} from "../../../../utils/constants"
import { PrimeiroAcessoBackground } from "../../../../components/desktop/PrimeiroAcessoBackground/PrimeiroAcessoBackground";
import { InformacoesNegocio } from "../../../../components/desktop/InformacoesNegocio/InformacoesNegocio";

const CadastroNegocio: React.FC = () => {
  return (
    <div>
        <PrimeiroAcessoBackground instrucaoCadastroText={cadastro1}/>
        <InformacoesNegocio></InformacoesNegocio>
    </div>
  );
};

export {CadastroNegocio};