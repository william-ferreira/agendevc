/**
 *  AgendeVc - Plataforma de agendamento de serviços.
 *  Software desenvolvido por Williamberg Ferreira
 */

import 'styled-components';
import {theme} from './theme';

declare module 'styled-components' {
    type ThemeType = typeof theme;
    export interface DefaultTheme extends ThemeType {}
};