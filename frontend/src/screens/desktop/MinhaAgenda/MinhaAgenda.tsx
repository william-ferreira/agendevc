import React from "react";
import {SideBar} from "../../../components/desktop/SideBar/SideBar";
import {CustomButton} from "../../../components/common/CustomButton/CustomButton"
import {ScreenHeader} from "../../../components/desktop/ScreenHeader/ScreenHeader"
import {theme} from "../../../styles/theme";
import { CardAgendamento } from "../../../components/desktop/CardAgendamento/CardAgendamento";
import { CelulaContainer } from "../../../components/desktop/Agenda/Celula/styles";
import { Celula } from "../../../components/desktop/Agenda/Celula/Celula";

const agendamento = [
  { servico: "Corte de Cabelo", nomeCliente: "João de Barro", whatsappCliente: "(82)95555-2222" },
];


const MinhaAgenda: React.FC = () => {
  return (
    <div style={{ display: "flex", height: "1080px" }}>
      <Celula>
      <CardAgendamento nomeCliente={"João de Barro"} nomeServico="Corte de Cabelo" whatsappCliente="(82)95555-2222"></CardAgendamento>
      </Celula>
      <ScreenHeader screenHeaderText="Minha Agenda"/>
      <div style={{ flexGrow: 1, backgroundColor: theme.COLORS.BACKGROUND_COLOR, padding: "20px" }}>
        {/* Add your agenda content here */}
      </div>
    </div>
  );
};

export {MinhaAgenda};