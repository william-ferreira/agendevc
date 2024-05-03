import React from "react";
import {cadastro4} from "../../../../utils/constants"
import { PrimeiroAcessoBackground } from "../../../../components/desktop/PrimeiroAcessoBackground/PrimeiroAcessoBackground";
import { CadastroServicosComponent } from "../../../../components/desktop/CadastroServicosComponent/CadastroServicosComponent";

const CadastroServicos: React.FC = () => {
  return (
    <div>
        <PrimeiroAcessoBackground instrucaoCadastroText={cadastro4}/>
        <CadastroServicosComponent></CadastroServicosComponent>
    </div>
  );
};

export {CadastroServicos};