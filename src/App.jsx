import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { routes } from "./RouterConfig";
import "./app.css";
function App() {
  return (
    <BrowserRouter>
      <div className="h-full">
        <div className=" h-16 bg-slate-50 flex justify-center items-center ">
          <div className="flex gap-12">
            <Link to="/Home" className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-home"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
              <p>Home</p>
            </Link>
            <Link to="/Empleos" className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <path d="M12 12l0 .01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
              </svg>
              <p>Empleos</p>
            </Link>
            <Link className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-bell"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
              <p>Notificaciones</p>
            </Link>
          </div>
        </div>
        <div className="absolute top-3 right-28">
          <Link to="/login" className="flex flex-col items-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Login
            </button>
          </Link>
        </div>
        <div className="absolute top-3 right-1">
          <Link to="/SignUp" className="flex flex-col items-center">
            <button className="bg-gray-300 text-white px-6 py-2 rounded-md hover:bg-gray-600">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      <div className="h-screen">
        {
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
