import React from "react";
import {SideBar} from "../../../components/desktop/SideBar/SideBar";
import {theme} from "../../../styles/theme";

const MinhaAgenda: React.FC = () => {
  return (
    <div style={{ display: "flex", height: "1080px" }}>
      <SideBar />
      <div style={{ flexGrow: 1, backgroundColor: theme.COLORS.BACKGROUND_COLOR, padding: "20px" }}>
        <h1>Minha Agenda</h1>
        {/* Add your agenda content here */}
      </div>
    </div>
  );
};

export {MinhaAgenda};