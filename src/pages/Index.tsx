import Hero from "@/components/Hero";
import MainSections from "@/components/MainSections";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MainSections />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
