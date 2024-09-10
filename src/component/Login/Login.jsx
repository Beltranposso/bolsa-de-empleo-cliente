import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión
    console.log("Login attempt", { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md flex">
          {/* Logo a la izquierda */}
          <div className="mr-8">
            {/* Reemplaza esta div con tu logo */}
            <div className="w-28 h-28  rounded-lg flex items-center justify-center">
              <img src="/src/img/Untitled.png" alt="" />
            </div>
          </div>

          {/* Formulario a la derecha */}
          <div className="w-72">
            <h2 className="text-2xl font-bold mb-6">Gmail</h2>
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
                    className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                    className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="text-sm mb-4">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ¿se te olvido contraseña?
                </a>
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Iniciar
                </button>
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-black-400 hover:text-black-500">
              Condiciones de uso
            </a>
            <a href="#" className="text-black-400 hover:text-black-500">
              Política de privacidad
            </a>
            <a href="#" className="text-black-400 hover:text-black-500">
              Pautas comunitarias
            </a>
            <a href="#" className="text-black-400 hover:text-black-500">
              Política de cookies
            </a>
            <a href="#" className="text-black-400 hover:text-black-500">
              Política de copyright
            </a>
            <a href="#" className="text-black-400 hover:text-black-500">
              Enviar comentarios
            </a>
            <a href="#" className="text-black-400 hover:text-black-500">
              Idioma
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
