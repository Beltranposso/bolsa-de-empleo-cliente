import Home from "../app/home/Home";
import Empleos from "../app/Empleos/Empleos";
import Login from "../app/Login/Login";
import SignUp from "../app/Register/SignUp";
import React from 'react';
export { Home, Empleos, Login, SignUp };

const home = React.lazy(() => import("../app/home/Home"));
const empleos = React.lazy(() => import("../app/Empleos/Empleos"));
const login = React.lazy(() => import("../app/Login/Login"));
const signUp = React.lazy(() => import("../app/Register/SignUp"));


