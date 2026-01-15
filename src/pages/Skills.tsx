import { Code, Server, Brain, Database, Layout as LayoutIcon, Cloud } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  "Languages": Code,
  "Backend": Server,
  "AI/ML": Brain,
  "Databases": Database,
  "Frontend": LayoutIcon,
  "DevOps & Tools": Cloud,
};

const Skills = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up opacity-0 stagger-1">
            Skills
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up opacity-0 stagger-2">
            Technologies and tools I work with to build scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.name] || Code;
            return (
              <Card 
                key={category.name}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="font-normal hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-muted/30 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                Constantly learning and exploring new technologies. Currently diving deeper into{" "}
                <span className="text-primary font-medium">AI/ML integration</span> and{" "}
                <span className="text-primary font-medium">distributed systems</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
