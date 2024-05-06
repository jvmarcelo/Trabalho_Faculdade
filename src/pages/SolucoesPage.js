import React from "react";
import { Link } from "react-router-dom";
import solucoes from "../assets/solucoes.jpeg";

export const SolucoesPage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
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
            Existem diversas soluções eficazes para lidar responsavelmente com
            os resíduos eletrônicos, reduzindo os impactos negativos no meio
            ambiente e na saúde pública. Uma das principais soluções é promover
            a reciclagem de eletrônicos, onde os materiais são desmontados e
            separados para recuperação de componentes valiosos, como metais
            preciosos e plásticos. <br /> Além disso, a reutilização de
            dispositivos eletrônicos ainda funcionais é uma prática importante,
            que pode prolongar sua vida útil e reduzir a demanda por novos
            produtos. Outras soluções incluem a implementação de programas de
            coleta seletiva de resíduos eletrônicos, onde os consumidores podem
            descartar seus dispositivos de forma adequada em pontos de coleta
            específicos. <br /> Educação e conscientização também desempenham um
            papel crucial, informando o público sobre a importância da
            reciclagem e oferecendo orientações sobre como descartar eletrônicos
            de maneira segura e responsável. Ao adotar essas soluções, podemos
            trabalhar juntos para enfrentar os desafios associados aos resíduos
            eletrônicos e promover um futuro mais sustentável e saudável para
            todos.
          </p>
        </div>
      </div>
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-700">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default SolucoesPage;
