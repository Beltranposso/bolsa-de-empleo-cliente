
const InfoEmpleo= ()=>{
    return (
        <div className=" flex col-span-2 h-5/6 shadow-md border-2 p-4 bg-white rounded-md ">

            <div className="flex flex-col h-full w-full ">
                <footer className="flex  h-full flex-col gap-10">
              <div className="text-sm">
                <h1>Empresa de colombia</h1>
              </div>
              <div className="text-4xl">
               <h1 >Desarrollador Front end </h1>
              </div>
                 <div className="flex justify-between">
                    Colombia, Cartagena de indias 
                 <p>remoto</p>
                 </div>
               
               <div className="flex pl-3 h-14 items-center">
                    <button className=" w-24 h-10 text-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Aplicar
                    </button>
                </div>
                </footer>
              <div className="h-full">
                <h1 className="text-3xl">Descripcion</h1>
                <p>Descripción del empleo de Desarrollador Front-End:</p>
              Responsabilidades:
              </div>
            </div>
        </div>
    )
}

export default InfoEmpleo