"use client";

import { useState, useEffect } from "react";

interface NumberCounterProps {
  from: number;
  to: number;
  duration?: number;
  isAnimating: boolean;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function NumberCounter({ 
  from, 
  to, 
  duration = 400, 
  isAnimating,
  prefix = "$",
  suffix = "",
  className = "" 
}: NumberCounterProps) {
  const [currentNumber, setCurrentNumber] = useState(from);
  const [isCountingUp, setIsCountingUp] = useState(false);

  useEffect(() => {
    if (isAnimating && from !== to) {
      setIsCountingUp(true);
      
      const startTime = Date.now();
      const difference = to - from;
      
      const updateNumber = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const newNumber = from + (difference * easeOutQuart);
        
        // Check if numbers have decimals and format accordingly
        const hasDecimals = (to % 1 !== 0) || (from % 1 !== 0);
        setCurrentNumber(hasDecimals ? parseFloat(newNumber.toFixed(2)) : Math.round(newNumber));
        
        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          setCurrentNumber(to);
          setIsCountingUp(false);
        }
      };
      
      requestAnimationFrame(updateNumber);
    } else if (!isAnimating) {
      setCurrentNumber(to);
      setIsCountingUp(false);
    }
  }, [from, to, duration, isAnimating]);

  return (
    <span 
      className={`
        inline-block transition-all duration-200 ease-out price-container
        ${isCountingUp ? 'text-primary' : ''} 
        ${className}
      `}
      style={{
        textShadow: isCountingUp ? '0 0 10px rgba(245, 104, 0, 0.4)' : 'none',
        transform: isCountingUp ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      {prefix}{currentNumber}{suffix}
    </span>
  );
}