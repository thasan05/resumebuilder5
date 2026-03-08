import { useRef } from "react";
import { useResume } from "@/context/ResumeContext";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { TemplateType } from "@/types/resume";

const ResumePreview = () => {
  const { resumeData, template, setTemplate } = useResume();
  const previewRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${resumeData.personalInfo.fullName || "resume"}.pdf`);
  };

  const renderTemplate = () => {
    switch (template) {
      case "modern": return <ModernTemplate data={resumeData} />;
      case "minimal": return <MinimalTemplate data={resumeData} />;
      default: return <ClassicTemplate data={resumeData} />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-3 border-b border-border bg-muted/50">
        <Select value={template} onValueChange={(v) => setTemplate(v as TemplateType)}>
          <SelectTrigger className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="classic">Classic</SelectItem>
            <SelectItem value="modern">Modern</SelectItem>
            <SelectItem value="minimal">Minimal</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleExportPDF} size="sm">
          <Download className="h-4 w-4 mr-1" /> Export PDF
        </Button>
      </div>
      <div className="flex-1 overflow-auto bg-muted/30 p-4">
        <div className="mx-auto shadow-lg" style={{ width: "595px", minHeight: "842px" }} ref={previewRef}>
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
