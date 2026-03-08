import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Experience } from "@/types/resume";
import { Plus, Trash2 } from "lucide-react";

const ExperienceForm = () => {
  const { resumeData, setResumeData } = useResume();

  const addExperience = () => {
    const newExp: Experience = {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };
    setResumeData((prev) => ({ ...prev, experience: [...prev.experience, newExp] }));
  };

  const updateExperience = (id: string, field: string, value: string | boolean) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({ ...prev, experience: prev.experience.filter((e) => e.id !== id) }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Experience</h3>
        <Button onClick={addExperience} size="sm" variant="outline">
          <Plus className="h-4 w-4 mr-1" /> Add
        </Button>
      </div>
      {resumeData.experience.map((exp) => (
        <div key={exp.id} className="p-4 rounded-lg border border-border space-y-3 bg-card">
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" onClick={() => removeExperience(exp.id)}>
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label>Company</Label>
              <Input value={exp.company} onChange={(e) => updateExperience(exp.id, "company", e.target.value)} placeholder="Company name" />
            </div>
            <div className="space-y-1">
              <Label>Position</Label>
              <Input value={exp.position} onChange={(e) => updateExperience(exp.id, "position", e.target.value)} placeholder="Software Engineer" />
            </div>
            <div className="space-y-1">
              <Label>Start Date</Label>
              <Input type="month" value={exp.startDate} onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>End Date</Label>
              <Input type="month" value={exp.endDate} onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)} disabled={exp.current} />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id={`current-${exp.id}`} checked={exp.current} onCheckedChange={(checked) => updateExperience(exp.id, "current", !!checked)} />
            <Label htmlFor={`current-${exp.id}`} className="text-sm">Currently working here</Label>
          </div>
          <div className="space-y-1">
            <Label>Description</Label>
            <Textarea value={exp.description} onChange={(e) => updateExperience(exp.id, "description", e.target.value)} placeholder="Describe your responsibilities and achievements..." rows={3} />
          </div>
        </div>
      ))}
      {resumeData.experience.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">No experience added yet. Click "Add" to get started.</p>
      )}
    </div>
  );
};

export default ExperienceForm;
