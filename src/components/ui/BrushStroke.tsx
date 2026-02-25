'use client';

interface BrushStrokeProps {
  className?: string;
  color?: string;
  variant?: 'horizontal' | 'vertical' | 'short';
}

export default function BrushStroke({ 
  className = '', 
  color = '#f4d03f',
  variant = 'horizontal' 
}: BrushStrokeProps) {
  
  if (variant === 'vertical') {
    return (
      <svg
        viewBox="0 0 20 100"
        className={`${className}`}
        style={{ opacity: 0.6 }}
        preserveAspectRatio="none"
      >
        <path
          d="M10,0 Q8,25 12,50 Q7,75 10,100"
          stroke={color}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M10,10 Q11,30 9,60 Q12,80 10,95"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    );
  }

  if (variant === 'short') {
    return (
      <svg
        viewBox="0 0 80 8"
        className={`${className}`}
        style={{ opacity: 0.7 }}
        preserveAspectRatio="none"
      >
        <path
          d="M2,4 Q20,2 40,4 Q60,6 78,4"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M5,4 Q25,5 45,3.5 Q65,3 75,4"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    );
  }

  // Default: horizontal
  return (
    <svg
      viewBox="0 0 200 12"
      className={`${className}`}
      style={{ opacity: 0.7 }}
      preserveAspectReset="none"
    >
      <path
        d="M2,6 Q50,3 100,6 Q150,9 198,6"
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M5,6 Q55,8 105,5 Q155,4 195,6"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
