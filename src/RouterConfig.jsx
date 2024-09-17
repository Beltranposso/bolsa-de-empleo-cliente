import { Empleos, Home, Login, SignUp} from "./pages";

export const routes = [
  {
    path: "/Home",
    component: <Home></Home>,
  },
  {
    path: "/Empleos",
    component: <Empleos></Empleos>,
  },
  {
    path: "/Login",
    component: <Login></Login>,
  },
  {
    path: "/SignUp",
    component: <SignUp></SignUp>
  }
];
