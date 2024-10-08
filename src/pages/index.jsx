import Home from "../component/home/Home";
import Empleos from "../component/Empleos/Empleos";
import Login from "../component/Login/Login";
import SignUp from "../component/Register/SignUp";
import React from 'react';
export { Home, Empleos, Login, SignUp };

const home = React.lazy(() => import("../component/home/Home"));
const empleos = React.lazy(() => import("../component/Empleos/Empleos"));
const login = React.lazy(() => import("../component/Login/Login"));
const signUp = React.lazy(() => import("../component/Register/SignUp"));
