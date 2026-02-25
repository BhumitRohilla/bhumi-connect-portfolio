import { Code, Server, Brain, Database, Layout as LayoutIcon, Cloud, HardDrive } from "lucide-react";
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
  "Infrastructure": HardDrive,
  "DevOps & Tools": Cloud,
};

const Skills = () => {
  return (
    <Layout>
      {/* Hero header */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">Expertise</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build scalable applications.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = iconMap[category.name] || Code;
              return (
                <Card 
                  key={category.name}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
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
        </div>
      </section>

      {/* Currently Learning */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">Always Growing</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Currently Exploring</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Constantly learning and exploring new technologies. Currently diving deeper into{" "}
            <span className="text-primary font-medium">AI/ML integration</span> and{" "}
            <span className="text-primary font-medium">distributed systems</span>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
