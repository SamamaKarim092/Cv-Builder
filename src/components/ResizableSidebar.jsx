import AnimatedCollapseCard from './AnimatedCollapseCard';
import Objective from './Cards Components/Objective';
import Education from './Cards Components/Education';
import Skills from './Cards Components/Skills';
import Projects from './Cards Components/Projects';
import Certifications from './Cards Components/Certifications';
import Achievement from './Cards Components/Achievement';
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { 
  Target, 
  GraduationCap, 
  Code, 
  FolderOpen, 
  Award,
  Trophy 
} from 'lucide-react';

const ResizableSidebar = () => {
  const sidebarCards = [
    {
      id: 1,
      title: "Objective",
      icon: Target,
      content: "Create and manage your CV objective statement to showcase your career goals and aspirations.",
      children: <Objective /> // Use the new Objective component
    },
     {
      id: 2,
      title: "Education",
      icon: GraduationCap, // Changed icon to GraduationCap
      content: "Add your educational background including university, degree, CGPA, and relevant coursework.",
      children: <Education /> // Use the new Education component
    },
    {
      id: 3,
      title: "Skills",
      icon: Code, // Changed icon to Code
      content: "Add your technical and soft skills. You can add multiple skills and organize them by categories.",
      children: <Skills /> // Use the new Skills component
    },
    {
      id: 4,
      title: "Projects",
      icon: FolderOpen, // Changed icon to FolderOpen
      content: "Showcase your projects with descriptions, technologies used, and links. Add, edit, or remove projects as needed.",
      children: <Projects /> // Use the new Projects component
    },
    {
      id: 5,
      title: "Certifications",
      icon: Award, // Changed icon to Award
      content: "Add your professional certifications, licenses, and credentials with verification links and issue dates.",
      children: <Certifications /> // Use the new Certifications component
    },
     {
      id: 6,
      title: "Achievement",
      icon: Trophy, // Changed icon to Trophy
      content: "Highlight your awards, honors, and notable accomplishments with dates and organizing institutions.",
      children: <Achievement /> // Use the new Achievement component
    }
  ];

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[calc(100vh-64px)] w-full" // Adjust 64px based on your navbar height
    >
      <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
        <div className="bg-gray-50 border-r border-gray-200 overflow-y-auto h-full">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Project Dashboard</h2>
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
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Main Content Area</h1>
          <p className="text-gray-600">
            This is the main content area. The sidebar on the left is now resizable! 
            Drag the handle to adjust the sidebar width.
          </p>
          <div className="mt-6">
            <Button>Sample Button</Button>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableSidebar;