"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ScrollSequenceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetIndexRef = useRef<number>(0);
  const currentIndexRef = useRef<number>(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const frameCount = 61;

  // Pre-load images on mount
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/herosection/frame_${frameNum}.webp`;
      
      img.onload = () => {
        count++;
        setLoadedCount(count);
      };
      
      loadedImages.push(img);
    }
    
    imagesRef.current = loadedImages;
  }, []);

  // Lerped requestAnimationFrame canvas drawing loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-draw immediately on resize
      drawFrame(Math.round(currentIndexRef.current));
    };

    const drawFrame = (frameIndex: number) => {
      const images = imagesRef.current;
      if (images.length === 0) return;

      const boundedIndex = Math.max(0, Math.min(frameCount - 1, frameIndex));
      const activeImg = images[boundedIndex];

      if (!activeImg || !activeImg.complete) {
        // Fallback to nearest loaded image
        let fallbackImg = null;
        for (let offset = 1; offset < frameCount; offset++) {
          const prev = images[boundedIndex - offset];
          const next = images[boundedIndex + offset];
          if (prev && prev.complete) {
            fallbackImg = prev;
            break;
          }
          if (next && next.complete) {
            fallbackImg = next;
            break;
          }
        }
        if (fallbackImg) {
          renderImg(fallbackImg);
        }
        return;
      }

      renderImg(activeImg);
    };

    const renderImg = (img: HTMLImageElement) => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.width;
      const imgHeight = img.height;

      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let drawX = 0;
      let drawY = 0;

      // Cover scaling calculation
      if (canvasRatio > imgRatio) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        drawY = (canvasHeight - drawHeight) / 2;
      } else {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        drawX = (canvasWidth - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    // Smooth Lerp loop tick
    const tick = () => {
      const target = targetIndexRef.current;
      const current = currentIndexRef.current;
      const diff = target - current;

      // Smooth lerp coefficient (0.08 offers beautiful fluid transitions)
      if (Math.abs(diff) > 0.05) {
        const next = current + diff * 0.08;
        currentIndexRef.current = next;
        drawFrame(Math.round(next));
      } else if (current !== target) {
        currentIndexRef.current = target;
        drawFrame(target);
      }

      animationId = requestAnimationFrame(tick);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = docHeight > 0 ? scrollTop / docHeight : 0;
      
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      targetIndexRef.current = frameIndex;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll);

    // Run initial canvas size matching
    resizeCanvas();
    // Start continuous Lerp loop
    tick();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadedCount]);

  // Loading percentage calculations
  const progressPercent = Math.round((loadedCount / frameCount) * 100);

  return (
    <>
      {/* Background Scroll sequence Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none -z-15"
        style={{
          opacity: 0.26, 
          filter: "brightness(1.22) contrast(1.1)",
          mixBlendMode: "lighten",
          transition: "opacity 1.5s ease-in-out",
        }}
      />
      
      {/* Loading HUD at bottom-left */}
      {loadedCount < frameCount && (
        <div className="fixed bottom-6 left-6 z-50 bg-bg-dark/80 backdrop-blur border border-white/10 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-2xl">
          <div className="w-4 h-4 rounded-full border-2 border-accent-cyan/30 border-t-accent-cyan animate-spin" />
          <span className="text-xs font-semibold text-white/90">
            Caching 3D Frames... {progressPercent}%
          </span>
        </div>
      )}
    </>
  );
}
