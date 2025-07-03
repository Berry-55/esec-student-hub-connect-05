import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Award, 
  Users,
  BookOpen,
  Lightbulb
} from "lucide-react";

const About = () => {
  const achievements = [
    { title: "Autonomous Status", year: "2008", description: "Granted autonomous status by AICTE" },
    { title: "NAAC Accreditation", year: "2015", description: "Accredited with 'A' Grade by NAAC" },
    { title: "NBA Accreditation", year: "2018", description: "Multiple programs accredited by NBA" },
    { title: "ISO Certification", year: "2020", description: "ISO 9001:2015 certified institution" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Commitment to highest standards in education and research"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creativity and cutting-edge technological solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong industry partnerships and student communities"
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Continuous improvement and knowledge advancement"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-slide-up">
            <Badge className="bg-primary text-primary-foreground px-4 py-2">
              Established 1998
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              About <span className="bg-hero-gradient bg-clip-text text-transparent">ESEC</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A legacy of 25+ years in engineering education, research excellence, 
              and industry collaboration shaping future technological leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 animate-slide-up">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality technical education through innovative teaching methodologies, 
                  cutting-edge research, and strong industry partnerships. We are committed to 
                  developing competent engineers who can contribute to society and lead technological 
                  advancement in the global arena.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 animate-slide-up [animation-delay:0.2s]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be a globally recognized center of excellence in engineering education and research, 
                  fostering innovation, entrepreneurship, and ethical leadership. We envision graduates 
                  who are industry-ready, socially responsible, and capable of addressing complex 
                  technological challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Core <span className="bg-hero-gradient bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our educational philosophy and institutional culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="bg-card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Key <span className="bg-hero-gradient bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Milestones in our journey towards educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="bg-card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-primary text-primary-foreground mx-auto">
                    {achievement.year}
                  </Badge>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-slide-up">
              <h3 className="text-4xl font-bold">25+</h3>
              <p className="text-primary-foreground/80">Years of Excellence</p>
            </div>
            <div className="space-y-2 animate-slide-up [animation-delay:0.1s]">
              <h3 className="text-4xl font-bold">8</h3>
              <p className="text-primary-foreground/80">Engineering Departments</p>
            </div>
            <div className="space-y-2 animate-slide-up [animation-delay:0.2s]">
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="text-primary-foreground/80">Faculty Members</p>
            </div>
            <div className="space-y-2 animate-slide-up [animation-delay:0.3s]">
              <h3 className="text-4xl font-bold">5000+</h3>
              <p className="text-primary-foreground/80">Alumni Network</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;