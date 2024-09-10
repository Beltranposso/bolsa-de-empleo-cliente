import Content from './Content/Contet'
import Publicaciones from './Publicaciones/Publicaciones'
import Sugerencias from './Sugerencias/Sugerencias'
import Tendencias from './Tendencias/Tendencias'
const Home = () => {


    return (
        <div className="h-full w-5/6 grid grid-cols-le bg-cyan-50 gap-5 mt-14">
            <div className="flex ">
                <Content></Content>
            </div>

            <div className="flex rounded-md">
                <Publicaciones></Publicaciones>
            </div>

            <div className="flex flex-col h-2/3 m-2  gap-5">
                <Sugerencias></Sugerencias>
                <Tendencias></Tendencias>
            </div>
        </div>
    )



}


export default Home

