import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Education } from "@/types/resume";
import { Plus, Trash2 } from "lucide-react";

const EducationForm = () => {
  const { resumeData, setResumeData } = useResume();

  const addEducation = () => {
    const newEdu: Education = {
      id: crypto.randomUUID(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      gpa: "",
    };
    setResumeData((prev) => ({ ...prev, education: [...prev.education, newEdu] }));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({ ...prev, education: prev.education.filter((e) => e.id !== id) }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Education</h3>
        <Button onClick={addEducation} size="sm" variant="outline">
          <Plus className="h-4 w-4 mr-1" /> Add
        </Button>
      </div>
      {resumeData.education.map((edu) => (
        <div key={edu.id} className="p-4 rounded-lg border border-border space-y-3 bg-card">
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" onClick={() => removeEducation(edu.id)}>
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label>Institution</Label>
              <Input value={edu.institution} onChange={(e) => updateEducation(edu.id, "institution", e.target.value)} placeholder="University name" />
            </div>
            <div className="space-y-1">
              <Label>Degree</Label>
              <Input value={edu.degree} onChange={(e) => updateEducation(edu.id, "degree", e.target.value)} placeholder="Bachelor of Science" />
            </div>
            <div className="space-y-1">
              <Label>Field of Study</Label>
              <Input value={edu.field} onChange={(e) => updateEducation(edu.id, "field", e.target.value)} placeholder="Computer Science" />
            </div>
            <div className="space-y-1">
              <Label>GPA</Label>
              <Input value={edu.gpa} onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)} placeholder="3.8/4.0" />
            </div>
            <div className="space-y-1">
              <Label>Start Date</Label>
              <Input type="month" value={edu.startDate} onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>End Date</Label>
              <Input type="month" value={edu.endDate} onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)} />
            </div>
          </div>
        </div>
      ))}
      {resumeData.education.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">No education added yet. Click "Add" to get started.</p>
      )}
    </div>
  );
};

export default EducationForm;
