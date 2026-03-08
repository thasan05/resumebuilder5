import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skill } from "@/types/resume";
import { Plus, Trash2 } from "lucide-react";

const SkillsForm = () => {
  const { resumeData, setResumeData } = useResume();

  const addSkill = () => {
    const newSkill: Skill = { id: crypto.randomUUID(), name: "", level: "intermediate" };
    setResumeData((prev) => ({ ...prev, skills: [...prev.skills, newSkill] }));
  };

  const updateSkill = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) => (s.id === id ? { ...s, [field]: value } : s)),
    }));
  };

  const removeSkill = (id: string) => {
    setResumeData((prev) => ({ ...prev, skills: prev.skills.filter((s) => s.id !== id) }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Skills</h3>
        <Button onClick={addSkill} size="sm" variant="outline">
          <Plus className="h-4 w-4 mr-1" /> Add
        </Button>
      </div>
      {resumeData.skills.map((skill) => (
        <div key={skill.id} className="flex items-center gap-3">
          <div className="flex-1 space-y-1">
            <Input value={skill.name} onChange={(e) => updateSkill(skill.id, "name", e.target.value)} placeholder="Skill name" />
          </div>
          <div className="w-40">
            <Select value={skill.level} onValueChange={(val) => updateSkill(skill.id, "level", val)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="ghost" size="icon" onClick={() => removeSkill(skill.id)}>
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      ))}
      {resumeData.skills.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">No skills added yet. Click "Add" to get started.</p>
      )}
    </div>
  );
};

export default SkillsForm;
