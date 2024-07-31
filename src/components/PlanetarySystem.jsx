import React, { useEffect, useRef } from 'react';

const PlanetarySystem = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 800;

    // Planet data: name, color, orbit radius, speed (degrees per frame)
    const planets = [
      { name: 'Mercury', color: '#8C7853', radius: 50, speed: 0.00748 },
      { name: 'Venus', color: '#FFA500', radius: 75, speed: 0.00293 },
      { name: 'Earth', color: '#4169E1', radius: 100, speed: 0.00180 },
      { name: 'Mars', color: '#FF4500', radius: 125, speed: 0.00096 },
      { name: 'Jupiter', color: '#FFA07A', radius: 200, speed: 0.00015 },
      { name: 'Saturn', color: '#F4A460', radius: 250, speed: 0.00006 },
      { name: 'Uranus', color: '#00CED1', radius: 300, speed: 0.00002 },
      { name: 'Neptune', color: '#4169E1', radius: 350, speed: 0.00001 },
    ];

    let angles = planets.map(() => 0);

    const drawPlanet = (x, y, color) => {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw sun
      ctx.beginPath();
      ctx.arc(400, 400, 20, 0, 2 * Math.PI);
      ctx.fillStyle = 'yellow';
      ctx.fill();

      // Draw planets
      planets.forEach((planet, index) => {
        angles[index] += planet.speed;
        const x = 400 + planet.radius * Math.cos(angles[index]);
        const y = 400 + planet.radius * Math.sin(angles[index]);
        drawPlanet(x, y, planet.color);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold text-white mb-4">Solar System Simulation</h1>
      <canvas ref={canvasRef} className="border border-gray-600"></canvas>
      <p className="text-white mt-4">Planets are moving at their relative speeds (not to scale)</p>
    </div>
  );
};

export default PlanetarySystem;
