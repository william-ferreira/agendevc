/**
 *  AgendeVc - Plataforma de agendamento de serviços.
 *  Software desenvolvido por Williamberg Ferreira
 */

import React from 'react';

import {ThemeProvider} from 'styled-components';
import {MinhaAgenda} from './screens/desktop/MinhaAgenda/MinhaAgenda'
import {SideBarButton} from './components/desktop/SideBarButton/SideBarButton'
import { DateRange } from '@material-ui/icons';

import {theme} from './styles/theme'
import { Router } from './router/Router';
import { RouterFirstLogin } from './router/RouterFirstLogin';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router></Router>
    </ThemeProvider>
  );
}

export default App;