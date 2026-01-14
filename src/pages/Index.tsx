import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <BeforeAfter />
      <Pricing />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
