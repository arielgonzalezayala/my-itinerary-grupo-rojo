const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-white text-center sm:text-left">
          <p className="text-lg font-semibold">¡Este es el pie de página!</p>
          <p className="text-sm mt-2">© 2023 Todos los derechos reservados.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

