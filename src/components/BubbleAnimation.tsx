import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

const BubbleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const bubbles: Bubble[] = [];
    const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'];

    // Create initial bubbles
    for (let i = 0; i < 20; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble, index) => {
        // Update bubble position
        bubble.y -= bubble.speed;
        bubble.x += Math.sin(bubble.y * 0.01) * 0.5;

        // Reset bubble if it goes off screen
        if (bubble.y < -bubble.size) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
        }

        // Draw bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color + Math.floor(bubble.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Add highlight
        ctx.beginPath();
        ctx.arc(bubble.x - bubble.size * 0.3, bubble.y - bubble.size * 0.3, bubble.size * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.6})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default BubbleAnimation;