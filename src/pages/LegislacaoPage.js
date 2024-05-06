import React from "react";
import { Link } from "react-router-dom";
import Legislacao from "../assets/legislacao.jpeg";

export const LegislacaoPage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md shadow-xl"
          style={{
            backgroundImage: `url(${Legislacao})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Legislação e Políticas Ambientais
          </h2>
          <p className="text-lg">
            A legislação e as políticas ambientais desempenham um papel crucial
            na gestão e na regulamentação dos resíduos eletrônicos. Em muitos
            países, existem leis específicas que exigem a coleta, o tratamento e
            a reciclagem adequada desses materiais, visando proteger o meio
            ambiente e a saúde pública. Essas legislações estabelecem padrões
            para a disposição segura de eletrônicos, bem como para a gestão
            responsável de substâncias tóxicas presentes nesses dispositivos.{" "}
            <br /> Além disso, políticas ambientais incentivam a
            responsabilidade compartilhada entre fabricantes, consumidores e
            autoridades governamentais, promovendo a implementação de programas
            de reciclagem e a adoção de práticas sustentáveis ao longo de toda a
            cadeia de suprimentos. Ao garantir o cumprimento dessas leis e
            políticas, podemos proteger o meio ambiente, reduzir os impactos
            negativos dos resíduos eletrônicos e promover uma economia mais
            circular e sustentável.
          </p>
        </div>
      </div>
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-700">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default LegislacaoPage;
