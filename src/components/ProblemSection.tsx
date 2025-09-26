import { AlertTriangle, Waves, Zap, TrendingUp } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Waves,
      title: 'Flood Water Contamination',
      stat: '18%',
      description: 'of Bangladesh affected by floods annually',
      details: 'Millions lack access to clean drinking water during and after floods, leading to waterborne diseases and health crises.',
    },
    {
      icon: AlertTriangle,
      title: 'Coastal Salinity Intrusion',
      stat: '2.5M',
      description: 'people affected by saltwater contamination',
      details: 'Rising sea levels and climate change have made freshwater sources increasingly saline in coastal regions.',
    },
    {
      icon: Zap,
      title: 'Energy Poverty',
      stat: '40%',
      description: 'of rural communities lack reliable electricity',
      details: 'Without consistent power, traditional water treatment solutions cannot function effectively in remote areas.',
    },
  ];

  return (
    <section id="problem" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse-slow" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground drop-shadow-[0_0_30px_theme(colors.primary.DEFAULT)]">
            The Water Crisis We're Solving
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Across Bangladesh's vulnerable regions, communities face unprecedented challenges in accessing clean, safe drinking water.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="card-glass hover:shadow-glow transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-destructive/80 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-glow-orange">
                  <problem.icon size={32} className="text-destructive-foreground" />
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2 group-hover:text-accent-light transition-colors duration-300 drop-shadow-[0_0_20px_theme(colors.accent.DEFAULT)]">
                    {problem.stat}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-medium">
                    {problem.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {problem.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action with Glow Effect */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-card/60 backdrop-blur-sm border border-primary/40 rounded-full px-8 py-4 shadow-glow hover:shadow-glow-cyan transition-all duration-300">
            <TrendingUp size={24} className="text-accent glow-accent" />
            <span className="text-lg font-semibold text-foreground">
              These challenges demand innovative, sustainable solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;