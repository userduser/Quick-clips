"use client";

import { useState } from "react";

export function usePricingToggle() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const togglePricing = (newIsAnnual: boolean) => {
    if (newIsAnnual !== isAnnual) {
      setIsAnimating(true);
      setIsAnnual(newIsAnnual);
      
      // Reset animation state after animation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }
  };

  const formatPrice = (monthlyPrice: string, yearlyPrice: string) => {
    if (isAnnual) {
      // Convert yearly to monthly display (e.g., $90/year = $7.50/month)
      const yearly = parseInt(yearlyPrice.replace('$', ''));
      const monthlyEquivalent = (yearly / 12).toFixed(0);
      return `$${monthlyEquivalent}`;
    }
    return monthlyPrice;
  };

  const getPricingPeriod = () => {
    return isAnnual ? '/month' : '/month';
  };

  const getBillingInfo = () => {
    return isAnnual ? 'Billed annually' : 'Billed monthly';
  };

  return {
    isAnnual,
    isAnimating,
    togglePricing,
    formatPrice,
    getPricingPeriod,
    getBillingInfo,
  };
}