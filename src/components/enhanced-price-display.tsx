"use client";

import { NumberCounter } from "./number-counter";

interface EnhancedPriceDisplayProps {
  monthlyPrice: string;
  yearlyPrice: string;
  isAnnual: boolean;
  isAnimating: boolean;
  className?: string;
}

export function EnhancedPriceDisplay({ 
  monthlyPrice, 
  yearlyPrice, 
  isAnnual, 
  isAnimating,
  className = "" 
}: EnhancedPriceDisplayProps) {
  // Extract number from price string (e.g., "$29" or "$14.49" -> 29 or 14.49)
  const extractNumber = (priceStr: string) => {
    const match = priceStr.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const monthlyNum = extractNumber(monthlyPrice);
  const yearlyNum = parseFloat((extractNumber(yearlyPrice) / 12).toFixed(2));

  const currentPrice = isAnnual ? yearlyNum : monthlyNum;
  const previousPrice = isAnnual ? monthlyNum : yearlyNum;

  return (
    <div className={`inline-block ${className}`}>
      <NumberCounter
        from={previousPrice}
        to={currentPrice}
        duration={600}
        isAnimating={isAnimating}
        prefix="$"
        className="text-4xl font-bold"
      />
    </div>
  );
}