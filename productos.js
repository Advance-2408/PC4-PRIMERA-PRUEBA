const { useState, useEffect } = React;

function HeaderSimple() {
  return (
    <header className="w-full bg-orange-500 flex flex-wrap justify-between items-center px-4 md:px-8 py-3 text-white">
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.href='index.html'}>
        <img src="imagenes/logo.jpg" alt="Logo" className="h-12 w-12 md:h-20 md:w-20 rounded-full p-1" />
        <h1 className="font-[Fredoka_One] text-lg md:text-2xl">Happy Paws</h1>
      </div>

      <nav className="flex overflow-x-auto space-x-3 md:space-x-6 text-sm md:text-lg mt-3 md:mt-0">
        <button onClick={() => window.location.href='index.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Home</button>
        <button className="bg-white text-black px-3 py-1 rounded-lg font-semibold">Productos</button>
        <button onClick={() => window.location.href='contactanos.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Contáctanos</button>
        <button onClick={() => window.location.href='nosotros.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Nosotros</button>
        <button onClick={() => window.location.href='blog.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Blog</button>
        <button onClick={() => window.location.href='juego.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Juego</button>
      </nav>

      <div className="flex items-center space-x-4 mt-3 md:mt-0">
        <CartIcon />
        <button className="bg-white text-black px-3 py-1 rounded-md font-semibold">Iniciar sesión</button>
        <button className="bg-white text-black px-3 py-1 rounded-md font-semibold">Registrarse</button>
      </div>
    </header>
  );
}

function FooterSimple() {
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


function CartIcon() {
  const { cart, setCart } = React.useContext(CartContext);
  const [open, setOpen] = useState(false);

  const totalCount = cart.length;

  function removeAt(index) {
    const copy = [...cart];
    copy.splice(index,1);
    setCart(copy);
  }

  return (
    <div className="relative">
      <div className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>🛒
        <span className={`absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-2 rounded-full ${totalCount===0 ? 'hidden' : ''}`}>{totalCount}</span>
      </div>

      <div className={`${open ? '' : 'hidden'} absolute right-0 mt-2 bg-white text-black w-72 shadow-lg rounded-lg p-3 z-50`}>
        <p className="font-semibold text-center mb-2">Carrito</p>
        <ul className="space-y-2 max-h-48 overflow-y-auto">
          {cart.length === 0 ? <li className="text-sm text-gray-600 text-center">Carrito vacío</li> :
            cart.map((it, idx) => (
              <li key={idx} className="flex justify-between items-center text-sm border-b pb-1">
                <span>{it.nombre} — <strong>{it.precio}</strong></span>
                <button className="text-red-600 font-bold ml-2" onClick={() => removeAt(idx)}>✖</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}


const CartContext = React.createContext();

function ProductosPage() {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {

    fetch('productos.json')
      .then(r => r.json())
      .then(data => setProductos(data))
      .catch(err => {
        console.error('Error cargando productos.json', err);

        setProductos([
          { nombre: 'Collar', descripcion: 'Collar cómodo', precio: 'S/ 25.00', imagen: 'imagenes/p1.jpg' },
          { nombre: 'Comida', descripcion: 'Alimento premium', precio: 'S/ 99.90', imagen: 'imagenes/p2.jpg' },
          { nombre: 'Juguete', descripcion: 'Juguete interactivo', precio: 'S/ 35.00', imagen: 'imagenes/p3.jpg' }
        ]);
      });
  }, []);

  function addToCart(prod) {
    setCart(prev => [...prev, prod]);
  }

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div>
        <HeaderSimple />
        <main className="px-4 md:px-10 py-8">
          <h1 className="text-3xl md:text-4xl font-[Fredoka_One] text-center mb-8 text-black">PRODUCTOS PARA LOS ENGREÍDOS DEL HOGAR</h1>

          <div id="productosContainer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {productos.map((prod, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-xl p-4 w-[280px] flex flex-col items-center hover:scale-105 transition-transform duration-200">
                <img src={prod.imagen} alt={prod.nombre} className="h-48 w-full object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold mb-1">{prod.nombre}</h3>
                <p className="text-sm text-gray-700 mb-3 text-center">{prod.descripcion}</p>
                <div className="flex justify-between items-center w-full">
                  <span className="text-gray-800 font-semibold">{prod.precio}</span>
                  <div className="flex items-center gap-2">
                    <button className="add-btn bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold hover:bg-yellow-300 transition-all" onClick={() => addToCart(prod)}>AÑADIR AL CARRITO</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <FooterSimple />
      </div>
    </CartContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ProductosPage />);
