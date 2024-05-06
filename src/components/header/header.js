import React from "react";
import { FaRecycle } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" shadow-2xl   flex gap-7 items-center justify-center align-middle px-5 py-10 md:px-48">
      <div className="">
        <FaRecycle className="text-green-500 text-8xl" />
      </div>
      <div className="   text-center font-raleway text-[22px] text-[#393535] justify-self-end">
        Campanha de Reciclagem de Resíduos Eletrônicos: Promovendo Educação de
        Qualidade e Consumo e Produção Responsáveis
      </div>
    </div>
  );
};

export default Header;
