import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import ImpactSection from '@/components/ImpactSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import TechnologySection from '@/components/TechnologySection';
import SustainabilitySection from '@/components/SustainabilitySection';
import ContactSection from '@/components/ContactSection';
import { useEffect } from 'react';

const Index = () => {
  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO Meta Tags */}
      <head>
        <title>HopeDrop - Portable Solar Water Purification System | Clean Water Anywhere, Anytime</title>
        <meta 
          name="description" 
          content="HopeDrop provides revolutionary solar-powered water purification systems for flood-affected, coastal areas, and hill tracks in Bangladesh. 99.9% purification efficiency, 20-hour battery backup." 
        />
        <meta 
          name="keywords" 
          content="water purification, solar power, Bangladesh, flood relief, clean water, portable water system, water treatment" 
        />
        <meta name="author" content="HopeDrop Team" />
        <meta property="og:title" content="HopeDrop - Clean Water. Anywhere. Anytime." />
        <meta property="og:description" content="Revolutionary portable solar water purification system for Bangladesh's challenging environments." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </head>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Problem Statement */}
        <div className="scroll-animate">
          <ProblemSection />
        </div>

        {/* Solution Showcase */}
        <div className="scroll-animate">
          <SolutionSection />
        </div>

        {/* Key Features */}
        <div className="scroll-animate">
          <FeaturesSection />
        </div>

        {/* Impact & Benefits */}
        <div className="scroll-animate">
          <ImpactSection />
        </div>

        {/* Applications */}
        <div className="scroll-animate">
          <ApplicationsSection />
        </div>

        {/* Technology */}
        <div className="scroll-animate">
          <TechnologySection />
        </div>

        {/* Sustainability */}
        <div className="scroll-animate">
          <SustainabilitySection />
        </div>

        {/* Contact */}
        <div className="scroll-animate">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-2xl font-bold text-gradient-ocean">HopeDrop</span>
            </div>
            
            <div className="text-sm text-primary-foreground/70 mb-4">
              © 2024 HopeDrop. Bringing clean water solutions to communities across Bangladesh.
            </div>
            
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
              <a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
