import React, { useState } from 'react';
import { Trophy, Plus, X, Edit3, Save, Calendar, Medal } from 'lucide-react';

const Achievement = () => {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: '',
      description: '',
      organization: '',
      date: '',
      category: ''
    }
  ]);
  const [editingId, setEditingId] = useState(null);

  const addAchievement = () => {
    const newAchievement = {
      id: Date.now(),
      title: '',
      description: '',
      organization: '',
      date: '',
      category: ''
    };
    setAchievements([...achievements, newAchievement]);
  };

  const removeAchievement = (id) => {
    if (achievements.length > 1) {
      setAchievements(achievements.filter(achievement => achievement.id !== id));
    }
  };

  const updateAchievement = (id, field, value) => {
    setAchievements(achievements.map(achievement => 
      achievement.id === id ? { ...achievement, [field]: value } : achievement
    ));
  };

  const startEditing = (id) => {
    setEditingId(id);
  };

  const stopEditing = () => {
    setEditingId(null);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'academic': 'bg-blue-50 border-blue-200 text-blue-800',
      'professional': 'bg-green-50 border-green-200 text-green-800',
      'competition': 'bg-purple-50 border-purple-200 text-purple-800',
      'leadership': 'bg-orange-50 border-orange-200 text-orange-800',
      'volunteer': 'bg-pink-50 border-pink-200 text-pink-800',
      'other': 'bg-gray-50 border-gray-200 text-gray-800'
    };
    return colors[category] || colors['other'];
  };

  return (
    <div className="space-y-2 mt-2">
      {/* Achievements Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-700">Your Achievements:</h4>
          <button
            onClick={addAchievement}
            className="flex items-center space-x-1 px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs transition-colors"
          >
            <Plus className="h-3 w-3" />
            <span>Add Achievement</span>
          </button>
        </div>
        
        {achievements.map((achievement, index) => (
          <div key={achievement.id} className="p-2 border border-gray-200 rounded-lg bg-white space-y-2">
            {/* Achievement Header */}
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-medium text-gray-800 flex items-center space-x-1">
                <Trophy className="h-3 w-3 text-yellow-500" />
                <span>Achievement {index + 1}</span>
              </h5>
              <div className="flex items-center space-x-1">
                {editingId === achievement.id ? (
                  <button
                    onClick={stopEditing}
                    className="p-1 text-green-500 hover:text-green-700 hover:bg-green-50 rounded transition-colors"
                    title="Save"
                  >
                    <Save className="h-3 w-3" />
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(achievement.id)}
                    className="p-1 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors"
                    title="Edit"
                  >
                    <Edit3 className="h-3 w-3" />
                  </button>
                )}
                {achievements.length > 1 && (
                  <button
                    onClick={() => removeAchievement(achievement.id)}
                    className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                    title="Remove achievement"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Achievement Fields */}
            <div className="space-y-1.5">
              <input
                type="text"
                value={achievement.title}
                onChange={(e) => updateAchievement(achievement.id, 'title', e.target.value)}
                placeholder="Achievement Title (e.g., Dean's List, Employee of the Month)"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={editingId !== null && editingId !== achievement.id}
              />
              
              <textarea
                value={achievement.description}
                onChange={(e) => updateAchievement(achievement.id, 'description', e.target.value)}
                placeholder="Achievement Description (Brief description of the achievement)"
                className="w-full p-1.5 border border-gray-300 rounded resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                rows={1}
                disabled={editingId !== null && editingId !== achievement.id}
              />
              
              <input
                type="text"
                value={achievement.organization}
                onChange={(e) => updateAchievement(achievement.id, 'organization', e.target.value)}
                placeholder="Organization/Institution (e.g., University, Company)"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={editingId !== null && editingId !== achievement.id}
              />
              
              <div className="grid grid-cols-2 gap-1.5">
                <input
                  type="month"
                  value={achievement.date}
                  onChange={(e) => updateAchievement(achievement.id, 'date', e.target.value)}
                  className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  disabled={editingId !== null && editingId !== achievement.id}
                />
                
                <select
                  value={achievement.category}
                  onChange={(e) => updateAchievement(achievement.id, 'category', e.target.value)}
                  className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  disabled={editingId !== null && editingId !== achievement.id}
                >
                  <option value="">Select Category</option>
                  <option value="academic">Academic</option>
                  <option value="professional">Professional</option>
                  <option value="competition">Competition</option>
                  <option value="leadership">Leadership</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Achievement Preview */}
            {editingId !== achievement.id && achievement.title && (
              <div className="mt-1 p-1.5 bg-yellow-50 rounded border-l-2 border-yellow-400">
                <div className="text-xs">
                  <div className="font-medium text-gray-800 flex items-center space-x-1">
                    <Medal className="h-3 w-3 text-yellow-600" />
                    <span>{achievement.title}</span>
                  </div>
                  {achievement.organization && (
                    <div className="text-gray-600">
                      <span className="font-medium">From:</span> {achievement.organization}
                    </div>
                  )}
                  {achievement.date && (
                    <div className="text-gray-500 flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(achievement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                    </div>
                  )}
                  {achievement.category && (
                    <div className="mt-1">
                      <span className={`px-2 py-0.5 rounded text-xs border ${getCategoryColor(achievement.category)}`}>
                        {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                      </span>
                    </div>
                  )}
                  {achievement.description && (
                    <div className="text-gray-600 mt-1">{achievement.description}</div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Achievement Categories */}
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-gray-700">Achievement Categories:</h4>
        <div className="grid grid-cols-2 gap-1 text-xs">
          <div className="p-1.5 bg-blue-50 rounded border">
            <div className="font-medium text-blue-800">Academic</div>
            <div className="text-blue-600">Dean's List, Scholarships</div>
          </div>
          <div className="p-1.5 bg-green-50 rounded border">
            <div className="font-medium text-green-800">Professional</div>
            <div className="text-green-600">Employee of Month</div>
          </div>
          <div className="p-1.5 bg-purple-50 rounded border">
            <div className="font-medium text-purple-800">Competition</div>
            <div className="text-purple-600">Hackathons, Contests</div>
          </div>
          <div className="p-1.5 bg-orange-50 rounded border">
            <div className="font-medium text-orange-800">Leadership</div>
            <div className="text-orange-600">Team Lead, President</div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="space-y-1 mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 flex items-center">
          🏆 Achievement Tips:
        </h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Include quantifiable achievements</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Focus on relevant accomplishments</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Use action words and specific details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;