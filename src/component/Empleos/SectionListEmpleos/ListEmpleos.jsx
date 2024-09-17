import { useState } from "react"
import ContentE from "./ContentE"
const ListEmpleos= ()=>{


    return (
        <div className="flex h-5/6 max-h-full shadow-md border-2  bg-white rounded-md">
             <div className="flex h-[95%] overflow-auto     flex-col w-full gap-2 scroll-b snap-x">
                <header className="h-20 text-2xl flex items-center">
                    <h1 >Empleos</h1>
                </header>
                <main className="flex  flex-col  h-full ">
                    
                <ContentE Puesto={"Desarrolador Back-End"} 
                Empresa={"S.A Colombia"} 
                ubicacion={"Colombia, Cartagena "} >
                </ContentE>
                
                <ContentE Puesto={"Desarrolador Back-End"} 
                Empresa={"S.A Colombia"} 
                ubicacion={"Colombia, Cartagena "} 
          >
                </ContentE>
                </main>
             </div>
        </div>
    )
}

export default ListEmpleos