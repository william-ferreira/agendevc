import React from "react";
import {SideBar} from "../../../components/desktop/SideBar/SideBar";
import {CustomButton} from "../../../components/common/CustomButton/CustomButton"
import {ScreenHeader} from "../../../components/desktop/ScreenHeader/ScreenHeader"
import {theme} from "../../../styles/theme";

const MeuNegocio: React.FC = () => {
  return (
    <div style={{ display: "flex", height: "1080px" }}>
      <ScreenHeader screenHeaderText="Meu Negócio"/>
      <div style={{ flexGrow: 1, backgroundColor: theme.COLORS.BACKGROUND_COLOR, padding: "20px" }}>
        {/* Add your agenda content here */}
      </div>
    </div>
  );
};

export {MeuNegocio};