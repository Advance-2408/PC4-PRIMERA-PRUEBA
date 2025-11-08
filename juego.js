const { useRef, useEffect, useState } = React;

function HeaderJuego() {
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
        <button onClick={() => window.location.href='blog.html'} className="hover:bg-white hover:text-black px-3 py-1 rounded-lg font-semibold">Blog</button>
        <button className="bg-white text-black px-3 py-1 rounded-lg font-semibold">Juego</button>
      </nav>
      <div className="flex items-center space-x-3 mt-3 md:mt-0">
        <button className="bg-white text-black px-3 py-1 rounded-md font-semibold">Iniciar sesión</button>
        <button className="bg-white text-black px-3 py-1 rounded-md font-semibold">Registrarse</button>
      </div>
    </header>
  );
}

function FooterJuego() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 px-4 md:px-8 flex flex-wrap justify-between gap-6 mt-12">
      <div className="min-w-[180px]">
        <h2 className="font-[Fredoka_One] text-lg md:text-xl mb-2">Happy Paws</h2>
        <p className="text-xs md:text-sm leading-relaxed">Tu tienda de confianza para consentir a tus mascotas.<br/>Productos de calidad, amor y cuidado para cada patita feliz.</p>
      </div>
      <div className="min-w-[180px]">
        <h2 className="font-[Fredoka_One] text-lg md:text-xl mb-2">Encuéntranos en:</h2>
        <ul className="space-y-1 text-xs md:text-sm">
          <li>📍 Calle mascotitas 333</li>
          <li>📞 +51 999 888 777</li>
          <li>✉️ happypaws@contact.pe</li>
        </ul>
      </div>
      <div className="min-w-[180px]">
        <h2 className="font-[Fredoka_One] text-lg md:text-xl mb-2">Síguenos en:</h2>
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

function JuegoPage() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [status, setStatus] = useState("");
  const [showRestart, setShowRestart] = useState(false);
  const directionRef = useRef("RIGHT");
  const snakeRef = useRef([]);
  const foodRef = useRef({x:0,y:0});
  const boxRef = useRef(20);
  const gameOverRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    function resizeCanvas() {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      const maxSide = Math.min(520, container.clientWidth - 32);
      const size = Math.max(240, Math.round(maxSide));
      canvas.width = size;
      canvas.height = size;
      boxRef.current = Math.max(12, Math.round(size / 20));
      snakeRef.current = [{ x: Math.floor(canvas.width/2/boxRef.current)*boxRef.current, y: Math.floor(canvas.height/2/boxRef.current)*boxRef.current }];
      foodRef.current = generateFood(canvas.width, canvas.height, boxRef.current);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowUp" && directionRef.current !== "DOWN") directionRef.current = "UP";
      if (e.key === "ArrowDown" && directionRef.current !== "UP") directionRef.current = "DOWN";
      if (e.key === "ArrowLeft" && directionRef.current !== "RIGHT") directionRef.current = "LEFT";
      if (e.key === "ArrowRight" && directionRef.current !== "LEFT") directionRef.current = "RIGHT";
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let last = 0;
    const fps = 8;
    const interval = 1000 / fps;
    let delta = 0;

    gameOverRef.current = false;
    setStatus("");
    setShowRestart(false);
    snakeRef.current = [{ x: Math.floor(canvas.width/2/boxRef.current)*boxRef.current, y: Math.floor(canvas.height/2/boxRef.current)*boxRef.current }];
    foodRef.current = generateFood(canvas.width, canvas.height, boxRef.current);
    directionRef.current = "RIGHT";

    function loop(time) {
      rafRef.current = requestAnimationFrame(loop);
      delta += time - last;
      last = time;
      if (delta < interval) return;
      delta = 0;
      drawFrame(ctx, canvas);
    }
    rafRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  function drawFrame(ctx, canvas) {
    if (gameOverRef.current) return;

    ctx.fillStyle = "#bbf7d0";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.font = `${Math.max(14, boxRef.current - 2)}px Arial`;
    ctx.fillText("🦴", foodRef.current.x + 2, foodRef.current.y + boxRef.current - 4);

    let headX = snakeRef.current[0].x;
    let headY = snakeRef.current[0].y;
    const dir = directionRef.current;
    if (dir === "UP") headY -= boxRef.current;
    if (dir === "DOWN") headY += boxRef.current;
    if (dir === "LEFT") headX -= boxRef.current;
    if (dir === "RIGHT") headX += boxRef.current;

    const newHead = { x: headX, y: headY };

    if (headX < 0 || headX >= canvas.width || headY < 0 || headY >= canvas.height) {
      return endGame();
    }
    for (let seg of snakeRef.current) {
      if (seg.x === newHead.x && seg.y === newHead.y) return endGame();
    }

    snakeRef.current.unshift(newHead);

    if (newHead.x === foodRef.current.x && newHead.y === foodRef.current.y) {
      foodRef.current = generateFood(canvas.width, canvas.height, boxRef.current);
    } else {
      snakeRef.current.pop();
    }

    ctx.font = `${Math.max(12, boxRef.current - 4)}px Arial`;
    snakeRef.current.forEach(segment => {
      ctx.fillText("🐶", segment.x + 2, segment.y + boxRef.current - 4);
    });
  }

  function endGame() {
    gameOverRef.current = true;
    setStatus("¡Perdiste! 😢");
    setShowRestart(true);
  }

  function restart() {
    const canvas = canvasRef.current;
    snakeRef.current = [{ x: Math.floor(canvas.width/2/boxRef.current)*boxRef.current, y: Math.floor(canvas.height/2/boxRef.current)*boxRef.current }];
    directionRef.current = "RIGHT";
    foodRef.current = generateFood(canvas.width, canvas.height, boxRef.current);
    gameOverRef.current = false;
    setStatus("");
    setShowRestart(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 font-[Montserrat] flex flex-col">
      <HeaderJuego />
      <main className="flex flex-col items-center justify-center py-8 px-4 md:px-10 flex-1">
        <h1 className="text-2xl md:text-3xl font-[Fredoka_One] text-orange-500 mb-4">🐶 Juego del Perrito Feliz 🦴</h1>

        <div ref={containerRef} className="bg-green-200 rounded-xl shadow-lg flex justify-center items-center p-4 w-full max-w-[680px]">
          <canvas ref={canvasRef} className="rounded-lg border-4 border-green-400 bg-green-100" />
        </div>

        <p className="mt-4 text-lg font-semibold text-gray-700">{status}</p>

        <div className="mt-4 md:hidden flex gap-3 items-center">
          <button onClick={() => directionRef.current = "UP"} className="bg-orange-500 text-white px-3 py-2 rounded-lg">↑</button>
          <div className="flex gap-2">
            <button onClick={() => directionRef.current = "LEFT"} className="bg-orange-500 text-white px-3 py-2 rounded-lg">←</button>
            <button onClick={() => directionRef.current = "RIGHT"} className="bg-orange-500 text-white px-3 py-2 rounded-lg">→</button>
          </div>
          <button onClick={() => directionRef.current = "DOWN"} className="bg-orange-500 text-white px-3 py-2 rounded-lg">↓</button>
        </div>

        <button onClick={restart} className={`${showRestart ? 'inline-block' : 'hidden'} mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all`}>Volver a jugar</button>
      </main>
      <FooterJuego />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<JuegoPage />);


function generateFood(width, height, box) {
  const cols = Math.floor(width / box);
  const rows = Math.floor(height / box);
  const x = Math.floor(Math.random() * cols) * box;
  const y = Math.floor(Math.random() * rows) * box;
  return { x, y };
}
