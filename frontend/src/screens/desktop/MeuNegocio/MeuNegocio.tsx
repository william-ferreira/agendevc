import React from "react";
import {SideBar} from "../../../components/desktop/SideBar/SideBar";
import {CustomButton} from "../../../components/common/CustomButton/CustomButton"
import {ScreenHeader} from "../../../components/desktop/ScreenHeader/ScreenHeader"
import {theme} from "../../../styles/theme";
import { StandardContainer } from "../../../components/common/StandardContainer/StandardContainer";

const informacoesBasicas = [
  { 
    nomeNegocio: "Joãozinho Barbershop", 
    whatsappNegocio: "(83) 9 9999-8888", 
    descricaoNegocio: "A melhor barbearia de CG!" 
  },
];

const horariosFuncionamento = [
  {
    Domingo: "Fechado",
    Segunda: "08:00-12:00, 14:00-18:00",
    Terça: "08:00-12:00, 14:00-18:00",
    Quarta: "08:00-12:00, 14:00-18:00",
    Quinta: "08:00-12:00, 14:00-18:00",
    Sexta: "08:00-12:00, 14:00-18:00",
    Sábado: "08:00-12:00",
  }
]

const MeuNegocio: React.FC = () => {
  return (
    <div style={{ display: "inline-table", height: "100%" }}>
      <ScreenHeader screenHeaderText="Meu Negócio"/>
      <StandardContainer tituloContainer={"Informações do Negócio"} larguraContainer={545} alturaContainer={500}/>
    </div>
  );
};

export {MeuNegocio};