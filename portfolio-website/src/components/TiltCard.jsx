import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

export default function TiltCard({w=110, h=110}) {
  const ref = useRef(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  const tiltMagnitude = useTransform([x, y], ([nx, ny]) => {
    const dx = nx - 0.5;
    const dy = ny - 0.5;
    return Math.sqrt(dx * dx + dy * dy); 
  });

  const shimmerOpacity = useTransform(tiltMagnitude, [0, 0.707], [0.1, 0.5]);

  const shimmer = useTransform([x, y], ([nx, ny]) => {
    const angle = (nx - 0.5) * 40 + (ny - 0.5) * 40;
    return `linear-gradient(${angle}deg, 
      #915EFF, 
      #060816, 
      #915EFF, 
      #060816)`;
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const posX = (e.clientX - rect.left) / rect.width;
    const posY = (e.clientY - rect.top) / rect.height;

    animate(x, posX, { type: "spring", stiffness: 200, damping: 20 });
    animate(y, posY, { type: "spring", stiffness: 200, damping: 20 });
  };

  const handleMouseLeave = () => {
    animate(x, 0.5, { type: "spring", stiffness: 200, damping: 20 });
    animate(y, 0.5, { type: "spring", stiffness: 200, damping: 20 });
  };

  return (
    <motion.div
      ref={ref}
      style={{ perspective: 1000, width: `${w}px`, height: `${h}px` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base Image */}
      <motion.img
        src="ProfilePic.png"
        alt="profile_pic"
        className="w-full h-full object-cover rounded-lg border-3 border-[#915EFF]"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      />

      {/* Shimmer overlay */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: shimmer,
          mixBlendMode: "overlay",
          opacity: shimmerOpacity,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      />
    </motion.div>
  );
}