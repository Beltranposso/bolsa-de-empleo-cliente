import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-6 text-sm text-gray-600">
          <li>
            <a href="/terms" className="hover:underline">
              Condiciones de uso
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:underline">
              Política de privacidad
            </a>
          </li>
          <li>
            <a href="/community" className="hover:underline">
              Pautas comunitarias
            </a>
          </li>
          <li>
            <a href="/cookies" className="hover:underline">
              Política de cookies
            </a>
          </li>
          <li>
            <a href="/copyright" className="hover:underline">
              Política de copyright
            </a>
          </li>
          <li>
            <a href="/feedback" className="hover:underline">
              Enviar comentarios
            </a>
          </li>
          <li>
            <a href="/language" className="hover:underline">
              Idioma
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;