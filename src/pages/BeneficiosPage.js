import React from "react";
import { Link } from "react-router-dom";
import Beneficios from "../assets/Beneficios.jpg";

export const BeneficiosPage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
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
            A adoção de práticas sustentáveis oferece uma série de benefícios
            significativos para o meio ambiente, a economia e a sociedade como
            um todo. Ao optar por métodos de produção, consumo e descarte que
            minimizam o impacto negativo no meio ambiente, podemos reduzir a
            exploração de recursos naturais finitos, diminuir a emissão de
            poluentes e mitigar os efeitos das mudanças climáticas. <br /> Além
            disso, a sustentabilidade promove a eficiência energética,
            incentivando a inovação tecnológica e o desenvolvimento de soluções
            ambientalmente amigáveis. Economicamente, as práticas sustentáveis
            ​​podem resultar em redução de custos operacionais, aumento da
            competitividade empresarial e criação de novas oportunidades de
            emprego em setores como energia renovável, reciclagem e conservação
            de recursos. Socialmente, a sustentabilidade contribui para a
            melhoria da qualidade de vida das comunidades, garantindo acesso
            equitativo aos recursos naturais e promovendo uma sociedade mais
            justa e resiliente. Em suma, a adoção de práticas sustentáveis não
            apenas protege o meio ambiente, mas também oferece uma perspectiva
            promissora para um futuro mais próspero e equilibrado.
          </p>
        </div>
      </div>
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-700">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default BeneficiosPage;
