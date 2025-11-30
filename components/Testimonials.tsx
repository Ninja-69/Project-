import React, { useState, useRef, useEffect } from 'react';
import Badge from './ui/Badge';
import { ArrowLeft, ArrowRight, Box, Circle, Cloud, Hexagon, MessageCircle } from 'lucide-react';
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
      logoIcon: <Box className="w-6 h-6 text-white" strokeWidth={2.5} />,
      company: "Logoipsum",
      text: "Our AI-driven voice assistant developed by Auralis now handles all incoming customer support queries instantly, 24/7.",
      author: "James Harrington",
      role: "CEO - Logoipsum",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      logoIcon: <Circle className="w-6 h-6 text-white" strokeWidth={2.5} />,
      company: "Logoipsum",
      text: "Auralis automated a large part of our workflows, resulting in a significant increase in productivity and a huge decrease in cost.",
      author: "Emma Castillo",
      role: "Founder - Logoipsum",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      logoIcon: <Cloud className="w-6 h-6 text-white" strokeWidth={2.5} />,
      company: "Logoipsum",
      text: "Auralis' AI consulting streamlined our operations and reduced costs by 30%. Would highly recommend their consulting services!",
      author: "Liam Bennett",
      role: "CTO - Logoipsum",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 4,
      logoIcon: <Hexagon className="w-6 h-6 text-white" strokeWidth={2.5} />,
      company: "Logoipsum",
      text: "Partnering with Auralis for the development of our customer service chatbot was the best decision we could've made!",
      author: "Sophia Reynolds",
      role: "Co-founder - Logoipsum",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
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