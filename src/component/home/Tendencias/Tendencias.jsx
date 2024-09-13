
import Areas from "./Areas"
const Tendencias =  () => {
return(
    <div className=" flex flex-col  sticky border-2 items-center w-full h-2/4  rounded-md bg-white border-gray-300">
        <h1>Tendencias</h1>
        <div className="flex h-full w-full flex-col ">
         <Areas Area={'Tecnologias'}  Descripcion={'Ultimas tendencias en tecnologias'}></Areas>
         <Areas Area={'Automotriz '} Descripcion={'Ultimas tendencias en Automotriz '} ></Areas>
         <Areas Area={'Informatica'} Descripcion={'Ultimas tendencias en Informatica'}></Areas>
        </div>
    </div>
)


}

export default Tendencias