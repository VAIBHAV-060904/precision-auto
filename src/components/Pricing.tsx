import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Essential",
    price: "149",
    description: "Perfect for regular maintenance",
    features: [
      "Exterior Hand Wash",
      "Interior Vacuum",
      "Dashboard Wipe Down",
      "Window Cleaning",
      "Tire Shine",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "299",
    description: "Complete care inside & out",
    features: [
      "Everything in Essential",
      "Clay Bar Treatment",
      "Leather Conditioning",
      "Engine Bay Clean",
      "Paint Sealant",
      "Odor Elimination",
    ],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "599",
    description: "The ultimate showroom experience",
    features: [
      "Everything in Premium",
      "Paint Correction",
      "Ceramic Coating",
      "Headlight Restoration",
      "Fabric Protection",
      "12-Month Warranty",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-surface-elevated">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Packages
          </span>
          <h2 className="section-heading mb-4">
            Choose Your
            <br />
            <span className="text-primary">Detailing Package</span>
          </h2>
          <p className="section-subheading">
            Transparent pricing with no hidden fees. Select the package that
            suits your vehicle's needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                pkg.popular
                  ? "glass-card border-primary/50 scale-105 z-10"
                  : "glass-card-hover"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {pkg.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {pkg.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-foreground">
                  ${pkg.price}
                </span>
                <span className="text-muted-foreground ml-2">/ session</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "btn-primary-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
