import React, { useState } from 'react';
import { Code, Plus, X } from 'lucide-react';

const Skills = () => {
  const [skills, setSkills] = useState(['']);

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const removeSkill = (index) => {
    if (skills.length > 1) {
      setSkills(skills.filter((_, i) => i !== index));
    }
  };

  const updateSkill = (index, value) => {
    const updatedSkills = skills.map((skill, i) => 
      i === index ? value : skill
    );
    setSkills(updatedSkills);
  };

  return (
    <div className="space-y-3 mt-2">
      {/* Skills Input Section */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Add Your Skills:</h4>
        
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => updateSkill(index, e.target.value)}
              placeholder={`Skill ${index + 1} (e.g., JavaScript, React, Python)`}
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            {skills.length > 1 && (
              <button
                onClick={() => removeSkill(index)}
                className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                title="Remove skill"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
        
        <button
          onClick={addSkill}
          className="flex items-center space-x-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Another Skill</span>
        </button>
      </div>

      {/* Skill Categories Section */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Skill Categories:</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-blue-50 rounded border">
            <div className="font-medium text-blue-800">Technical</div>
            <div className="text-blue-600">Programming, Tools</div>
          </div>
          <div className="p-2 bg-green-50 rounded border">
            <div className="font-medium text-green-800">Soft Skills</div>
            <div className="text-green-600">Communication, Leadership</div>
          </div>
          <div className="p-2 bg-purple-50 rounded border">
            <div className="font-medium text-purple-800">Languages</div>
            <div className="text-purple-600">English, Spanish</div>
          </div>
          <div className="p-2 bg-orange-50 rounded border">
            <div className="font-medium text-orange-800">Frameworks</div>
            <div className="text-orange-600">React, Node.js</div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="space-y-1 mt-2">
        <h4 className="text-sm font-medium text-gray-700">Skills Tips:</h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">List skills relevant to the job</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Include both technical and soft skills</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Be specific (React instead of Web Development)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;