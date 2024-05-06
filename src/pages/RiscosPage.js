import React from "react";
import { Link } from "react-router-dom";
import Riscos from "../assets/Riscos.jpg";

export const RiscosPage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Riscos Associados ao Descarte Inadequado
          </h2>
          <p className="text-lg">
            O descarte inadequado de resíduos eletrônicos apresenta uma série de
            riscos significativos para o meio ambiente e para a saúde humana.
            Dispositivos eletrônicos, como celulares, computadores e baterias,
            frequentemente contêm substâncias tóxicas, como chumbo, mercúrio,
            cádmio e retardadores de chama bromados, que podem contaminar o
            solo, a água e o ar quando descartados de forma incorreta. <br />{" "}
            Essas substâncias químicas podem infiltrar-se nos lençóis freáticos,
            afetar a flora e a fauna locais e até mesmo entrar na cadeia
            alimentar, representando uma séria ameaça para os ecossistemas e
            para a saúde humana. Além disso, o descarte inadequado de
            eletrônicos pode contribuir para a poluição visual e aumentar o
            risco de incêndios em lixões e aterros sanitários. Portanto, é
            crucial conscientizar sobre os perigos do descarte inadequado e
            promover práticas de reciclagem responsáveis para mitigar esses
            impactos negativos e proteger o meio ambiente e a saúde pública.
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
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-700">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default RiscosPage;
