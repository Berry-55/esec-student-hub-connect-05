import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-campus.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="ESEC Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge className="bg-accent-gradient text-accent-foreground px-4 py-2 text-sm font-semibold animate-pulse-glow">
                Autonomous Institution
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Erode Sengunthar
                </span>
                <br />
                <span className="text-foreground">Engineering College</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Shaping tomorrow's engineers with Industry 5.0 ready curriculum, 
                innovative research, and excellence in placement opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-hero-gradient hover:scale-105 transition-all duration-300 shadow-primary text-lg px-8 py-3">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-3">
                Virtual Tour
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <Card className="p-6 bg-card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-float">
              <div className="text-center space-y-2">
                <h3 className="text-3xl font-bold bg-hero-gradient bg-clip-text text-transparent">93.7%</h3>
                <p className="text-sm text-muted-foreground">Placement Record</p>
              </div>
            </Card>
            
            <Card className="p-6 bg-card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-float [animation-delay:0.5s]">
              <div className="text-center space-y-2">
                <h3 className="text-3xl font-bold bg-accent-gradient bg-clip-text text-transparent">₹15 LPA</h3>
                <p className="text-sm text-muted-foreground">Highest Package</p>
              </div>
            </Card>
            
            <Card className="p-6 bg-card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-float [animation-delay:1s]">
              <div className="text-center space-y-2">
                <h3 className="text-3xl font-bold text-primary">142+</h3>
                <p className="text-sm text-muted-foreground">Recruiting Companies</p>
              </div>
            </Card>
            
            <Card className="p-6 bg-card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-float [animation-delay:1.5s]">
              <div className="text-center space-y-2">
                <h3 className="text-3xl font-bold text-primary">6.0 LPA</h3>
                <p className="text-sm text-muted-foreground">Average Package</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-40 left-10 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse opacity-50" />
    </section>
  );
};