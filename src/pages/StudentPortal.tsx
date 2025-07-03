import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { 
  Plus, 
  Upload, 
  Star, 
  ThumbsUp, 
  MessageCircle,
  Award,
  Users,
  TrendingUp
} from "lucide-react";

const StudentPortal = () => {
  const [newContribution, setNewContribution] = useState({
    title: "",
    description: "",
    category: "",
    achievements: ""
  });
  const { toast } = useToast();

  const recentContributions = [
    {
      id: 1,
      author: "Priya Sharma",
      title: "AI Workshop Success",
      description: "Our department organized a successful AI workshop with 200+ participants",
      category: "Event",
      likes: 24,
      comments: 8,
      time: "2 hours ago",
      featured: true
    },
    {
      id: 2,
      author: "Raj Kumar",
      title: "Hackathon Victory",
      description: "Won first place in Inter-College Hackathon with innovative IoT solution",
      category: "Achievement",
      likes: 45,
      comments: 12,
      time: "1 day ago",
      featured: true
    },
    {
      id: 3,
      author: "Aishwarya M",
      title: "New Lab Equipment",
      description: "Latest robotics equipment installed in mechanical engineering lab",
      category: "Infrastructure",
      likes: 18,
      comments: 5,
      time: "3 days ago",
      featured: false
    }
  ];

  const topContributors = [
    { name: "Priya Sharma", contributions: 23, department: "CSE" },
    { name: "Raj Kumar", contributions: 19, department: "ECE" },
    { name: "Aishwarya M", contributions: 15, department: "MECH" },
    { name: "Vikram Singh", contributions: 12, department: "CIVIL" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContribution.title || !newContribution.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Contribution Submitted!",
      description: "Your contribution has been submitted for review and will be published soon."
    });
    
    setNewContribution({ title: "", description: "", category: "", achievements: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-slide-up">
            <Badge className="bg-primary text-primary-foreground px-4 py-2">
              Student Collaboration Hub
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Student <span className="bg-hero-gradient bg-clip-text text-transparent">Portal</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Share your achievements, showcase college events, and contribute to our 
              growing community of excellence. Your voice matters!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="feed" className="space-y-8">
          <TabsList className="grid w-full lg:w-auto grid-cols-3 lg:grid-cols-3">
            <TabsTrigger value="feed" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Community Feed
            </TabsTrigger>
            <TabsTrigger value="contribute" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Contribute
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Top Contributors
            </TabsTrigger>
          </TabsList>

          {/* Community Feed */}
          <TabsContent value="feed" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Latest Updates</h2>
              <Button variant="outline">Filter by Category</Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {recentContributions.map((contribution, index) => (
                  <Card 
                    key={contribution.id}
                    className="bg-card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-hero-gradient text-primary-foreground">
                              {contribution.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{contribution.author}</p>
                            <p className="text-sm text-muted-foreground">{contribution.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={contribution.featured ? "bg-accent text-accent-foreground" : "bg-secondary"}>
                            {contribution.category}
                          </Badge>
                          {contribution.featured && <Star className="w-4 h-4 text-accent fill-current" />}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-lg font-semibold mb-2">{contribution.title}</h3>
                      <p className="text-muted-foreground mb-4">{contribution.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{contribution.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span>{contribution.comments}</span>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-card-gradient border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Quick Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">142</p>
                      <p className="text-sm text-muted-foreground">Total Contributions</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">28</p>
                      <p className="text-sm text-muted-foreground">This Month</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">89</p>
                      <p className="text-sm text-muted-foreground">Active Contributors</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card-gradient border-0 shadow-card">
                  <CardHeader>
                    <CardTitle>Contribution Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p>• Share authentic college events and achievements</p>
                    <p>• Use appropriate categories for better organization</p>
                    <p>• Include photos when possible</p>
                    <p>• Be respectful and maintain college values</p>
                    <p>• All submissions are reviewed before publishing</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Contribute Section */}
          <TabsContent value="contribute" className="space-y-6">
            <Card className="bg-card-gradient border-0 shadow-card max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Share Your Story</CardTitle>
                <p className="text-muted-foreground">
                  Help showcase our college's achievements and activities to the community
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Title *</label>
                      <Input
                        value={newContribution.title}
                        onChange={(e) => setNewContribution({...newContribution, title: e.target.value})}
                        placeholder="What would you like to share?"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <Input
                        value={newContribution.category}
                        onChange={(e) => setNewContribution({...newContribution, category: e.target.value})}
                        placeholder="e.g., Event, Achievement, Infrastructure"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description *</label>
                    <Textarea
                      value={newContribution.description}
                      onChange={(e) => setNewContribution({...newContribution, description: e.target.value})}
                      placeholder="Tell us more about this update..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Key Achievements (Optional)</label>
                    <Textarea
                      value={newContribution.achievements}
                      onChange={(e) => setNewContribution({...newContribution, achievements: e.target.value})}
                      placeholder="List any specific achievements, numbers, or outcomes..."
                      className="min-h-24"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium">Attach Images (Optional)</label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Drag and drop images here, or click to browse
                      </p>
                      <Button variant="outline" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-hero-gradient hover:scale-105 transition-transform">
                      Submit Contribution
                    </Button>
                    <Button variant="outline" type="button">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Top Contributors */}
          <TabsContent value="leaderboard" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Top <span className="bg-hero-gradient bg-clip-text text-transparent">Contributors</span>
              </h2>
              <p className="text-muted-foreground">
                Celebrating students who actively contribute to our college community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topContributors.map((contributor, index) => (
                <Card 
                  key={contributor.name}
                  className="bg-card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16 mx-auto">
                        <AvatarFallback className="bg-hero-gradient text-primary-foreground text-xl">
                          {contributor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                        #{index + 1}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="font-semibold">{contributor.name}</h3>
                      <p className="text-sm text-muted-foreground">{contributor.department}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-primary">{contributor.contributions}</p>
                      <p className="text-sm text-muted-foreground">Contributions</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default StudentPortal;