import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const PersonalInfoForm = () => {
  const { resumeData, setResumeData } = useResume();
  const { personalInfo } = resumeData;

  const update = (field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" value={personalInfo.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={personalInfo.email} onChange={(e) => update("email", e.target.value)} placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={personalInfo.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+1 234 567 890" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" value={personalInfo.address} onChange={(e) => update("address", e.target.value)} placeholder="City, Country" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input id="linkedin" value={personalInfo.linkedin} onChange={(e) => update("linkedin", e.target.value)} placeholder="linkedin.com/in/johndoe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input id="website" value={personalInfo.website} onChange={(e) => update("website", e.target.value)} placeholder="johndoe.com" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea id="summary" value={personalInfo.summary} onChange={(e) => update("summary", e.target.value)} placeholder="A brief summary about yourself..." rows={4} />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
