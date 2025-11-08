function HeaderNosotros() {
  return (
    <header className="w-full bg-orange-500 flex flex-wrap justify-between items-center px-4 md:px-8 py-3 text-white">
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.href='index.html'}>
        <img src="imagenes/logo.jpg" alt="Logo" className="h-12 w-12 md:h-20 md:w-20 rounded-full p-1" />
        <h1 className="font-[Fredoka_One] text-lg md:text-2xl">Happy Paws</h1>
      </div>
      <nav className="flex overflow-x-auto space-x-3 md:space-x-8 text-sm md:text-lg mt-3 md:mt-0">
        <button onClick={() => window.location.href='index.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Home</button>
        <button onClick={() => window.location.href='productos.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Productos</button>
        <button onClick={() => window.location.href='contactanos.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Contáctanos</button>
        <button className="bg-white text-black px-3 py-1 rounded-lg font-semibold">Nosotros</button>
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

function FooterNosotros() {
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

function NosotrosPage() {
  return (
    <div>
      <HeaderNosotros />
      <section className="px-4 md:px-8 py-10 md:py-16 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-[Fredoka_One] text-center mb-8 md:mb-10 text-orange-500">Acerca de Happy Paws: Donde la Felicidad es una Pata</h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
          <img src="imagenes/p7.jpg" alt="Happy Paws" className="w-full md:w-[450px] rounded-2xl shadow-lg" />
          <div className="max-w-2xl text-base md:text-lg leading-relaxed">
            <p className="mb-4">¡Hola! Somos <strong>Happy Paws</strong>. Más que una Pet Shop, somos un equipo de amantes incondicionales de los animales cuyo único objetivo es hacer la vida de tus mascotas más feliz, saludable y larga.</p>
            <p className="mb-4">Sabemos que tu perro, gato o cualquier otro compañero peludo es parte de tu familia. Por eso, en Happy Paws, no solo vendemos productos: ofrecemos tranquilidad, calidad y la certeza de que estás dándole lo mejor.</p>
          </div>
        </div>

        <div className="mt-10 md:mt-14 max-w-5xl mx-auto space-y-6 md:space-y-8 text-justify">
          <div>
            <h2 className="text-2xl md:text-3xl font-[Fredoka_One] text-orange-500 mb-2 md:mb-3">✨ Nuestra Misión</h2>
            <p>Enriquecer y prolongar la vida de las mascotas a través de una selección rigurosa de productos de la más alta calidad y un servicio al cliente experto y empático.</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-[Fredoka_One] text-orange-500 mb-2 md:mb-3">🌟 Nuestra Visión</h2>
            <p>Ser la Pet Shop de referencia, reconocida por nuestra ética, compromiso con la salud animal y por construir una comunidad de dueños informados y apasionados.</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-[Fredoka_One] text-orange-500 mb-2 md:mb-3">❤️ Los Pilares de Happy Paws</h2>
            <ul className="list-disc ml-6 md:ml-8 space-y-2">
              <li><strong>Calidad y Seguridad:</strong> Solo encontrarás productos que nosotros mismos usaríamos con nuestras propias mascotas.</li>
              <li><strong>Conocimiento Experto:</strong> Nuestro equipo se capacita constantemente en nutrición, comportamiento y salud animal.</li>
              <li><strong>Pasión Genuina:</strong> Amamos lo que hacemos y queremos que lo sientas en cada interacción.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <img src="imagenes/p8.jpg" alt="Equipo Happy Paws" className="w-full md:w-[550px] mx-auto rounded-2xl shadow-lg mb-6" />
          <h3 className="text-xl md:text-2xl font-[Fredoka_One] text-orange-500 mb-2">🤝 Únete a la Familia Happy Paws</h3>
          <p className="text-sm md:text-base">Te invitamos a visitarnos (física o virtualmente) y experimentar la diferencia de una Pet Shop donde cada pata cuenta.</p>
        </div>
      </section>
      <FooterNosotros />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<NosotrosPage />);
