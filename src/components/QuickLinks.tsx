import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award,
  Building,
  UserPlus
} from "lucide-react";

export const QuickLinks = () => {
  const links = [
    {
      title: "Academic Programs",
      description: "Explore our engineering departments and specializations",
      icon: BookOpen,
      path: "/departments",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Admissions",
      description: "Join our community of future engineers",
      icon: UserPlus,
      path: "/admissions",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Student Portal",
      description: "Contribute and showcase college achievements",
      icon: Users,
      path: "/student-portal",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Placements",
      description: "Industry partnerships and career opportunities",
      icon: Award,
      path: "/achievements",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Campus Life",
      description: "Discover facilities, clubs, and activities",
      icon: Building,
      path: "/campus",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Alumni Network",
      description: "Connect with successful graduates",
      icon: GraduationCap,
      path: "/alumni",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Discover <span className="bg-hero-gradient bg-clip-text text-transparent">ESEC</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate through our comprehensive educational ecosystem designed for academic excellence and industry readiness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card 
                key={link.title}
                className="group hover:shadow-primary border-0 bg-card-gradient transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {link.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {link.description}
                      </p>
                    </div>

                    <Link to={link.path}>
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};