import React from "react";
import { Link } from "react-router-dom";
import Importancia from "../assets/Importância.jpeg";

export const ExplicacaoPage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Importância da Reciclagem de Resíduos Eletrônicos
          </h2>
          <p className="text-lg">
            A reciclagem de resíduos eletrônicos é de vital importância para
            mitigar os impactos negativos que esses materiais podem causar ao
            meio ambiente e à saúde humana. Dispositivos eletrônicos descartados
            de forma inadequada podem conter uma variedade de substâncias
            tóxicas, como chumbo, mercúrio e cádmio, que podem contaminar o
            solo, a água e o ar, representando sérios riscos à saúde pública e à
            biodiversidade. <br /> Além disso, a reciclagem de resíduos
            eletrônicos reduz a necessidade de extrair novos recursos naturais,
            contribuindo para a conservação de matérias-primas preciosas e a
            redução da pegada ecológica da sociedade moderna. Portanto, ao
            promover a reciclagem de eletrônicos, estamos não apenas evitando a
            contaminação ambiental, mas também avançando em direção a uma
            economia mais circular e sustentável.
          </p>
        </div>
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md"
          style={{
            backgroundImage: `url(${Importancia})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
      </div>
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-700">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default ExplicacaoPage;
