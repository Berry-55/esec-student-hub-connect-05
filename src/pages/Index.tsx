import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { NewsUpdates } from "@/components/NewsUpdates";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <QuickLinks />
      <NewsUpdates />
      <Footer />
    </div>
  );
};

export default Index;
