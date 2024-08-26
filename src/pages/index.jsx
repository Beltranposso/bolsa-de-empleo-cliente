import Home from '../component/home/Home'
import Empleos from '../component/Empleos/Empleos'
import React from "react"
export {Home,Empleos}


const home = React.lazy(() => import('../component/home/Home'))
const empleos = React.lazy(() => import('../component/Empleos/Empleos'))

