import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBar } from "../components/desktop/SideBar/SideBar";
import { MinhaAgenda } from "../screens/desktop/MinhaAgenda/MinhaAgenda";
import { MeuNegocio } from "../screens/desktop/MeuNegocio/MeuNegocio";
import { MeusServicos } from "../screens/desktop/MeusServicos/MeusServicos";

function Router() {
    return (
        <BrowserRouter>
            <div style={{ display: "flex", height: "100vh" }}>
                <SideBar />
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<MinhaAgenda />} />
                        <Route path="/negocio" element={<MeuNegocio />} />
                        <Route path="/servicos" element={<MeusServicos />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export { Router };