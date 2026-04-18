import { useState } from "react";
import { ResumeProvider, useResume } from "@/context/ResumeContext";
import PersonalInfoForm from "@/components/resume/PersonalInfoForm";
import EducationForm from "@/components/resume/EducationForm";
import ExperienceForm from "@/components/resume/ExperienceForm";
import SkillsForm from "@/components/resume/SkillsForm";
import ResumePreview from "@/components/resume/ResumePreview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, RotateCcw, User, GraduationCap, Briefcase, Wrench, Eye, Pencil } from "lucide-react";

const ResumeBuilderContent = () => {
  const { resetResume } = useResume();
  const [mobileView, setMobileView] = useState<"edit" | "preview">("edit");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 glass border-b border-border/50">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg blur-md opacity-60 rounded-xl" />
              <div className="relative gradient-bg p-2 sm:p-2.5 rounded-xl shadow-elegant">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h1 className="text-base sm:text-xl font-display font-bold tracking-tight">
                <span className="gradient-text">Resume</span>
                <span className="text-foreground">Forge</span>
              </h1>
              <p className="hidden sm:block text-[11px] text-muted-foreground">Craft a stunning resume in minutes</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={resetResume} className="gap-1.5 rounded-full">
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </Button>
        </div>
        {/* Mobile view toggle */}
        <div className="lg:hidden flex border-t border-border/50">
          <button
            onClick={() => setMobileView("edit")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-colors ${
              mobileView === "edit" ? "text-primary border-b-2 border-primary bg-primary/5" : "text-muted-foreground"
            }`}
          >
            <Pencil className="h-4 w-4" /> Edit
          </button>
          <button
            onClick={() => setMobileView("preview")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-colors ${
              mobileView === "preview" ? "text-primary border-b-2 border-primary bg-primary/5" : "text-muted-foreground"
            }`}
          >
            <Eye className="h-4 w-4" /> Preview
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-1 lg:overflow-hidden">
        {/* Left: Forms */}
        <aside
          className={`${mobileView === "edit" ? "flex" : "hidden"} lg:flex w-full lg:w-[45%] xl:w-[42%] flex-col lg:border-r border-border/50 lg:h-[calc(100vh-69px)]`}
        >
          <ScrollArea className="flex-1">
            <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6 h-auto p-1 rounded-2xl bg-secondary/60">
                  <TabsTrigger value="personal" className="rounded-xl py-2.5 data-[state=active]:shadow-soft data-[state=active]:bg-card flex flex-col sm:flex-row gap-1 sm:gap-1.5 text-xs">
                    <User className="h-3.5 w-3.5" /> <span>Personal</span>
                  </TabsTrigger>
                  <TabsTrigger value="education" className="rounded-xl py-2.5 data-[state=active]:shadow-soft data-[state=active]:bg-card flex flex-col sm:flex-row gap-1 sm:gap-1.5 text-xs">
                    <GraduationCap className="h-3.5 w-3.5" /> <span>Education</span>
                  </TabsTrigger>
                  <TabsTrigger value="experience" className="rounded-xl py-2.5 data-[state=active]:shadow-soft data-[state=active]:bg-card flex flex-col sm:flex-row gap-1 sm:gap-1.5 text-xs">
                    <Briefcase className="h-3.5 w-3.5" /> <span>Work</span>
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="rounded-xl py-2.5 data-[state=active]:shadow-soft data-[state=active]:bg-card flex flex-col sm:flex-row gap-1 sm:gap-1.5 text-xs">
                    <Wrench className="h-3.5 w-3.5" /> <span>Skills</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="personal" className="animate-fade-in"><PersonalInfoForm /></TabsContent>
                <TabsContent value="education" className="animate-fade-in"><EducationForm /></TabsContent>
                <TabsContent value="experience" className="animate-fade-in"><ExperienceForm /></TabsContent>
                <TabsContent value="skills" className="animate-fade-in"><SkillsForm /></TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </aside>

        {/* Right: Preview */}
        <section
          className={`${mobileView === "preview" ? "flex" : "hidden"} lg:flex flex-1 lg:h-[calc(100vh-69px)]`}
        >
          <ResumePreview />
        </section>
      </div>
    </div>
  );
};

const Index = () => (
  <ResumeProvider>
    <ResumeBuilderContent />
  </ResumeProvider>
);

export default Index;
