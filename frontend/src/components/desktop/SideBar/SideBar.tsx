import React, {useState} from "react";
import { SideBarButton } from "../SideBarButton/SideBarButton";
import logo from "../../../assets/images/logo-orange.png";
import {SideBarContainer, Separator, MenuItemContainer, MenuItemText, ButtonGrid} from "./styles";
import {Link, useNavigate} from "react-router-dom";

import {DateRange, Store, BusinessCenter, ExitToApp} from '@material-ui/icons'

const buttons = [
  { icon: <DateRange/>, text: "Minha Agenda" },
  { icon: <Store/>, text: "Meu Negócio" },
  { icon: <BusinessCenter/>, text: "Meus Serviços" },
  { icon: <ExitToApp/>, text: "Sair do Sistema" }
];

const SideBar: React.FC = () => {
  //const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("");

  //const handleItemClick = (itemName: string, path: string) => {
    //setSelectedItem(itemName);
    //navigate(path);
  //};

  return (
    <SideBarContainer>

      <Separator />
      <ButtonGrid>
      {buttons.map((button, index) => (
        <SideBarButton
          key={index}
          leftIcon={button.icon}
          buttonText={button.text}
          isSelected={false}
        />
      ))}
      </ButtonGrid>
    </SideBarContainer>
  );
};

export {SideBar};