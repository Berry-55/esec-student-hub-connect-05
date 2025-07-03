import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Menu, GraduationCap, ChevronDown } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      name: "Home", 
      path: "/",
      subItems: [
        { name: "Overview", path: "/" },
        { name: "Quick Stats", path: "/#stats" },
        { name: "Latest News", path: "/#news" },
        { name: "Virtual Tour", path: "/virtual-tour" },
        { name: "Campus Map", path: "/campus-map" }
      ]
    },
    { 
      name: "About", 
      path: "/about",
      subItems: [
        { name: "History", path: "/about" },
        { name: "Mission & Vision", path: "/about/mission" },
        { name: "Leadership", path: "/about/leadership" },
        { name: "Accreditation", path: "/about/accreditation" },
        { name: "Campus Life", path: "/about/campus" }
      ]
    },
    { 
      name: "Departments", 
      path: "/departments",
      subItems: [
        { name: "Computer Science", path: "/departments/cse" },
        { name: "Electronics & Communication", path: "/departments/ece" },
        { name: "Mechanical Engineering", path: "/departments/mech" },
        { name: "Civil Engineering", path: "/departments/civil" },
        { name: "Electrical Engineering", path: "/departments/eee" }
      ]
    },
    { 
      name: "Admissions", 
      path: "/admissions",
      subItems: [
        { name: "Eligibility", path: "/admissions/eligibility" },
        { name: "Application Process", path: "/admissions/apply" },
        { name: "Fee Structure", path: "/admissions/fees" },
        { name: "Scholarships", path: "/admissions/scholarships" },
        { name: "FAQ", path: "/admissions/faq" }
      ]
    },
    { 
      name: "Student Portal", 
      path: "/student-portal",
      subItems: [
        { name: "Community Feed", path: "/student-portal" },
        { name: "Contribute Content", path: "/student-portal#contribute" },
        { name: "Top Contributors", path: "/student-portal#leaderboard" },
        { name: "Guidelines", path: "/student-portal/guidelines" },
        { name: "Support", path: "/student-portal/support" }
      ]
    },
    { 
      name: "Achievements", 
      path: "/achievements",
      subItems: [
        { name: "Placements", path: "/achievements/placements" },
        { name: "Awards & Recognition", path: "/achievements/awards" },
        { name: "Research Publications", path: "/achievements/research" },
        { name: "Alumni Success", path: "/achievements/alumni" },
        { name: "College Rankings", path: "/achievements/rankings" }
      ]
    },
    { 
      name: "Contact", 
      path: "/contact",
      subItems: [
        { name: "General Information", path: "/contact" },
        { name: "Admissions Office", path: "/contact/admissions" },
        { name: "Faculty Directory", path: "/contact/faculty" },
        { name: "Technical Support", path: "/contact/support" },
        { name: "Location & Directions", path: "/contact/location" }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center shadow-glow group-hover:shadow-primary transition-all duration-300">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                ESEC
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Engineering Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      isActive(item.path) || item.subItems.some(sub => isActive(sub.path))
                        ? "bg-primary text-primary-foreground shadow-primary"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-background/95 backdrop-blur-sm border border-border shadow-lg">
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} className="focus:bg-muted">
                      <Link 
                        to={subItem.path}
                        className={`w-full text-sm transition-colors duration-200 ${
                          isActive(subItem.path) 
                            ? "text-primary font-medium" 
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-accent-gradient hover:scale-105 transition-transform duration-200 shadow-card">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                        isActive(item.path) || item.subItems.some(sub => isActive(sub.path))
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                            isActive(subItem.path)
                              ? "bg-muted text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Button className="mt-4 bg-accent-gradient" onClick={() => setIsOpen(false)}>
                  Apply Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};