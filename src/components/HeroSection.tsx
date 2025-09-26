import { ArrowDown, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark Background with Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse-slow" />
      
      {/* Floating Neon Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float ${
              i % 3 === 0 ? 'bg-primary glow-primary' : 
              i % 3 === 1 ? 'bg-secondary glow-secondary' : 
              'bg-accent glow-accent'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline with Neon Glow Effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="drop-shadow-lg">Clean Water.</span>{' '}
            <span className="text-gradient-ocean drop-shadow-[0_0_30px_theme(colors.primary.DEFAULT)]">Anywhere.</span>{' '}
            <span className="text-gradient-solar drop-shadow-[0_0_30px_theme(colors.accent.DEFAULT)]">Anytime.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Portable Solar Water Purifying System for Flood-Affected, Coastal Areas and Hill Tracks
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#solution"
              className="btn-hero px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 group"
            >
              Learn More
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="btn-outline px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2"
            >
              <PlayCircle size={20} />
              Contact Our Team
            </a>
          </div>

          {/* Stats Preview with Glow Effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: '3.8L', label: 'Per Minute', color: 'primary' },
              { value: '99.9%', label: 'Purification', color: 'secondary' },
              { value: '300W', label: 'Solar Power', color: 'accent' },
              { value: '20hr', label: 'Battery Life', color: 'primary' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-2xl md:text-3xl font-bold mb-2 group-hover:scale-110 transition-all duration-300 ${
                  stat.color === 'primary' ? 'text-gradient-ocean drop-shadow-[0_0_20px_theme(colors.primary.DEFAULT)]' :
                  stat.color === 'secondary' ? 'text-secondary drop-shadow-[0_0_20px_theme(colors.secondary.DEFAULT)]' :
                  'text-accent drop-shadow-[0_0_20px_theme(colors.accent.DEFAULT)]'
                }`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;