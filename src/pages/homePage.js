import React from "react";

import Importancia from "../assets/Importância.jpeg";
import Beneficios from "../assets/Beneficios.jpg";
import Riscos from "../assets/Riscos.jpg";
import solucoes from "../assets/solucoes.jpeg";
import Legislacao from "../assets/legislacao.jpeg";
import Dicas from "../assets/dicas.jpeg";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className=" gap-4 divide-y-4 divide-slate-400/25 font-roboto font-medium flex flex-col mx-auto">
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Importância da Reciclagem de Resíduos Eletrônicos
          </h2>
          <p className="text-lg">
            Explicação detalhada sobre os impactos ambientais negativos do
            descarte inadequado de resíduos eletrônicos e a necessidade urgente
            de reciclagem para mitigar esses efeitos.
            <Link
              to="/explicacao"
              className=" flex gap-4 text-blue-500 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md "
          style={{
            backgroundImage: `url(${Importancia})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
      </div>

      <div className="flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div
          className=" m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md "
          style={{
            backgroundImage: `url(${Beneficios})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Benefícios da Prática Sustentável
          </h2>
          <p className="text-lg">
            Destacar os benefícios ambientais e econômicos da reciclagem de
            eletrônicos, incluindo a conservação de recursos naturais, a redução
            da poluição e a criação de empregos na indústria de reciclagem.
            <Link
              to="/beneficios"
              className=" flex gap-4 text-blue-500 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
      </div>
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Riscos Associados ao Descarte Inadequado
          </h2>
          <p className="text-lg">
            Informações sobre os perigos da contaminação do solo, da água e do
            ar causados pela decomposição de componentes tóxicos presentes nos
            resíduos eletrônicos.
            <Link
              to="/riscos"
              className=" flex gap-4 text-blue-500 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md "
          style={{
            backgroundImage: `url(${Riscos})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
      </div>

      <div className="flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md shadow-xl"
          style={{
            backgroundImage: `url(${solucoes})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Soluções para Lidar Responsavelmente com os Resíduos Eletrônicos
          </h2>
          <p className="text-lg">
            Orientações práticas sobre como descartar eletrônicos de maneira
            correta, incluindo a identificação de locais de reciclagem e
            programas de coleta de lixo eletrônico.
            <Link
              to="/solucoes"
              className=" flex gap-4 text-blue-500 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
      </div>
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Dicas para Consumo e Produção Responsáveis
          </h2>
          <p className="text-lg">
            Sugestões e orientações sobre como reduzir a geração de resíduos
            eletrônicos por meio de escolhas conscientes de consumo e de
            produtos duráveis e de fácil reciclabilidade.
            <Link
              to="/dicas"
              className="text-blue-500 flex gap-4 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md "
          style={{
            backgroundImage: `url(${Dicas})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
      </div>
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
            Informações sobre regulamentações e políticas relacionadas à gestão
            de resíduos eletrônicos, destacando iniciativas governamentais e
            legislação ambiental aplicável.
            <Link
              to="legislacao"
              className="text-blue-500 flex gap-4 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
