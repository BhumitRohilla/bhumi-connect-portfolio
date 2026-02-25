import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

const Experience = () => {
  const workExperiences = experiences.filter((exp) => exp.type === "work");
  const education = experiences.filter((exp) => exp.type === "education");

  return (
    <Layout>
      {/* Hero header */}
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">Career</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Experience
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="min-h-screen flex items-center py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Work Experience</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-10">
              {workExperiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="relative pl-12 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute left-2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="secondary">{exp.period}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      {exp.achievements.length > 0 && (
                        <ul className="space-y-2 list-disc list-inside marker:text-primary">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="text-sm text-muted-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="min-h-[70vh] flex items-center py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Education</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-10">
              {education.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="relative pl-12 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${(index + workExperiences.length) * 0.15}s` }}
                >
                  <div className="absolute left-2 top-6 w-4 h-4 rounded-full bg-muted-foreground/50 border-4 border-background" />
                  
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline">{exp.period}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
