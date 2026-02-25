import { Code, Server, Brain, Database, Layout as LayoutIcon, Cloud, HardDrive, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";
import skillsHero from "@/assets/skills-hero.jpg";

const iconMap: Record<string, React.ElementType> = {
  "Languages": Code,
  "Backend": Server,
  "AI/ML": Brain,
  "Databases": Database,
  "Frontend": LayoutIcon,
  "Infrastructure": HardDrive,
  "DevOps & Tools": Cloud,
};

const gradientMap: Record<string, string> = {
  "Languages": "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  "Backend": "from-emerald-500/20 to-green-500/20 border-emerald-500/30",
  "AI/ML": "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  "Databases": "from-orange-500/20 to-amber-500/20 border-orange-500/30",
  "Frontend": "from-sky-500/20 to-indigo-500/20 border-sky-500/30",
  "Infrastructure": "from-rose-500/20 to-red-500/20 border-rose-500/30",
  "DevOps & Tools": "from-teal-500/20 to-cyan-500/20 border-teal-500/30",
};

const iconColorMap: Record<string, string> = {
  "Languages": "text-blue-400 bg-blue-500/20",
  "Backend": "text-emerald-400 bg-emerald-500/20",
  "AI/ML": "text-purple-400 bg-purple-500/20",
  "Databases": "text-orange-400 bg-orange-500/20",
  "Frontend": "text-sky-400 bg-sky-500/20",
  "Infrastructure": "text-rose-400 bg-rose-500/20",
  "DevOps & Tools": "text-teal-400 bg-teal-500/20",
};

const Skills = () => {
  return (
    <Layout>
      {/* Hero with background image */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={skillsHero} 
            alt="Tech background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">Tech Stack</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with every day to build scalable, production-grade applications.
          </p>
        </div>
      </section>

      {/* Skills Grid — Visual Cards */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = iconMap[category.name] || Code;
              const gradient = gradientMap[category.name] || "from-primary/20 to-primary/10 border-primary/30";
              const iconColor = iconColorMap[category.name] || "text-primary bg-primary/20";
              return (
                <div
                  key={category.name}
                  className={`group relative rounded-2xl border bg-gradient-to-br ${gradient} p-6 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl animate-fade-in-up opacity-0`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-3 rounded-xl ${iconColor}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                  </div>

                  {/* Skills as pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-background/60 backdrop-blur-sm border border-border/50 text-foreground font-medium px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Skill count */}
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <span className="text-xs text-muted-foreground">{category.skills.length} technologies</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">7</p>
              <p className="text-sm text-muted-foreground mt-1">Skill Domains</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">30+</p>
              <p className="text-sm text-muted-foreground mt-1">Technologies</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground mt-1">Programming Languages</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">∞</p>
              <p className="text-sm text-muted-foreground mt-1">Curiosity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Learning */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">Always Growing</span>
          </div>
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
