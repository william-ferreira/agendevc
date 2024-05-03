import React from "react";
import {cadastro2} from "../../../../utils/constants"
import { PrimeiroAcessoBackground } from "../../../../components/desktop/PrimeiroAcessoBackground/PrimeiroAcessoBackground";
import { InformacoesNegocio } from "../../../../components/desktop/InformacoesNegocio/InformacoesNegocio";
import { HorariosFuncionamento } from "../../../../components/desktop/HorariosFuncionamento/HorariosFuncionamento";

const CadastroHorariosFuncionamento: React.FC = () => {
  return (
    <div>
        <PrimeiroAcessoBackground instrucaoCadastroText={cadastro2}/>
        <HorariosFuncionamento></HorariosFuncionamento>
    </div>
  );
};

export {CadastroHorariosFuncionamento};