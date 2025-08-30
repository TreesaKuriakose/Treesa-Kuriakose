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
  const targetCursorRef = useRef({ x: 0, y: 0 }); // For smooth following

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
          // Better particle visibility - brighter in light mode, white in dark mode
          if (isDark) {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
          } else {
            ctx.fillStyle = `rgba(80, 80, 80, ${alpha * 0.8})`; // Darker gray for light mode
          }
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fill();
          
          // Add subtle glow for better visibility
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size * 1.5, 0, Math.PI * 2);
          if (isDark) {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.3})`;
          } else {
            ctx.fillStyle = `rgba(80, 80, 80, ${alpha * 0.2})`;
          }
          ctx.fill();
        }
        
        return particle.life < particle.maxLife;
      });

      // Draw purple cursor effect that follows and sticks to white particles
      if (mouseRef.current.isMoving || Date.now() - lastMoveTime.current < 1000) {
        const cursorAlpha = Math.max(0.6, 1 - (Date.now() - lastMoveTime.current) / 1000);
        
        // Find the nearest particle to cursor with immediate response
        let nearestParticle = null;
        let minDistance = Infinity;
        const snapDistance = 60; // Optimized snap distance
        
        particles.current.forEach(particle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - cursorRef.current.x, 2) + 
            Math.pow(particle.y - cursorRef.current.y, 2)
          );
          if (distance < minDistance && distance < snapDistance) {
            minDistance = distance;
            nearestParticle = particle;
          }
        });
        
        // Immediate position update - no lag
        let targetX, targetY;
        if (nearestParticle) {
          targetX = nearestParticle.x;
          targetY = nearestParticle.y;
        } else {
          targetX = cursorRef.current.x;
          targetY = cursorRef.current.y;
        }
        
        // Enhanced purple glow effect with better visibility
        ctx.beginPath();
        ctx.arc(targetX, targetY, 14, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          targetX, targetY, 0,
          targetX, targetY, 14
        );
        gradient.addColorStop(0, `rgba(168, 85, 247, ${cursorAlpha * 0.8})`);
        gradient.addColorStop(0.4, `rgba(168, 85, 247, ${cursorAlpha * 0.5})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Main purple dot - more visible
        ctx.beginPath();
        ctx.arc(targetX, targetY, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${cursorAlpha})`;
        ctx.fill();
        
        // Bright white center for better visibility in all modes
        ctx.beginPath();
        ctx.arc(targetX, targetY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${cursorAlpha * 0.9})`;
        ctx.fill();
        
        // Extra bright center dot when locked to particle
        if (nearestParticle) {
          ctx.beginPath();
          ctx.arc(targetX, targetY, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, 1)`;
          ctx.fill();
          
          // Add a subtle ring to show connection
          ctx.beginPath();
          ctx.arc(targetX, targetY, 8, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(168, 85, 247, ${cursorAlpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
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