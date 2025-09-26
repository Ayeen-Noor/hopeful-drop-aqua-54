import { ArrowDown, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden cursor-water">
      {/* Clean White Background with Water Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Water Flow Overlay */}
      <div className="absolute inset-0 bg-gradient-flow opacity-40 animate-gradient-flow" />
      
      {/* Water Particles Effect */}
      <div className="absolute inset-0 water-particles" />
      
      {/* Floating Water Bubbles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-bubble ${
              i % 3 === 0 ? 'w-2 h-2 bg-primary/30' : 
              i % 3 === 1 ? 'w-3 h-3 bg-secondary/25' : 
              'w-1 h-1 bg-accent/35'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline with Water-Inspired Gradients */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">Clean Water.</span>{' '}
            <span className="text-gradient-ocean animate-wave">Anywhere.</span>{' '}
            <span className="text-gradient-water animate-wave" style={{ animationDelay: '0.5s' }}>Anytime.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-water-flow">
            Portable Solar Water Purifying System for Flood-Affected, Coastal Areas and Hill Tracks
          </p>

          {/* CTA Buttons with Water Ripple Effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#solution"
              className="btn-hero water-ripple px-8 py-4 text-lg font-semibold flex items-center gap-2 group"
            >
              Learn More
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300 animate-wave" />
            </a>
            <a
              href="#contact"
              className="btn-outline water-ripple px-8 py-4 text-lg font-semibold flex items-center gap-2"
            >
              <PlayCircle size={20} className="animate-bubble" />
              Contact Our Team
            </a>
          </div>

          {/* Stats Preview with Water Drop Effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: '3.8L', label: 'Per Minute', color: 'primary' },
              { value: '99.9%', label: 'Purification', color: 'secondary' },
              { value: '300W', label: 'Solar Power', color: 'accent' },
              { value: '20hr', label: 'Battery Life', color: 'primary' },
            ].map((stat, index) => (
              <div key={index} className="text-center group water-drop">
                <div className={`text-2xl md:text-3xl font-bold mb-2 group-hover:scale-110 transition-all duration-500 animate-water-flow ${
                  stat.color === 'primary' ? 'text-gradient-ocean' :
                  stat.color === 'secondary' ? 'text-secondary' :
                  'text-gradient-water'
                }`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Water Drop Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bubble">
        <div className="w-8 h-12 border-2 border-primary/40 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
          <div className="w-2 h-4 bg-gradient-ocean rounded-full mt-2 animate-wave" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;