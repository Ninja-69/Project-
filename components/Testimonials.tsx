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
      logoIcon: <Box className="w-6 h-6 text-amber-600" strokeWidth={2.5} />,
      company: "The Local Roaster Café",
      text: "I was dragging my feet on a new website because the last one was a confusing nightmare. The agency team made it painless. Now, our online ordering system actually works smoothly, and the site loads fast even on an old phone. Since the launch, our online pre-orders are up 60%. Honestly, it just makes me look more professional, and I'm not embarrassed to send customers there anymore.",
      author: "David Chen",
      role: "Owner - The Local Roaster Café",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      logoIcon: <Circle className="w-6 h-6 text-blue-400" strokeWidth={2.5} />,
      company: "Elite Dental Care",
      text: "Before this Voice Agent, my receptionists were constantly swamped just answering basic calls—'What are your hours?' 'Do you take my insurance?' Now, the AI handles all those repetitive questions perfectly. It sounds incredibly clear, and our patients love getting instant answers. My front office team can actually focus on patient care and scheduling, which has completely changed the stress level in the office.",
      author: "Jessica Morales",
      role: "Practice Manager - Elite Dental Care",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      logoIcon: <Hexagon className="w-6 h-6 text-orange-500" strokeWidth={2.5} />,
      company: "InnoWear Apparel",
      text: "We had this ridiculous, manual process for categorizing thousands of customer feedback tickets. It was a massive time sink. The agency came in and built an AI model that does it instantly, with scary accuracy. It saves our analysts at least 20 hours per week and gives us real-time insights we didn't have before. The project was delivered on time, under budget, and the impact was immediate. No fluff, just results.",
      author: "Omar Khan",
      role: "Head of Product Development - InnoWear Apparel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
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