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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MinhaAgenda></MinhaAgenda>
    </ThemeProvider>
  );
}

export default App;
