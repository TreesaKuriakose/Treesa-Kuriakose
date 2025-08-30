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
    
    // Check if we're in dark mode
    const isDark = document.documentElement.classList.contains('dark');
    
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
        // Adjust particle color based on theme
        const particleColor = isDark ? '255, 255, 255' : '100, 100, 100';
        ctx.fillStyle = `rgba(${particleColor}, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      return particle.life < particle.maxLife;
    });

    // Draw purple cursor effect that follows the nearest particle or mouse
    if (mouseRef.current.isMoving || Date.now() - lastMoveTime.current < 1000) {
      const cursorAlpha = Math.max(0.4, 1 - (Date.now() - lastMoveTime.current) / 1000);
      
      // Find the nearest particle to cursor
      let targetX = cursorRef.current.x;
      let targetY = cursorRef.current.y;
      
      if (particles.current.length > 0) {
        let minDistance = Infinity;
        let nearestParticle = null;
        
        particles.current.forEach(particle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - cursorRef.current.x, 2) + 
            Math.pow(particle.y - cursorRef.current.y, 2)
          );
          if (distance < minDistance && distance < 50) { // Only snap if within 50px
            minDistance = distance;
            nearestParticle = particle;
          }
        });
        
        if (nearestParticle) {
          targetX = nearestParticle.x;
          targetY = nearestParticle.y;
        }
      }
      
      // Purple glow effect
      ctx.beginPath();
      ctx.arc(targetX, targetY, 12, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(
        targetX, targetY, 0,
        targetX, targetY, 12
      );
      gradient.addColorStop(0, `rgba(168, 85, 247, ${cursorAlpha * 0.6})`);
      gradient.addColorStop(0.5, `rgba(168, 85, 247, ${cursorAlpha * 0.3})`);
      gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Inner purple dot that follows particles
      ctx.beginPath();
      ctx.arc(targetX, targetY, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168, 85, 247, ${cursorAlpha * 0.9})`;
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