import React from "react";
import { Link } from "react-router-dom";
import Dicas from "../assets/dicas.jpeg";

export const DicasPage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Dicas para Consumo e Produção Responsáveis
          </h2>
          <p className="text-lg">
            Para promover o consumo e a produção responsáveis, é fundamental
            adotar algumas dicas práticas no dia a dia. Uma delas é priorizar a
            compra de produtos duráveis e de alta qualidade, optando por marcas
            que demonstrem compromisso com a sustentabilidade em todo o ciclo de
            vida do produto. Além disso, é importante considerar a eficiência
            energética e a pegada de carbono dos produtos antes de fazer uma
            compra, escolhendo opções que tenham menor impacto ambiental. Outra
            dica é praticar o consumo consciente, evitando o desperdício e
            optando por reparar e reutilizar itens sempre que possível. <br />{" "}
            Reduzir o uso de produtos descartáveis e recorrer a alternativas
            mais sustentáveis, como embalagens reutilizáveis e produtos a
            granel, também contribui para uma produção e consumo mais
            responsáveis. Por fim, é essencial educar-se continuamente sobre as
            questões ambientais e procurar maneiras de fazer escolhas mais
            sustentáveis em todas as áreas da vida, contribuindo assim para um
            futuro mais equilibrado e saudável para o planeta e suas futuras
            gerações.
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
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-700">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default DicasPage;
