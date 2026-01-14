import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}videos/hero-detailing.mp4`} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Gradient Accent at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Badge */}
        <div className="animate-fade-in mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Premium Detailing Studio
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-in-delay-1 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
          Premium Car
          <br />
          <span className="text-primary glow-text">Detailing Studio</span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mb-10">
          Handcrafted care for vehicles that deserve perfection.
          <br className="hidden md:block" />
          Experience the art of automotive excellence.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4">
          <a
            href="#booking"
            className="btn-primary-glow light-sweep animate-glow-pulse"
          >
            Book Detailing
          </a>
          <a href="#services" className="btn-outline-premium">
            View Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
