"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
  href?: string;
}

const QuickClipsLogo = ({ variant = "full", className = "", href = "/" }: LogoProps) => {
  const LogoContent = () => (
    <div className={`flex items-center ${className}`}>
      {/* Q Logo SVG with orange color */}
      <svg 
        width="32" 
        height="45" 
        viewBox="0 0 149 208" 
        className="flex-shrink-0"
        fill="currentColor"
      >
        <path 
          d="M69.2058 34.375C83.2215 32.7685 99.1494 37.3073 110.597 45.4804C124.182 55.1365 133.379 69.7897 136.168 86.2217C138.607 101.006 135.388 119.466 126.6 131.724C120.442 129.015 113.765 124.77 108.169 121.023C109.278 118.748 110.544 116.541 111.585 114.23C127.097 79.7888 94.6494 44.9678 58.9923 58.4727C49.2827 62.2302 41.4561 69.6797 37.224 79.1921C30.3193 94.5548 32.574 112.733 44.3652 125.019C48.9171 129.762 53.307 132.377 59.2113 135.019C68.134 138.802 81.6318 138.319 91.2519 138.079C91.4296 133.302 91.4288 128.219 91.4726 123.426C97.0016 126.139 104.852 131.001 110.391 134.182C117.763 138.416 128.446 144.118 135.222 149.021C125.284 154.042 114.462 161.176 104.622 166.642C100.555 168.902 95.6962 171.949 91.5201 173.834C91.4067 169.155 91.2071 164.375 91.4271 159.71C85.7588 159.396 80.0229 159.491 74.3457 159.323C58.0944 158.841 45.9902 154.72 33.4649 144.117C21.0395 133.467 13.357 118.316 12.1097 101.999C9.26982 67.3721 34.4208 37.1911 69.2058 34.375Z" 
          fill="#FF6B35"
        />
      </svg>
      
      {/* Text part - only show if variant is full */}
      {variant === "full" && (
        <span className="ml-2 text-xl font-bold tracking-tight">
          <span className="text-primary">uick</span>
          <span className="text-foreground ml-1">clips</span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};

export default QuickClipsLogo;