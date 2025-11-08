const { useEffect } = React;

function HeaderContact() {
  return (
    <header className="w-full bg-orange-500 flex flex-wrap justify-between items-center px-4 md:px-8 py-3 text-white">
      <div className="flex items-center space-x-3">
        <img src="imagenes/logo.jpg" alt="Logo" className="h-12 w-12 md:h-20 md:w-20 rounded-full p-1" />
        <h1 className="font-[Fredoka_One] text-lg md:text-2xl cursor-pointer" onClick={() => window.location.href='index.html'}>Happy Paws</h1>
      </div>
      <nav className="flex overflow-x-auto space-x-3 md:space-x-6 text-sm md:text-lg mt-3 md:mt-0">
        <button onClick={() => window.location.href='index.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Home</button>
        <button onClick={() => window.location.href='productos.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Productos</button>
        <button className="bg-white text-black px-3 py-1 rounded-lg font-semibold">Contactanos</button>
        <button onClick={() => window.location.href='nosotros.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Nosotros</button>
        <button onClick={() => window.location.href='blog.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Blog</button>
        <button onClick={() => window.location.href='juego.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Juego</button>
      </nav>

      <div className="flex items-center space-x-3 mt-3 md:mt-0">
        <button className="bg-white text-black px-3 py-1 rounded-md font-semibold">Iniciar sesión</button>
        <button className="bg-white text-black px-3 py-1 rounded-md font-semibold">Registrarse</button>
      </div>
    </header>
  );
}

function FooterContact() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-4 md:px-8 flex flex-wrap justify-between gap-6 mt-12">
      <div className="min-w-[200px]">
        <h2 className="font-[Fredoka_One] text-xl mb-2">Happy Paws</h2>
        <p className="text-xs md:text-sm leading-relaxed">Tu tienda de confianza para consentir a tus mascotas.<br/>Productos de calidad, amor y cuidado para cada patita feliz.</p>
      </div>
      <div className="min-w-[180px]">
        <h2 className="font-[Fredoka_One] text-xl mb-2">Encuéntranos en:</h2>
        <ul className="space-y-1 text-xs md:text-sm">
          <li>📍 Calle mascotitas 333</li>
          <li>📞 +51 999 888 777</li>
          <li>✉️ happypaws@contact.pe</li>
        </ul>
      </div>
      <div className="min-w-[160px]">
        <h2 className="font-[Fredoka_One] text-xl mb-2">Síguenos en:</h2>
        <div className="flex space-x-4 text-xl md:text-2xl">
          <a href="#" className="hover:text-orange-400">📘</a>
          <a href="#" className="hover:text-orange-400">📷</a>
          <a href="#" className="hover:text-orange-400">🐦</a>
          <a href="#" className="hover:text-orange-400">💬</a>
        </div>
      </div>
    </footer>
  );
}

function ContactanosPage() {
  useEffect(() => {

  }, []);

  return (
    <div>
      <HeaderContact />
      <section className="w-full flex flex-wrap justify-center items-start gap-6 mt-8 px-4 md:px-8">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h2 className="text-2xl font-[Fredoka_One] text-orange-500 mb-5 text-center">Contáctanos</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Nombre</label>
              <input type="text" placeholder="Tu nombre" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Correo electrónico</label>
              <input type="email" placeholder="correo@ejemplo.com" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Teléfono</label>
              <input type="tel" placeholder="+51 999 888 777" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Mensaje</label>
              <textarea rows="5" placeholder="Escribe tu mensaje aquí..." className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <button type="button" className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition-all">Enviar</button>
          </form>
        </div>

        <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.794864951809!2d-77.0359423!3d-12.060121999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8be91b4e639%3A0x6a78e4aebf84d773!2sPet%20Center!5e0!3m2!1ses!2spe!4v1698297539214!5m2!1ses!2spe"
            width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
      </section>

      <FooterContact />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ContactanosPage />);
