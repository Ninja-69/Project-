import React, { useState, useRef, useEffect } from 'react';
import Badge from './ui/Badge';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import Reveal from './ui/Reveal';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Check for mobile to adjust visible cards (1 on mobile, 2 on desktop)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const reviews = [
    {
      id: 1,
      logoIcon: (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#8B4513" strokeWidth="2"/>
          <path d="M50 20C35 20 25 30 25 45C25 55 30 65 50 75C70 65 75 55 75 45C75 30 65 20 50 20Z" fill="#D2691E" opacity="0.8"/>
          <circle cx="50" cy="45" r="8" fill="#8B4513"/>
        </svg>
      ),
      company: "The Local Roaster Café",
      text: "The website transformation was painless. Our online ordering system works smoothly, loads fast, and since launch, pre-orders are up 60%. It looks professional and I'm proud to share it.",
      author: "David Chen",
      role: "Owner - The Local Roaster Café",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      logoIcon: (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#0EA5E9" strokeWidth="2"/>
          <path d="M50 25C45 25 42 28 42 35L42 65C42 72 45 75 50 75C55 75 58 72 58 65L58 35C58 28 55 25 50 25Z" fill="#0EA5E9" opacity="0.7"/>
          <circle cx="45" cy="35" r="3" fill="#0EA5E9"/>
          <circle cx="55" cy="35" r="3" fill="#0EA5E9"/>
          <path d="M48 55L52 55M48 62L52 62" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      company: "Elite Dental Care",
      text: "The Voice Agent handles all repetitive calls perfectly. Patients love instant answers, and our team can focus on actual patient care. The stress level in our office has completely changed.",
      author: "Jessica Morales",
      role: "Practice Manager - Elite Dental Care",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      logoIcon: (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#FF6B35" strokeWidth="2"/>
          <path d="M50 25L65 35L65 55C65 70 50 80 50 80C50 80 35 70 35 55L35 35L50 25Z" fill="#FF6B35" opacity="0.7"/>
          <text x="50" y="60" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#FF6B35" fontFamily="Arial">IW</text>
        </svg>
      ),
      company: "InnoWear Apparel",
      text: "The AI model categorizes feedback instantly with scary accuracy. It saves our analysts 20 hours weekly and delivers real-time insights. Delivered on time, under budget, with immediate impact.",
      author: "Omar Khan",
      role: "Head of Product Development - InnoWear Apparel",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      logoIcon: (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#10B981" strokeWidth="2"/>
          <path d="M50 30L60 40L60 65C60 72 55 78 50 78C45 78 40 72 40 65L40 40L50 30Z" fill="#10B981" opacity="0.7"/>
          <circle cx="50" cy="50" r="4" fill="#10B981"/>
        </svg>
      ),
      company: "GreenTech Solutions",
      text: "Implementation was seamless and the ROI was immediate. Our operations are 40% more efficient, and the team adoption rate exceeded expectations. Highly recommend their approach.",
      author: "Sarah Mitchell",
      role: "Operations Director - GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const cardsToShow = isMobile ? 1 : 2;
  const maxIndex = Math.ceil(reviews.length / cardsToShow) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Ambient Red/Orange Glow on the left as per screenshot aesthetic */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-orange-900/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal effect="zoom-in" delay={0.1}>
            <Badge className="mb-8 border-orange-500/30 text-orange-300 bg-orange-500/10">
              <MessageCircle size={14} className="mr-2" /> Reviews
            </Badge>
          </Reveal>
          
          <Reveal effect="blur-in" delay={0.2} width="100%">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              Here's what our clients say
            </h2>
          </Reveal>

          <Reveal effect="fade-up" delay={0.3}>
            <p className="text-gray-400 text-lg">
              Hear the success stories of the businesses we've helped thrive with AI.
            </p>
          </Reveal>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Slider Window */}
          <Reveal effect="fade-up" delay={0.4} width="100%">
            <div 
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {/* Group reviews into slides based on cardsToShow */}
                {Array.from({ length: Math.ceil(reviews.length / cardsToShow) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6 px-2">
                    {reviews.slice(slideIndex * cardsToShow, (slideIndex * cardsToShow) + cardsToShow).map((review) => (
                        <div 
                          key={review.id} 
                          className={`w-full ${cardsToShow === 2 ? 'md:w-1/2' : 'w-full'} bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[400px] hover:border-white/10 transition-colors duration-300`}
                        >
                          <div>
                            {/* Logo Header */}
                            <div className="flex items-center gap-3 mb-8">
                              {review.logoIcon}
                              <span className="text-xl font-bold text-white tracking-tight">{review.company}</span>
                            </div>

                            {/* Quote */}
                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-gray-200 mb-8">
                              "{review.text}"
                            </blockquote>
                          </div>

                          {/* Author */}
                          <div className="flex items-center gap-4 mt-auto">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                              <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-white font-semibold">{review.author}</span>
                              <span className="text-sm text-primary">{review.role}</span>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Navigation Buttons */}
          <div className="hidden md:flex absolute top-1/2 -left-16 -translate-y-1/2 z-20">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 group disabled:opacity-50"
              disabled={currentIndex === 0 && false} // looping enabled
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="hidden md:flex absolute top-1/2 -right-16 -translate-y-1/2 z-20">
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 group"
            >
              <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Pagination Dots (Mobile/Tablet) */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-primary w-6' : 'bg-gray-700 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;