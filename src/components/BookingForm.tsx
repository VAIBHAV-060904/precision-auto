import { useState } from "react";
import { Car, Calendar, Clock, User, Mail, Phone, Send } from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-24 px-4 bg-surface-elevated relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Book Now
          </span>
          <h2 className="section-heading mb-4">
            Schedule Your
            <br />
            <span className="text-primary">Detailing Session</span>
          </h2>
          <p className="section-subheading">
            Ready to give your vehicle the care it deserves? Book your
            appointment today.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>

            {/* Vehicle Type */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Vehicle Type
              </label>
              <div className="relative">
                <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select Vehicle</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV / Crossover</option>
                  <option value="truck">Truck</option>
                  <option value="sports">Sports Car</option>
                  <option value="luxury">Luxury Vehicle</option>
                </select>
              </div>
            </div>

            {/* Preferred Date */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Preferred Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                  required
                />
              </div>
            </div>

            {/* Preferred Time */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Preferred Time
              </label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground resize-none"
              placeholder="Tell us about any specific requirements..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 w-full btn-primary-glow flex items-center justify-center gap-3 light-sweep"
          >
            <Send className="w-5 h-5" />
            Request Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
