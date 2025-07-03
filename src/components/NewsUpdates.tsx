import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink } from "lucide-react";

export const NewsUpdates = () => {
  const news = [
    {
      title: "Industry 5.0 Curriculum Launch",
      excerpt: "ESEC becomes the first college in Tamil Nadu to introduce Industry 5.0 ready curriculum with AI and IoT integration.",
      category: "Academic",
      date: "2 days ago",
      featured: true
    },
    {
      title: "Record Breaking Placements 2024",
      excerpt: "93.7% placement record achieved with highest package of ₹15 LPA from leading tech companies.",
      category: "Placements",
      date: "1 week ago",
      featured: true
    },
    {
      title: "New Research Lab Inauguration",
      excerpt: "State-of-the-art AI & Machine Learning lab inaugurated with industry-grade equipment and infrastructure.",
      category: "Infrastructure",
      date: "2 weeks ago",
      featured: false
    },
    {
      title: "International Collaboration",
      excerpt: "Partnership signed with leading universities in Germany for student exchange programs.",
      category: "International",
      date: "3 weeks ago",
      featured: false
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Latest <span className="bg-hero-gradient bg-clip-text text-transparent">Updates</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay informed about college achievements and developments
            </p>
          </div>
          <Button variant="outline" className="mt-4 lg:mt-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All News
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2 space-y-6">
            {news.filter(item => item.featured).map((item, index) => (
              <Card 
                key={item.title}
                className="group hover:shadow-primary border-0 bg-card-gradient transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge className="bg-primary text-primary-foreground">
                        {item.category}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </CardTitle>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Updates */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Recent Updates</h3>
            {news.filter(item => !item.featured).map((item, index) => (
              <Card 
                key={item.title}
                className="group hover:shadow-card border-0 bg-card-gradient transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <h4 className="font-medium group-hover:text-primary transition-colors duration-300 leading-tight">
                      {item.title}
                    </h4>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};