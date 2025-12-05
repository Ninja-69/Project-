import React from 'react';

// Premium Check Icon - Circular with gradient
export const PremiumCheck: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="url(#checkGradient)" opacity="0.2" />
        <circle cx="12" cy="12" r="10" stroke="url(#checkGradient)" strokeWidth="2" />
        <path
            d="M8 12.5L10.5 15L16 9.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <defs>
            <linearGradient id="checkGradient" x1="0" y1="0" x2="24" y2="24">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#ff6b35" />
            </linearGradient>
        </defs>
    </svg>
);

// Premium Cross Icon - X with rounded ends
export const PremiumCross: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="url(#crossGradient)" opacity="0.1" />
        <circle cx="12" cy="12" r="10" stroke="url(#crossGradient)" strokeWidth="2" />
        <path
            d="M15 9L9 15M9 9L15 15"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <defs>
            <linearGradient id="crossGradient" x1="0" y1="0" x2="24" y2="24">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
        </defs>
    </svg>
);

// Premium Clock Icon - Modern minimal
export const PremiumClock: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
);

// Premium Shield Icon - Badge style
export const PremiumShield: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 3L4 7V11C4 16 7 20 12 21C17 20 20 16 20 11V7L12 3Z"
            fill="url(#shieldGradient)"
            opacity="0.2"
        />
        <path
            d="M12 3L4 7V11C4 16 7 20 12 21C17 20 20 16 20 11V7L12 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <defs>
            <linearGradient id="shieldGradient" x1="12" y1="3" x2="12" y2="21">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#ff6b35" />
            </linearGradient>
        </defs>
    </svg>
);

// Premium Star Icon - Filled with gradient
export const PremiumStar: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="url(#starGradient)"
        />
        <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <defs>
            <linearGradient id="starGradient" x1="12" y1="2" x2="12" y2="21">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#ff6b35" />
            </linearGradient>
        </defs>
    </svg>
);

// Premium Users Icon - Group with modern style
export const PremiumUsers: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="15" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <path
            d="M3 20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M16 20C16 17.7909 17.7909 16 20 16C20.3438 16 20.6797 16.0391 21 16.1133"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
        />
    </svg>
);

// Premium Info Icon - Circle with i
export const PremiumInfo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 16V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
    </svg>
);

// Premium Arrow Down - Animated style
export const PremiumArrowDown: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Premium Calendar Icon - Modern minimal
export const PremiumCalendar: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
        <path d="M8 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="14" r="1" fill="currentColor" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
        <circle cx="16" cy="14" r="1" fill="currentColor" />
        <circle cx="8" cy="17" r="1" fill="currentColor" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
);

// Premium Question Icon - Help/FAQ
export const PremiumQuestion: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
            d="M9.09 9C9.325 8.33 9.789 7.768 10.398 7.409C11.007 7.05 11.72 6.919 12.416 7.038C13.112 7.157 13.743 7.518 14.194 8.057C14.645 8.596 14.887 9.278 14.877 9.98C14.877 12 11.877 13.01 11.877 13.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
);

// Premium ChevronDown - Smooth arrow
export const PremiumChevronDown: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Premium Target Icon - For "Perfect if you"
export const PremiumTarget: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="url(#targetGradient1)" strokeWidth="2" opacity="0.3" />
        <circle cx="12" cy="12" r="6" stroke="url(#targetGradient1)" strokeWidth="2" opacity="0.5" />
        <circle cx="12" cy="12" r="3" fill="url(#targetGradient1)" />
        <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <defs>
            <linearGradient id="targetGradient1" x1="12" y1="2" x2="12" y2="22">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
            </linearGradient>
        </defs>
    </svg>
);

// Premium Block Icon - For "Not for you if"
export const PremiumBlock: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="url(#blockGradient)" opacity="0.1" />
        <circle cx="12" cy="12" r="10" stroke="url(#blockGradient)" strokeWidth="2" />
        <path
            d="M4.93 4.93L19.07 19.07"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <defs>
            <linearGradient id="blockGradient" x1="12" y1="2" x2="12" y2="22">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
        </defs>
    </svg>
);
