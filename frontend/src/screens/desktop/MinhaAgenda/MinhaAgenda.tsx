import React from "react";
import {SideBar} from "../../../components/desktop/SideBar/SideBar";
import {CustomButton} from "../../../components/common/CustomButton/CustomButton"
import {ScreenHeader} from "../../../components/desktop/ScreenHeader/ScreenHeader"
import {theme} from "../../../styles/theme";
import { CardAgendamento } from "../../../components/desktop/CardAgendamento/CardAgendamento";
import { CelulaContainer } from "../../../components/desktop/Agenda/Celula/styles";
import { Celula } from "../../../components/desktop/Agenda/Celula/Celula";
import { ColunaContainer } from "../../../components/desktop/Agenda/Coluna/styles";
import { Coluna } from "../../../components/desktop/Agenda/Coluna/Coluna";
import { Linha } from "../../../components/desktop/Agenda/Linha/Linha";
import { AgendaContainer } from "./styles";
import { ControlesAgenda } from "../../../components/desktop/Agenda/ControlesAgenda/ControlesAgenda";

const agendamento = [
  { servico: "Corte de Cabelo", nomeCliente: "Everton da Silva Santos", whatsappCliente: "(82)95555-2222" },
];

const dataHoje = [
  { data: "25/04/2024"},
];


const MinhaAgenda: React.FC = () => {
  return (
    <div style={{ display: "inline-table", height: "100%" }}>
      <ScreenHeader screenHeaderText="Minha Agenda"></ScreenHeader>
      <ControlesAgenda semanaAtual={"14 - 20 de Abril, 2024"}/>
      <div>
        <AgendaContainer>
          <div style={{ display: "inline-table", height: "100%" }}>
            <div style={{display: "flex"}}>
              <Coluna columnName="Horário/Dia"></Coluna>
              <Coluna columnName="Segunda"></Coluna>
            </div>
            <div style={{display: "flex"}}>
              <Linha rowName="08:00"></Linha>
              {agendamento.map((item, index) => (
                <Celula key={index}>
                  <CardAgendamento
                    nomeServico={item.servico}
                    nomeCliente={item.nomeCliente}
                    whatsappCliente={item.whatsappCliente}
                  />
                </Celula>
              ))}
            </div>
          </div>
        </AgendaContainer>
      </div>
    </div>
  );
};

export {MinhaAgenda};