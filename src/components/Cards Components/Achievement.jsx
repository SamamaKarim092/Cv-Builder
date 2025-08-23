// Achievement.jsx
import React from 'react';
import { Plus, X } from 'lucide-react';

const Achievement = ({
  achievements,
  onAddAchievement,
  onRemoveAchievement,
  onUpdateAchievement
}) => {
  return (
    <div className="space-y-3 mt-2">
      {/* Section Title */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-700">Achievements:</h4>
        <button
          onClick={onAddAchievement}
          className="flex items-center space-x-1 px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs transition-colors"
        >
          <Plus className="h-3 w-3" />
          <span>Add</span>
        </button>
      </div>

      {/* List of Achievements */}
      <div className="space-y-3">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="space-y-2 p-2 border border-gray-200 rounded-lg bg-white">
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">
                Achievement (Bullet Point)
              </label>
              <textarea
                value={achievement.description}
                onChange={(e) => onUpdateAchievement(achievement.id, e.target.value)}
                placeholder="e.g., Won 1st prize in college hackathon for innovative UI design"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm resize-none"
                rows={2}
              />
            </div>

            {/* Remove Button */}
            {achievements.length > 1 && (
              <button
                onClick={() => onRemoveAchievement(achievement.id)}
                className="flex items-center space-x-1 text-red-500 hover:text-red-700 text-xs"
              >
                <X className="h-3 w-3" />
                <span>Remove</span>
              </button>
            )}
          </div>
        ))}
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