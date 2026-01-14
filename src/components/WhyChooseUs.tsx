import { Award, ShieldCheck, Users, Gem } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Professional Detailing",
    description: "Factory-trained technicians with years of premium automotive experience.",
  },
  {
    icon: ShieldCheck,
    title: "Scratch-Safe Products",
    description: "We use only pH-balanced, paint-safe products to protect your finish.",
  },
  {
    icon: Users,
    title: "Trained Experts",
    description: "Our team undergoes continuous training in the latest detailing techniques.",
  },
  {
    icon: Gem,
    title: "Premium Finish",
    description: "Every vehicle leaves our studio with a flawless, showroom-quality finish.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4 bg-surface-elevated">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="section-heading mb-4">
            The <span className="text-primary">Difference</span> is in
            <br />
            the Details
          </h2>
          <p className="section-subheading">
            We don't just clean cars — we restore and protect them with
            precision craftsmanship.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="relative mx-auto w-20 h-20 mb-6">
                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:border-primary/50 transition-colors duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
