import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  update: () => void;
}

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuración del canvas para responsividad
    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(pixelRatio, pixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Seguir el movimiento del mouse
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Configuración de partículas
    const particles: Particle[] = [];
    const particleCount = 100; // Menos partículas para menos densidad
    const connectionDistance = 200; // Conexiones más largas y expansivas
    const mouseRadius = 200;

    class ParticleClass implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
      }

      update() {
        // Efecto de repulsión con el puntero
        const dx = mousePosition.current.x - this.x;
        const dy = mousePosition.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          this.vx -= (dx / distance) * force * 0.2;
          this.vy -= (dy / distance) * force * 0.2;
        }

        // Regresar suavemente a la posición base
        const baseDx = this.baseX - this.x;
        const baseDy = this.baseY - this.y;
        this.vx += baseDx * 0.005;
        this.vy += baseDy * 0.005;

        // Movimiento suave y amortiguado
        this.vx *= 0.96;
        this.vy *= 0.96;
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new ParticleClass());
    }

    // Función de transición de color de azul oscuro a azul claro
    const getColor = (opacity: number = 1) => {
      const phase = (Math.sin(Date.now() * 0.0005) + 1) / 2;
      const r = Math.round(0 * (1 - phase) + 173 * phase);
      const g = Math.round(77 * (1 - phase) + 216 * phase);
      const b = Math.round(255 * (1 - phase) + 230 * phase);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    // Animación
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#1a1625';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Actualizar y dibujar partículas
      particles.forEach(particle => {
        particle.update();
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2.5, 0, Math.PI * 2); // Tamaño de punto ajustado
        ctx.fillStyle = getColor(0.8);
        ctx.fill();
      });

      // Dibujar conexiones
      ctx.lineWidth = 0.7;
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = getColor(opacity * 0.25);
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ background: '#1a1625' }}
    />
  );
};

export default NetworkBackground;
