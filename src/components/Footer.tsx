import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail,
  Clock
} from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Departments", path: "/departments" },
    { name: "Admissions", path: "/admissions" },
    { name: "Placements", path: "/achievements" },
    { name: "Research", path: "/research" },
    { name: "Alumni", path: "/alumni" }
  ];

  const studentLinks = [
    { name: "Student Portal", path: "/student-portal" },
    { name: "Academic Calendar", path: "/calendar" },
    { name: "Library", path: "/library" },
    { name: "Facilities", path: "/facilities" },
    { name: "Clubs & Activities", path: "/activities" },
    { name: "Grievance", path: "/grievance" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                  ESEC
                </h3>
                <p className="text-sm text-muted-foreground">Engineering Excellence</p>
              </div>
            </Link>
            
            <p className="text-muted-foreground">
              Erode Sengunthar Engineering College - An autonomous institution committed to 
              producing industry-ready engineers with cutting-edge curriculum and world-class facilities.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Perundurai, Erode District</p>
                  <p className="text-muted-foreground text-sm">Tamil Nadu - 638057</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground">+91 4294 226511</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground">info@esec.ac.in</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Student Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Student Resources</h4>
            <div className="grid grid-cols-1 gap-3">
              {studentLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter & Office Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Subscribe to our newsletter for latest updates and announcements.
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="text-sm"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <h5 className="font-medium">Office Hours</h5>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Erode Sengunthar Engineering College. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};