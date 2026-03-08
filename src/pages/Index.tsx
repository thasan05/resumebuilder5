import { ResumeProvider, useResume } from "@/context/ResumeContext";
import PersonalInfoForm from "@/components/resume/PersonalInfoForm";
import EducationForm from "@/components/resume/EducationForm";
import ExperienceForm from "@/components/resume/ExperienceForm";
import SkillsForm from "@/components/resume/SkillsForm";
import ResumePreview from "@/components/resume/ResumePreview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, RotateCcw } from "lucide-react";

const ResumeBuilderContent = () => {
  const { resetResume } = useResume();

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-card">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Dynamic Resume Builder</h1>
        </div>
        <Button variant="outline" size="sm" onClick={resetResume}>
          <RotateCcw className="h-4 w-4 mr-1" /> Reset
        </Button>
      </header>

      {/* Split Screen */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Forms */}
        <div className="w-1/2 border-r border-border">
          <ScrollArea className="h-full">
            <div className="p-6">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="personal"><PersonalInfoForm /></TabsContent>
                <TabsContent value="education"><EducationForm /></TabsContent>
                <TabsContent value="experience"><ExperienceForm /></TabsContent>
                <TabsContent value="skills"><SkillsForm /></TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </div>

        {/* Right: Preview */}
        <div className="w-1/2">
          <ResumePreview />
        </div>
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
