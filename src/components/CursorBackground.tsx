import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const CursorBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });
  const animationRef = useRef<number>();
  const lastMoveTime = useRef<number>(0);
  const cursorRef = useRef({ x: 0, y: 0 });

  // Move useCallback outside of useEffect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    mouseRef.current = { x: e.clientX, y: e.clientY, isMoving: true };
    cursorRef.current = { x: e.clientX, y: e.clientY };
    lastMoveTime.current = now;
    
    // Create fewer, higher quality particles
    if (now - lastMoveTime.current < 50) { // Only create particles during active movement
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 0,
          maxLife: 60 + Math.random() * 40,
          size: 1 + Math.random() * 2
        });
      }
    }
    
    // Limit particle count for performance
    if (particles.current.length > 100) {
      particles.current = particles.current.slice(-80);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let throttleTimer: NodeJS.Timeout;
    const throttledMouseMove = (e: MouseEvent) => {
      handleMouseMove(e);
      
      // Throttle particle creation for performance
      if (throttleTimer) clearTimeout(throttleTimer);
      throttleTimer = setTimeout(() => {
        mouseRef.current.isMoving = false;
      }, 150);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles with improved performance
      particles.current = particles.current.filter(particle => {
        // Apply subtle physics
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        
        const alpha = Math.max(0, 1 - particle.life / particle.maxLife);
        const size = particle.size * alpha;
        
        if (alpha > 0.1) {
          // Simple white dot
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        return particle.life < particle.maxLife;
      });

      // Draw purple cursor effect at mouse position
      if (mouseRef.current.isMoving || Date.now() - lastMoveTime.current < 1000) {
        const cursorAlpha = Math.max(0.3, 1 - (Date.now() - lastMoveTime.current) / 1000);
        
        // Purple glow effect
        ctx.beginPath();
        ctx.arc(cursorRef.current.x, cursorRef.current.y, 12, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          cursorRef.current.x, cursorRef.current.y, 0,
          cursorRef.current.x, cursorRef.current.y, 12
        );
        gradient.addColorStop(0, `rgba(168, 85, 247, ${cursorAlpha * 0.6})`);
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${cursorAlpha * 0.3})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Inner purple dot
        ctx.beginPath();
        ctx.arc(cursorRef.current.x, cursorRef.current.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${cursorAlpha * 0.8})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', throttledMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', throttledMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default CursorBackground;