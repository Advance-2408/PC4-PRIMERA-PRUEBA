const { useEffect } = React;

function Header() {
  return (
    <header className="w-full bg-orange-500 flex flex-wrap justify-between items-center px-4 md:px-10 py-3 text-white shadow-md">

      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.href = 'index.html'}>
        <img src="imagenes/logo.jpg" alt="Logo" className="h-14 w-14 md:h-20 md:w-20 rounded-full shadow" />
        <h1 className="font-[Fredoka_One] text-lg md:text-2xl">Happy Paws</h1>
      </div>

      <nav className="flex flex-nowrap gap-3 md:gap-6 text-sm md:text-lg mt-3 md:mt-0 overflow-x-auto no-scrollbar font-semibold">
        <button className="nav-btn bg-white text-black px-3 py-1 rounded-lg" onClick={() => window.location.href='index.html'}>Home</button>
        <button className="nav-btn px-3 py-1 rounded-lg hover:bg-white hover:text-black" onClick={() => window.location.href='productos.html'}>Productos</button>
        <button className="nav-btn px-3 py-1 rounded-lg hover:bg-white hover:text-black" onClick={() => window.location.href='contactanos.html'}>Contáctanos</button>
        <button className="nav-btn px-3 py-1 rounded-lg hover:bg-white hover:text-black" onClick={() => window.location.href='nosotros.html'}>Nosotros</button>
        <button className="nav-btn px-3 py-1 rounded-lg hover:bg-white hover:text-black" onClick={() => window.location.href='blog.html'}>Blog</button>
        <button className="nav-btn px-3 py-1 rounded-lg hover:bg-white hover:text-black" onClick={() => window.location.href='juego.html'}>Juego</button>
      </nav>

      <div className="hidden md:flex items-center space-x-3 font-semibold">
        <button className="bg-white text-black px-3 py-1 rounded-md">Iniciar sesión</button>
        <button className="bg-white text-black px-3 py-1 rounded-md">Registrarse</button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-6 md:px-10 flex flex-wrap justify-between gap-6 mt-0">
      <div className="max-w-xs">
        <h2 className="font-[Fredoka_One] text-xl mb-2">Happy Paws</h2>
        <p className="text-xs md:text-sm leading-relaxed">
          Tu tienda de confianza para consentir a tus mascotas. <br/>
          Productos de calidad, amor y cuidado para cada patita feliz.
        </p>
      </div>

      <div>
        <h2 className="font-[Fredoka_One] text-xl mb-2">Encuéntranos en:</h2>
        <ul className="space-y-1 text-xs md:text-sm">
          <li>📍 Calle mascotitas 333</li>
          <li>📞 +51 999 888 777</li>
          <li>✉️ happypaws@contact.pe</li>
        </ul>
      </div>

      <div>
        <h2 className="font-[Fredoka_One] text-xl mb-2">Síguenos en:</h2>
        <div className="flex gap-4 text-xl md:text-2xl">
          <a href="#" className="hover:text-orange-400">📘</a>
          <a href="#" className="hover:text-orange-400">📷</a>
          <a href="#" className="hover:text-orange-400">🐦</a>
          <a href="#" className="hover:text-orange-400">💬</a>
        </div>
      </div>
    </footer>
  );
}

function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-grow relative w-full">
        <img 
          src="imagenes/fondo.jpg" 
          alt="Mascotas" 
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-4">
          <button className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full font-semibold shadow hover:bg-white transition"
            onClick={() => window.location.href='productos.html'}>Productos para Perros</button>
          <button className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full font-semibold shadow hover:bg-white transition"
            onClick={() => window.location.href='productos.html'}>Productos para Gatos</button>
          <button className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full font-semibold shadow hover:bg-white transition"
            onClick={() => window.location.href='productos.html'}>Productos para Conejos</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
