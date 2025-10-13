"use client";

import { useState, useEffect, useRef } from "react";

interface AnimatedPriceProps {
  price: string;
  isAnimating: boolean;
  className?: string;
}

export function AnimatedPrice({ price, isAnimating, className = "" }: AnimatedPriceProps) {
  const [displayPrice, setDisplayPrice] = useState(price);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'out' | 'in'>('idle');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAnimating && price !== displayPrice) {
      setIsTransitioning(true);
      
      // Phase 1: Slide out and blur
      setAnimationPhase('out');
      
      // Phase 2: Change price and slide in
      setTimeout(() => {
        setDisplayPrice(price);
        setAnimationPhase('in');
      }, 250);
      
      // Phase 3: Complete animation
      setTimeout(() => {
        setAnimationPhase('idle');
        setIsTransitioning(false);
      }, 500);
    } else if (!isAnimating) {
      setDisplayPrice(price);
      setAnimationPhase('idle');
      setIsTransitioning(false);
    }
  }, [price, isAnimating, displayPrice]);

  const getTransformStyle = () => {
    switch (animationPhase) {
      case 'out':
        return {
          transform: 'translateY(-8px) scale(0.9)',
          opacity: 0,
          filter: 'blur(2px)',
        };
      case 'in':
        return {
          transform: 'translateY(8px) scale(1.1)',
          opacity: 0,
          filter: 'blur(1px)',
        };
      default:
        return {
          transform: 'translateY(0px) scale(1)',
          opacity: 1,
          filter: 'blur(0px)',
        };
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`inline-block relative overflow-hidden ${className}`}
      style={{ minWidth: '3rem' }} // Prevent layout shift
    >
      {/* Animated glow effect during transition */}
      {isTransitioning && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-lg blur-sm animate-pulse"
          style={{
            animation: 'priceGlow 0.5s ease-in-out',
          }}
        />
      )}
      
      {/* Main price display */}
      <span 
        className="inline-block font-bold relative z-10"
        style={{
          ...getTransformStyle(),
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          textShadow: isTransitioning ? '0 0 8px rgba(245, 104, 0, 0.3)' : 'none',
        }}
      >
        {displayPrice}
      </span>
      
      {/* Sliding highlight effect */}
      {isTransitioning && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          style={{
            animation: 'slideHighlight 0.5s ease-in-out',
            transform: 'translateX(-100%)',
          }}
        />
      )}
    </div>
  );
}