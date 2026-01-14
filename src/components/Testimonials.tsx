import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "BMW M5 Owner",
    content:
      "The attention to detail is unmatched. My M5 looks better than when I first bought it. The ceramic coating they applied is incredible.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Mercedes S-Class Owner",
    content:
      "Professional, punctual, and perfectionist. They treated my car like it was their own. Highly recommend their premium package.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Porsche 911 Owner",
    content:
      "I've tried many detailing services, but this studio is on another level. The paint correction work they did was flawless.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="section-heading mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="section-subheading">
            Don't just take our word for it — hear from vehicle owners who trust
            us with their prized possessions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card-hover p-8 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
