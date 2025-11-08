const { useState, useEffect } = React;

function HeaderBlog() {
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
        <button onClick={() => window.location.href='nosotros.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Nosotros</button>
        <button className="bg-white text-black px-3 py-1 rounded-lg font-semibold">Blog</button>
        <button onClick={() => window.location.href='juego.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Juego</button>
      </nav>
      <div className="flex items-center space-x-3 mt-3 md:mt-0">
        <button className="bg-white text-black px-3 py-1 rounded-md font-semibold">Iniciar sesión</button>
        <button className="bg-white text-black px-3 py-1 rounded-md font-semibold">Registrarse</button>
      </div>
    </header>
  );
}

function FooterBlog() {
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

function BlogPage() {
  const [data, setData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch('blog.json')
      .then(r => r.json())
      .then(d => setData(d))
      .catch(err => {
        console.error('Error blog.json', err);
        setData({
          1: { titulo: 'Alimentación Saludable', imagen: 'imagenes/p9.jpg', texto: 'Contenido ampliado de ejemplo...' },
          2: { titulo: 'Juegos y Ejercicio', imagen: 'imagenes/p10.jpg', texto: 'Contenido ampliado de ejemplo...' },
          3: { titulo: 'Cuidado y Bienestar', imagen: 'imagenes/p11.jpg', texto: 'Contenido ampliado de ejemplo...' }
        });
      });
  }, []);

  function openModal(id) {
    setActive(data[id]);
    setModalOpen(true);

    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    setModalOpen(false);
    setActive(null);
    document.body.style.overflow = '';
  }

  return (
    <div>
      <HeaderBlog />
      <section className="px-4 md:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-[Fredoka_One] text-center mb-6 text-orange-500">El Rincón de las Patas Felices</h1>
        <p className="text-center text-lg mb-8 max-w-3xl mx-auto">¡Bienvenido a la fuente de consejos para padres de mascotas! El Blog de Happy Paws es tu recurso de confianza para aprender, inspirarte y asegurarte de que tu mascota viva su vida más feliz y saludable.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {[1,2,3].map(id => {
            const item = data[id] || {};
            return (
              <article key={id} className="bg-white rounded-2xl shadow-md overflow-hidden w-[300px]">
                <img src={item.imagen || `imagenes/p${8+id}.jpg`} alt={item.titulo || 'blog'} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-[Fredoka_One] text-orange-500 mb-2">{item.titulo || 'Artículo'}</h3>
                  <p className="text-sm text-gray-700 mb-3">{item.texto ? item.texto.slice(0,90) + '...' : 'Resumen del artículo...'}</p>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition-all" onClick={() => openModal(id)}>Leer más</button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <FooterBlog />

      <div className={`${modalOpen ? '' : 'hidden'} fixed inset-0 z-50 flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"></div>
        <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-[90%] max-h-[90vh] overflow-y-auto p-5 transform transition-all scale-95 opacity-0 animate-modal-open">
          <button onClick={closeModal} className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-black">✖</button>
          {active && (
            <>
              <img src={active.imagen} alt={active.titulo} className="w-full h-56 object-cover rounded-lg shadow-md" />
              <h2 className="text-2xl md:text-3xl font-[Fredoka_One] text-orange-500 mt-4">{active.titulo}</h2>
              <p className="mt-3 text-gray-700 leading-relaxed text-justify">{active.texto}</p>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalOpen {
          from { transform: scale(.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-modal-open { animation: modalOpen .28s ease forwards; }
      `}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BlogPage />);
