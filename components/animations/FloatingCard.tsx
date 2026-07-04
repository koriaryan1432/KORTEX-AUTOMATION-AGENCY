"use client";

import React, { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple";
}

export default function FloatingCard({
  children,
  className = "",
  glowColor = "cyan",
}: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(0);
  const [glowY, setGlowY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation (max 8 degrees)
    const rX = -(mouseY / (height / 2)) * 6;
    const rY = (mouseX / (width / 2)) * 6;

    setRotateX(rX);
    setRotateY(rY);

    // Glow coordinates relative to card top-left
    setGlowX(e.clientX - rect.left);
    setGlowY(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const glowStyle = glowColor === "cyan" 
    ? "rgba(0, 240, 255, 0.12)" 
    : "rgba(168, 85, 247, 0.12)";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformPerspective: 800,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Moving Glow spotlight */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(120px circle at ${glowX}px ${glowY}px, ${glowStyle}, transparent 75%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
