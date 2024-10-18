

import Layout from '../../components/ui/layouts/Nagvar'
import Content from './ContentHome'
import ProtectedRoter from '../../services/autenticaciones/autenticacion'
const Home = () => {

 const Estado = !!localStorage.getItem("token");
 console.log(Estado)

 console.log(Estado)

    return (
        <Layout component={Estado ? <Content/> : "hola"}></Layout>
    )



}


export default Home

