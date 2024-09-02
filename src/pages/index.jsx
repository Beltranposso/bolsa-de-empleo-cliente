import Home from '../component/home/Home'
import Empleos from '../component/Empleos/Empleos'
import Notificaciones from '../component/Notificaciones/Notificaciones'
import React from "react"
export {Home,Empleos,Notificaciones}


const home = React.lazy(() => import('../component/home/Home'))
const empleos = React.lazy(() => import('../component/Empleos/Empleos'))
const notificaciones = React.lazy(() => import('../component/Notificaciones/Notificaciones'))
