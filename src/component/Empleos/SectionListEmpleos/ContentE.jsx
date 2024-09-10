import { useState } from "react";

const ContentE = ({ Puesto, Empresa, ubicacion }) => {
  const [estado, setestado] = useState(false);

  const styles = estado ? "bg-blue-100" : "";

  return (
    <div className={`flex h-24 ${styles} cursor-pointer hover:bg-gray-100`}>
      <div className="w-24">
        <div className="bg-gray-400 w-14 h-14"></div>
      </div>
      <div onClick={() => setestado(!estado)} className="flex flex-col gap-1 w-full">
        <h2 className="text-lg">{Puesto}</h2>
        <h3 className="text-sm">{Empresa}</h3>
        <p className="text-xs">{ubicacion}</p>
      </div>
    </div>
  );
};

export default ContentE;