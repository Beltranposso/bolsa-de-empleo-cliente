import CrearPublicacion from "./CreacionDepublicacion/CrearPublicacion"
import Publicacion from "./Publicacion/Publicacion"
const Publicaciones =  () => {
    return (
       <div className="flex w-full  flex-col h-dvh  ">
        <header className="w-full flex justify-center p-1">
  <CrearPublicacion></CrearPublicacion>
        </header>
        <main className="p-1 snap-y ">
            <Publicacion> </Publicacion>
            <Publicacion> </Publicacion>
            <Publicacion> </Publicacion>
            <Publicacion> </Publicacion>          
        </main>
       </div>
    )
}
export default Publicaciones