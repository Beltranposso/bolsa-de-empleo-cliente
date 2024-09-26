import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" w-full flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg flex gap-4 items-center">
          <div className="flex justify-center items-center">
            <div className="max-h-[300px] max-w-[300px]">
              <img
                src="/src/img/Untitled.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-72 bg-white p-8 shadow-md border-2 rounded-md items-center">
            <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="gmail"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Gmail
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    id="gmail"
                    name="gmail"
                    type="email"
                    required
                    className="bg-gray-300 pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="bg-gray-300 pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="text-sm mb-4">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ¿Se te olvido la contraseña?
                </a>
              </div>
              <div className="flex space-x-4">
                <Link
                  to="/Login"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Iniciar
                </Link>
                <Link
                  to="/SignUp"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Registrate
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
