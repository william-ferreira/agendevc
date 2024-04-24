import React from "react";
import {theme} from "../../../styles/theme";
import logo from "../../../assets/images/logo-white.png";
import {SplashScreenContainer, Logo} from "./styles";

const SplashScreen: React.FC = () => {
    return (
      <SplashScreenContainer>
        <Logo>
            <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
        </Logo>
      </SplashScreenContainer>
    );
  };
  
  export {SplashScreen};