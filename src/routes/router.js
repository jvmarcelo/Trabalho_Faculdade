import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/homePage";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { BeneficiosPage } from "../pages/BeneficiosPage";
import { RiscosPage } from "../pages/RiscosPage";
import { SolucoesPage } from "../pages/SolucoesPage";
import { DicasPage } from "../pages/DicasPage";
import { LegislacaoPage } from "../pages/LegislacaoPage";
import ExplicacaoPage from "../pages/ExplicacaoPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explicacao" element={<ExplicacaoPage />} />
        <Route path="/beneficios" element={<BeneficiosPage />} />
        <Route path="/riscos" element={<RiscosPage />} />
        <Route path="/solucoes" element={<SolucoesPage />} />
        <Route path="/dicas" element={<DicasPage />} />
        <Route path="/legislacao" element={<LegislacaoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
