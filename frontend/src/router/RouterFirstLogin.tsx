import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CadastroNegocio } from "../screens/desktop/PrimeiroAcesso/CadastroNegocio/CadastroNegocio";
import { CadastroHorariosFuncionamento } from "../screens/desktop/PrimeiroAcesso/CadastroHorariosFuncionamento/CadastroHorariosFuncionamento";
import { CadastroFormasPagamento } from "../screens/desktop/PrimeiroAcesso/CadastroFormasPagamento/CadastroFormasPagamento";
import { CadastroServicos } from "../screens/desktop/PrimeiroAcesso/CadastroServicos/CadastroServicos";
import { MinhaAgenda } from "../screens/desktop/MinhaAgenda/MinhaAgenda";
import { SideBar } from "../components/desktop/SideBar/SideBar";
import { Router } from "./Router";

function RouterFirstLogin() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cadastroNegocio" element={<CadastroNegocio />} />
                <Route path="/cadastroHorarios" element={<CadastroHorariosFuncionamento />} />
                <Route path="/cadastroFormasPg" element={<CadastroFormasPagamento />} />
                <Route path="/cadastroServicos" element={<CadastroServicos />} />
            </Routes>
        </BrowserRouter>
    );
}

export { RouterFirstLogin };