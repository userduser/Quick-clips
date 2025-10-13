"use client";

import { useState, useEffect } from "react";

interface AnimatedPriceProps {
  price: string;
  isAnimating: boolean;
  className?: string;
}

export function AnimatedPrice({ price, isAnimating, className = "" }: AnimatedPriceProps) {
  const [displayPrice, setDisplayPrice] = useState(price);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (isAnimating && price !== displayPrice) {
      // Start flip animation
      setIsFlipping(true);
      
      // Change price halfway through animation
      setTimeout(() => {
        setDisplayPrice(price);
      }, 150);
      
      // End flip animation
      setTimeout(() => {
        setIsFlipping(false);
      }, 300);
    } else if (!isAnimating) {
      setDisplayPrice(price);
    }
  }, [price, isAnimating, displayPrice]);

  return (
    <span 
      className={`
        inline-block transition-all duration-300 ease-in-out
        ${isFlipping ? 'animate-pulse scale-110' : 'scale-100'}
        ${className}
      `}
      style={{
        transform: isFlipping ? 'rotateY(360deg) scale(1.1)' : 'rotateY(0deg) scale(1)',
        transition: 'transform 0.3s ease-in-out, opacity 0.15s ease-in-out',
      }}
    >
      {displayPrice}
    </span>
  );
}