import { motion } from 'motion/react';

export default function FloatingBubbles() {
  const bubbles = [
    // Hero section spheres (from screenshots)
    { size: 'w-96 h-96', top: '10%', left: '-8%', delay: 0, opacity: 'opacity-40', duration: 25 },
    { size: 'w-72 h-72', top: '45%', left: '15%', delay: 3, opacity: 'opacity-30', duration: 35 },
    { size: 'w-48 h-48', top: '75%', left: '8%', delay: 1, opacity: 'opacity-25', duration: 20 },
    { size: 'w-80 h-80', top: '15%', right: '5%', delay: 2, opacity: 'opacity-35', duration: 30 },
    { size: 'w-56 h-56', top: '40%', right: '22%', delay: 4, opacity: 'opacity-20', duration: 28 },
    { size: 'w-36 h-36', top: '2%', left: '50%', delay: 5, opacity: 'opacity-15', duration: 32 },
    // About / Skills section spheres
    { size: 'w-64 h-64', top: '120%', right: '-5%', delay: 1, opacity: 'opacity-15', duration: 40 },
    { size: 'w-96 h-96', top: '180%', left: '-10%', delay: 3, opacity: 'opacity-20', duration: 45 },
    { size: 'w-40 h-40', top: '240%', right: '15%', delay: 2, opacity: 'opacity-15', duration: 24 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          id={`bg-bubble-${i}`}
          className={`absolute rounded-full sphere-float-shadow bg-gradient-to-tr from-cyan-100/50 via-blue-50/40 to-white/70 ${bubble.opacity} ${bubble.size}`}
          style={{
            top: bubble.top,
            left: bubble.left,
            right: bubble.right,
          }}
          animate={{
            y: [0, -15, 15, 0],
            x: [0, 8, -8, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: bubble.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
