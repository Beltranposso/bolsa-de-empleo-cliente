import CrearPublicacion from "./CrearPublicacion"
import Publicacion from "./Publicacion/Publicacion"
const Publicaciones =  () => {
    return (
       <div className="flex w-full  flex-col   bg-amber-200">
        <header className="w-full flex justify-center p-1">
  <CrearPublicacion></CrearPublicacion>
        </header>
        <main className="p-1">
            <Publicacion> </Publicacion>
        </main>
       </div>
    )
}
export default Publicaciones