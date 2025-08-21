import React, { useState } from 'react';
import { FolderOpen, Plus, X, Edit3, Save, XCircle } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: '',
      description: '',
      technologies: '',
      link: ''
    }
  ]);
  const [editingId, setEditingId] = useState(null);

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: '',
      description: '',
      technologies: '',
      link: ''
    };
    setProjects([...projects, newProject]);
  };

  const removeProject = (id) => {
    if (projects.length > 1) {
      setProjects(projects.filter(project => project.id !== id));
    }
  };

  const updateProject = (id, field, value) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  const startEditing = (id) => {
    setEditingId(id);
  };

  const stopEditing = () => {
    setEditingId(null);
  };

  return (
    <div className="space-y-2 mt-2"> {/* Reduced spacing from space-y-3 to space-y-2 */}
      {/* Projects Section */}
      <div className="space-y-2"> {/* Reduced spacing */}
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-700">Your Projects:</h4>
          <button
            onClick={addProject}
            className="flex items-center space-x-1 px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs transition-colors"
          >
            <Plus className="h-3 w-3" />
            <span>Add Project</span>
          </button>
        </div>
        
        {projects.map((project, index) => (
          <div key={project.id} className="p-2 border border-gray-200 rounded-lg bg-white space-y-2"> {/* Reduced padding */}
            {/* Project Header */}
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-medium text-gray-800">
                Project {index + 1}
              </h5>
              <div className="flex items-center space-x-1">
                {editingId === project.id ? (
                  <button
                    onClick={stopEditing}
                    className="p-1 text-green-500 hover:text-green-700 hover:bg-green-50 rounded transition-colors"
                    title="Save"
                  >
                    <Save className="h-3 w-3" />
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(project.id)}
                    className="p-1 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors"
                    title="Edit"
                  >
                    <Edit3 className="h-3 w-3" />
                  </button>
                )}
                {projects.length > 1 && (
                  <button
                    onClick={() => removeProject(project.id)}
                    className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                    title="Remove project"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Project Fields */}
            <div className="space-y-1.5"> {/* Reduced spacing */}
              <input
                type="text"
                value={project.name}
                onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                placeholder="Project Name"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" // Reduced padding
                disabled={editingId !== null && editingId !== project.id}
              />
              
              <textarea
                value={project.description}
                onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                placeholder="Project Description"
                className="w-full p-1.5 border border-gray-300 rounded resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                rows={1} // Reduced from 2 to 1
                disabled={editingId !== null && editingId !== project.id}
              />
              
              <input
                type="text"
                value={project.technologies}
                onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                placeholder="Technologies Used"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={editingId !== null && editingId !== project.id}
              />
              
              <input
                type="url"
                value={project.link}
                onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                placeholder="Project Link"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={editingId !== null && editingId !== project.id}
              />
            </div>

            {/* Project Preview (when not editing) - Condensed */}
            {editingId !== project.id && project.name && (
              <div className="mt-1 p-1.5 bg-gray-50 rounded border-l-2 border-blue-400"> {/* Reduced padding and border */}
                <div className="text-xs"> {/* Changed from text-sm to text-xs */}
                  <div className="font-medium text-gray-800">{project.name}</div>
                  {project.technologies && (
                    <div className="text-gray-500">
                      <span className="font-medium">Tech:</span> {project.technologies}
                    </div>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 underline"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Project Categories - Simplified */}
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-gray-700">Project Types:</h4>
        <div className="grid grid-cols-2 gap-1 text-xs">
          <div className="p-1.5 bg-blue-50 rounded border">
            <div className="font-medium text-blue-800">Web Apps</div>
          </div>
          <div className="p-1.5 bg-green-50 rounded border">
            <div className="font-medium text-green-800">Mobile Apps</div>
          </div>
          <div className="p-1.5 bg-purple-50 rounded border">
            <div className="font-medium text-purple-800">Backend APIs</div>
          </div>
          <div className="p-1.5 bg-orange-50 rounded border">
            <div className="font-medium text-orange-800">Machine Learning</div>
          </div>
        </div>
      </div>

      {/* Tips Section - Made More Visible */}
      <div className="space-y-1 mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg"> {/* Added background and border */}
        <h4 className="text-sm font-medium text-gray-700 flex items-center">
          💡 Project Tips:
        </h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Include 3-5 best projects</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Highlight impact and results</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Add live demo or GitHub links</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;