import React from "react";
import {cadastro3} from "../../../../utils/constants"
import { PrimeiroAcessoBackground } from "../../../../components/desktop/PrimeiroAcessoBackground/PrimeiroAcessoBackground";
import { FormasPagamento } from "../../../../components/desktop/FormasPagamento/FormasPagamento";

const CadastroFormasPagamento: React.FC = () => {
  return (
    <div>
        <PrimeiroAcessoBackground instrucaoCadastroText={cadastro3}/>
        <FormasPagamento></FormasPagamento>
    </div>
  );
};

export {CadastroFormasPagamento};