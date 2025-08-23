// Projects.jsx (Controlled / Dumb Component)
import React, { useState } from 'react';
import { Plus, X, Edit3, Save } from 'lucide-react';

const Projects = ({
  projects,
  onAddProject,
  onRemoveProject,
  onUpdateProject,
  onAddDescriptionPoint,
  onUpdateDescription,
  onRemoveDescriptionPoint
}) => {
  
  const [editingId, setEditingId] = useState(null); // ← This can stay (local UI state)
  const startEditing = (id) => setEditingId(id);
  const stopEditing = () => setEditingId(null);

  return (
    <div className="space-y-2 mt-2">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-700">Your Projects:</h4>
          <button
            onClick={onAddProject}
            className="flex items-center space-x-1 px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs transition-colors"
          >
            <Plus className="h-3 w-3" />
            <span>Add Project</span>
          </button>
        </div>

        {projects.map((project) => (
          <div key={project.id} className="p-2 border border-gray-200 rounded-lg bg-white space-y-2">
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-medium text-gray-800">
                Project {projects.findIndex(p => p.id === project.id) + 1}
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
                    onClick={() => onRemoveProject(project.id)}
                    className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                    title="Remove project"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Edit Mode */}
            {editingId === project.id && (
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => onUpdateProject(project.id, 'name', e.target.value)}
                    placeholder="Project Name"
                    className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <input
                    type="text"
                    value={project.type}
                    onChange={(e) => onUpdateProject(project.id, 'type', e.target.value)}
                    placeholder="Project Type (e.g., Full-Stack)"
                    className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="url"
                    value={project.liveLink}
                    onChange={(e) => onUpdateProject(project.id, 'liveLink', e.target.value)}
                    placeholder="Live Preview Link"
                    className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <input
                    type="url"
                    value={project.codeLink}
                    onChange={(e) => onUpdateProject(project.id, 'codeLink', e.target.value)}
                    placeholder="Codebase Link (GitHub)"
                    className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-gray-600">Description:</label>
                    <button
                      onClick={() => onAddDescriptionPoint(project.id)}
                      className="flex items-center space-x-1 text-xs text-green-600 hover:text-green-800"
                    >
                      <Plus className="h-3 w-3" />
                      <span>Add Bullet</span>
                    </button>
                  </div>
                  {project.description.map((point, idx) => (
                    <div key={idx} className="flex items-center space-x-1">
                      <span className="text-gray-500">•</span>
                      <input
                        type="text"
                        value={point}
                        onChange={(e) => onUpdateDescription(project.id, idx, e.target.value)}
                        placeholder={`Detail ${idx + 1}`}
                        className="flex-1 p-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-xs"
                      />
                      {project.description.length > 1 && (
                        <button
                          onClick={() => onRemoveDescriptionPoint(project.id, idx)}
                          className="p-0.5 text-red-500 hover:text-red-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preview Mode */}
            {editingId !== project.id && (
              <div className="mt-1 p-1.5 bg-gray-50 rounded border-l-2 border-blue-400 space-y-1">
                <div className="text-xs">
                  <div>
                    <span className="font-medium text-gray-800">{project.name}</span>
                    {project.type && (
                      <span className="ml-2 px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">
                        {project.type}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-xs"
                      >
                        🔗 Live Preview
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:underline text-xs"
                      >
                        💻 Code
                      </a>
                    )}
                  </div>

                  {project.description.some(d => d.trim()) && (
                    <ul className="list-disc list-inside space-y-0.5 mt-1 text-xs text-gray-700">
                      {project.description
                        .filter(d => d.trim())
                        .map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))
                      }
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

         {/* Project Categories */}
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

       {/* Tips Section */}
      <div className="space-y-1 mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
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
