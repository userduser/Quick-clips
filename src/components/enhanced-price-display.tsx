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
  // Extract number from price string (e.g., "$29" -> 29)
  const extractNumber = (priceStr: string) => {
    const match = priceStr.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const monthlyNum = extractNumber(monthlyPrice);
  const yearlyNum = Math.round(extractNumber(yearlyPrice) / 12);

  const currentPrice = isAnnual ? yearlyNum : monthlyNum;
  const previousPrice = isAnnual ? monthlyNum : yearlyNum;

  console.log('EnhancedPriceDisplay render:', { 
    monthlyPrice, 
    yearlyPrice, 
    isAnnual, 
    isAnimating,
    monthlyNum,
    yearlyNum,
    currentPrice,
    previousPrice
  });

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