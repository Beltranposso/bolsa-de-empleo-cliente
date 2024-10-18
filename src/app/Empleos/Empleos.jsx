
import Content from "./Content"
import Layout from "../../components/ui/layouts/Nagvar"
import Segure from "/src/services/autenticaciones/autenticacion"

const Empleos = ()=>{
const  estado = localStorage.getItem("token");

    return (
       <Layout component={<Content/>}></Layout>
    )
}




export default Empleos;