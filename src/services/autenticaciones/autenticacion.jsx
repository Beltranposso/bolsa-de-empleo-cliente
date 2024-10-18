import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoter =({
    canActive,
    redirect= '/Empleos',
    Component
    
}) =>{

    if(!canActive){
        return <Navigate  to={redirect} replace />
        
    }
    return Component
    
}
export default ProtectedRoter 