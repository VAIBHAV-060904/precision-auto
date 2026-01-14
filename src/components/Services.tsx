import { Droplets, Sparkles, Shield, Car } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Exterior Hand Wash",
    description: "Meticulous hand wash using pH-neutral solutions and premium microfiber technology.",
    features: ["Foam Pre-wash", "Hand Wash", "Wheel Cleaning", "Tire Dressing"],
  },
  {
    icon: Sparkles,
    title: "Interior Deep Cleaning",
    description: "Complete interior restoration including leather treatment and fabric protection.",
    features: ["Vacuum & Steam", "Leather Care", "Dashboard Detail", "Odor Elimination"],
  },
  {
    icon: Car,
    title: "Full Car Detailing",
    description: "Comprehensive inside-out detailing for the ultimate showroom finish.",
    features: ["Paint Correction", "Interior Restore", "Engine Bay Clean", "Glass Polish"],
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Professional-grade ceramic protection for long-lasting brilliance and defense.",
    features: ["Surface Prep", "Multi-layer Coat", "Hydrophobic Finish", "5-Year Protection"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="section-heading mb-4">
            Precision Detailing
            <br />
            <span className="text-primary">Services</span>
          </h2>
          <p className="section-subheading">
            Every service is performed with meticulous attention to detail,
            using only the finest products and techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card-hover p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-text-secondary flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
