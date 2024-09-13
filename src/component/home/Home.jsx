import Content from './Content/Contet'
import Publicaciones from './Publicaciones/Publicaciones'
import Sugerencias from './Sugerencias/Sugerencias'
import Tendencias from './Tendencias/Tendencias'
const Home = () => {


    return (
        <div className=" w-5/6 grid grid-cols-le h-full  gap-5 mt-10 ">
            <div className="flex ">
                <Content></Content>
            </div>

            <div className="flex rounded-md">
                <Publicaciones></Publicaciones>
            </div>

            <div className=" sticky top-3 flex flex-col h-2/3 m-2  gap-5  ">
                <Sugerencias></Sugerencias>
                <Tendencias></Tendencias>
       
            </div>
        </div>
    )



}


export default Home

