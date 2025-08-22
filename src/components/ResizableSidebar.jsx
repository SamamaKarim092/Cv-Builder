import { useState } from 'react';
import AnimatedCollapseCard from './AnimatedCollapseCard';
import PersonalInfo from './Cards Components/PersonalInfo';
import Objective from './Cards Components/Objective';
import Education from './Cards Components/Education';
import Skills from './Cards Components/Skills';
import Projects from './Cards Components/Projects';
import Certifications from './Cards Components/Certifications';
import Achievement from './Cards Components/Achievement';
import Resume from './Resume';
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { 
  User,
  Target, 
  GraduationCap, 
  Code, 
  FolderOpen, 
  Award,
  Trophy 
} from 'lucide-react';


// Personal Info State
const ResizableSidebar = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    city: '',
    country: '',
    email: '',
    phone: '',
    linkedin: '',
    github: ''
  });

// Personal Info Change Handler
  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

// Objective State
const [objective, setObjective] = useState({
  objective: ''
});

// Objective Change Handler
const handleObjectiveChange = (value) => {
  setObjective(prev => ({
    ...prev,
    objective: value
  }));
};

// Education State
const [education , setEducation] = useState({
  university: "",
  technology: "",
  cgpa: "",
  coursework: ""
})

// Education Change Handler
const handleEducationChange = (field, value) => {
  setEducation(prev => ({
    ...prev,
    [field]: value
  }));
};


  const sidebarCards = [
    {
      id: 1,
      title: "Personal Info",
      icon: User, 
      content: "Add your personal information including name, contact details, and professional profiles.",
      children: <PersonalInfo personalInfo={personalInfo} onPersonalInfoChange={handlePersonalInfoChange} />
    },
    {
      id: 2, 
      title: "Objective",
      icon: Target,
      content: "Create and manage your CV objective statement to showcase your career goals and aspirations.",
      children: <Objective objective={objective} onObjectiveChange={handleObjectiveChange} />
    },
    {
      id: 3, 
      title: "Education",
      icon: GraduationCap,
      content: "Add your educational background including university, degree, CGPA, and relevant coursework.",
      children: <Education education={education} onEducationChange={handleEducationChange} />
    },
    {
      id: 4, 
      title: "Skills",
      icon: Code,
      content: "Add your technical and soft skills. You can add multiple skills and organize them by categories.",
      children: <Skills />
    },
    {
      id: 5, 
      title: "Projects",
      icon: FolderOpen,
      content: "Showcase your projects with descriptions, technologies used, and links. Add, edit, or remove projects as needed.",
      children: <Projects />
    },
    {
      id: 6, 
      title: "Certifications",
      icon: Award,
      content: "Add your professional certifications, licenses, and credentials with verification links and issue dates.",
      children: <Certifications />
    },
    {
      id: 7, 
      title: "Achievement",
      icon: Trophy,
      content: "Highlight your awards, honors, and notable accomplishments with dates and organizing institutions.",
      children: <Achievement />
    }
  ];

  

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[calc(100vh-64px)] w-full"
    >
      <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
        <div className="bg-gray-50 border-r border-gray-200 overflow-y-auto h-full">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-6">CV Builder Dashboard</h2>
            <div className="space-y-3">
              {sidebarCards.map((card) => (
                <AnimatedCollapseCard
                  key={card.id}
                  title={card.title}
                  icon={card.icon}
                  content={card.content}
                  className="w-full"
                >
                  {card.children}
                </AnimatedCollapseCard>
              ))}
            </div>
          </div>
        </div>
      </ResizablePanel>
      
      <ResizableHandle withHandle />
      
      <ResizablePanel defaultSize={75}>
        <div className="flex-1 p-8 bg-white h-full overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">CV Builder</h1>
          <p className="text-gray-600">
            Welcome to your CV Builder! Use the sidebar to add different sections to your CV.
            Start by filling out your personal information and other sections.
          </p>
          <div className="mt-6">
            <Button>Preview CV</Button>
          </div>

          {/* Resume component added below the button */}
          <div className="mt-8">
            <Resume personalInfo={personalInfo} objective={objective} education={education} />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableSidebar;