"use client";

import { useState } from "react";

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
}

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {/* Monthly Label */}
      <span 
        onClick={() => onToggle(false)}
        className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
          !isAnnual ? 'text-foreground' : 'text-muted-foreground'
        }`}
      >
        Monthly
      </span>

      {/* Toggle Switch */}
      <button
        onClick={() => onToggle(!isAnnual)}
        className="relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background border-2"
        style={{
          backgroundColor: 'hsl(var(--muted))',
          borderColor: isAnnual ? '#f56800' : 'transparent',
        }}
      >
        {/* Switch Circle */}
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            isAnnual ? 'translate-x-9' : 'translate-x-1'
          }`}
          style={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1)',
          }}
        />
      </button>

      {/* Annual Label with Badge */}
      <div className="flex items-center gap-2">
        <span 
          onClick={() => onToggle(true)}
          className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
            isAnnual ? 'text-foreground' : 'text-muted-foreground'
          }`}
        >
          Annual
        </span>
        
        {/* Save Badge */}
        <div className={`
          px-2 py-1 rounded-full text-xs font-medium transition-all duration-300
          ${isAnnual 
            ? 'bg-primary text-black shadow-glow scale-100 opacity-100' 
            : 'bg-primary/20 text-primary/70 scale-95 opacity-70'
          }
        `}>
          Save 30%
        </div>
      </div>
    </div>
  );
}