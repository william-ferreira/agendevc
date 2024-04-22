import React, { useEffect, useState } from "react";
import { SideBarButton } from "../SideBarButton/SideBarButton";
import logo from "../../../assets/images/logo-white.png";
import { SideBarContainer, Separator, ButtonGrid, Logo, LogoContainer, Logout } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { DateRange, Store, BusinessCenter, ExitToApp } from '@material-ui/icons';

const buttons = [
  { icon: <DateRange />, text: "Minha Agenda", route: "/" },
  { icon: <Store />, text: "Meu Negócio", route: "/negocio" },
  { icon: <BusinessCenter />, text: "Meus Serviços", route: "/servicos" },
];

const SideBar: React.FC = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    // Atualiza o item selecionado com base na rota atual
    const currentButton = buttons.find(button => button.route === location.pathname);
    if (currentButton) {
      setSelectedItem(currentButton.text);
    }
  }, [location]);

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName); // Atualiza o item selecionado
    console.log(`Item clicked: ${itemName}`); // Placeholder para futura navegação ou ação
  };

  return (
    <SideBarContainer>
      <LogoContainer>
        <Logo>
          <img src={logo} alt="Logo" style={{ width: '90%', height: 'auto', padding: '23px 15px 20px'}} />
        </Logo>
      </LogoContainer>
      <Separator />
      <ButtonGrid>
        {buttons.map((button) => (
          <div key={button.text}>
            <Link to={button.route} style={{ textDecoration: 'none' }}>
              <SideBarButton
                leftIcon={button.icon}
                buttonText={button.text}
                isSelected={selectedItem === button.text}
                onClick={() => handleItemClick(button.text)}
              />
            </Link>
          </div>
        ))}
      </ButtonGrid>
      <Logout>
        {/* Incluindo navegação para sair */}
        <Link to="/logout" style={{ textDecoration: 'none' }}>
          <SideBarButton
            leftIcon={<ExitToApp />}
            buttonText="Sair do Sistema"
            isSelected={selectedItem === "Sair do Sistema"}
            onClick={() => handleItemClick("Sair do Sistema")}
          />
        </Link>
      </Logout>
    </SideBarContainer>
  );
};

export { SideBar };