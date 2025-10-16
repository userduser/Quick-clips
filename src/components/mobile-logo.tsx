"use client";

import Link from "next/link";

export function MobileLogo() {
  return (
    <Link href="/" className="flex items-center md:hidden">
      <svg 
        width="32" 
        height="44" 
        viewBox="0 0 149 208" 
        className="flex-shrink-0"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="qGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f56800', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ff8c3a', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glowMobile" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feFlood floodColor="#f56800" floodOpacity="0.5" />
            <feComposite in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path 
          d="M74.4999 0C33.3579 0 0 33.3579 0 74.4999V133.5C0 174.642 33.3579 208 74.4999 208C97.6089 208 118.207 197.653 131.955 181.314L99.2495 155.595C91.8575 164.349 80.7935 169.8 68.3999 169.8C52.9679 169.8 39.8399 160.286 33.9599 146.8H148.5V133.5C148.5 92.3579 115.142 59 74.0001 59C32.8581 59 -0.499878 92.3579 -0.499878 133.5H33.7001C33.7001 113.496 50.5961 97.2 74.0001 97.2C97.4041 97.2 114.3 113.496 114.3 133.5H33.9599C39.8399 119.014 52.9679 109.5 68.3999 109.5C83.8319 109.5 96.9599 119.014 102.84 132.5H148.5C148.5 115.369 140.548 100.073 128.1 89.7456V74.4999C128.1 51.0959 111.604 31.5999 89.0999 26.7359V74.4999C89.0999 82.5439 82.5439 89.0999 74.4999 89.0999C66.4559 89.0999 59.8999 82.5439 59.8999 74.4999V26.7359C37.3959 31.5999 20.8999 51.0959 20.8999 74.4999H59.8999V59.8999H35.6999C41.5799 46.4139 54.7079 36.8999 70.1399 36.8999H78.8599C94.2919 36.8999 107.42 46.4139 113.3 59.8999H89.0999V74.4999H128.1C128.1 33.3579 94.7421 0 53.5999 0H74.4999Z" 
          fill="url(#qGradientMobile)"
          filter="url(#glowMobile)"
        />
      </svg>
    </Link>
  );
}
