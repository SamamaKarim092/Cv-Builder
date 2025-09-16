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


const ResizableSidebar = () => {
  // Personal Info State
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

// Skills State
const [skills, setSkills] = useState([
  { type: '', skill: '' }
]);

// Add new skill row
const addSkill = () => {
  setSkills([...skills, { type: '', skill: '' }]);
};

// Remove skill by index
const removeSkill = (index) => {
  if (skills.length > 1) {
    setSkills(skills.filter((_, i) => i !== index));
  }
};

// Update skill at index
const updateSkill = (index, field, value) => {
  const updated = skills.map((item, i) => {
    if (i === index) {
      return { ...item, [field]: value };
    }
    return item;
  });
  setSkills(updated);
};

// Projects State
const [projects, setProjects] = useState([
  {
    id: Date.now(),
    name: '',
    type: '',
    description: [''],
    liveLink: '',
    codeLink: ''
  }
]);

// Handlers (we'll define them below)
// Add new project
const addProject = () => {
  const newProject = {
    id: Date.now(),
    name: '',
    type: '',
    description: [''],
    liveLink: '',
    codeLink: ''
  };
  setProjects([...projects, newProject]);
};

// Remove project by id
const removeProject = (id) => {
  if (projects.length > 1) {
    setProjects(projects.filter(p => p.id !== id));
  }
};

// Update project by id
const updateProject = (id, field, value) => {
  setProjects(projects.map(p => 
    p.id === id ? { ...p, [field]: value } : p
  ));
};

// Add new description point to project
const addDescriptionPoint = (id) => {
  setProjects(projects.map(p => {
    if (p.id === id) {
      return { ...p, description: [...p.description, ''] };
    }
    return p;
  }));
};

// Update description point at index
const updateDescription = (projectId, index, value) => {
  setProjects(projects.map(p => {
    if (p.id === projectId) {
      return {
        ...p,
        description: p.description.map((d, i) => i === index ? value : d)
      };
    }
    return p;
  }));
};

// Remove description point at index
const removeDescriptionPoint = (projectId, index) => {
  setProjects(projects.map(p => {
    if (p.id === projectId && p.description.length > 1) {
      return {
        ...p,
        description: p.description.filter((_, i) => i !== index)
      };
    }
    return p;
  }));
};

// Certifications State
const [certifications, setCertifications] = useState([
  { id: Date.now(), name: '', link: '' }
]);

// Add new certification
const addCertification = () => {
  setCertifications([...certifications, { id: Date.now(), name: '', link: '' }]);
};

// Remove certification by id
const removeCertification = (id) => {
  if (certifications.length > 1) {
    setCertifications(certifications.filter(c => c.id !== id));
  }
};

// Update certification field
const updateCertification = (id, field, value) => {
  setCertifications(certifications.map(c =>
    c.id === id ? { ...c, [field]: value } : c
  ));
};

// Achievements State
const [achievements, setAchievements] = useState([
  { id: Date.now(), description: '' }
]);

// Add new achievement
const addAchievement = () => {
  setAchievements([...achievements, { id: Date.now(), description: '' }]);
};

// Remove achievement by id
const removeAchievement = (id) => {
  if (achievements.length > 1) {
    setAchievements(achievements.filter(a => a.id !== id));
  }
};

// Update achievement description
const updateAchievement = (id, value) => {
  setAchievements(achievements.map(a =>
    a.id === id ? { ...a, description: value } : a
  ));
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
      children: <Skills skills={skills} onAddSkill={addSkill} onRemoveSkill={removeSkill} onUpdateSkill={updateSkill} />
    },
    {
      id: 5, 
      title: "Projects",
      icon: FolderOpen,
      content: "Showcase your projects with descriptions, technologies used, and links. Add, edit, or remove projects as needed.",
      children: <Projects projects={projects} onAddProject={addProject} onRemoveProject={removeProject} onUpdateProject={updateProject} onAddDescriptionPoint={addDescriptionPoint} onUpdateDescription={updateDescription} onRemoveDescriptionPoint={removeDescriptionPoint} />
    },
    {
      id: 6, 
      title: "Certifications",
      icon: Award,
      content: "Add your professional certifications, licenses, and credentials with verification links and issue dates.",
      children: <Certifications certifications={certifications} onAddCertification={addCertification} onRemoveCertification={removeCertification} onUpdateCertification={updateCertification} />
    },
    {
      id: 7, 
      title: "Achievement",
      icon: Trophy,
      content: "Highlight your awards, honors, and notable accomplishments with dates and organizing institutions.",
      children: <Achievement achievements={achievements} onAddAchievement={addAchievement} onRemoveAchievement={removeAchievement} onUpdateAchievement={updateAchievement} />
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
            <Resume personalInfo={personalInfo} objective={objective} education={education} skills={skills} projects={projects} certifications={certifications} achievements={achievements} />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableSidebar;