import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <div className="space-y-3 mt-2"> {/* Reduced spacing from space-y-4 to space-y-3 */}
      {/* Input Section */}
      <div className="space-y-2"> {/* Reduced spacing from space-y-3 to space-y-2 */}
        <div>
          <input
            type="text"
            placeholder="Your University"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" // Reduced padding from p-3 to p-2
          />
        </div>
        
        <div>
          <input
            type="text"
            placeholder="Your Technology"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div>
          <input
            type="text"
            placeholder="Your CGPA"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div>
          <textarea
            placeholder="Related Coursework"
            className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            rows={2} // Reduced from 3 to 2 rows
          />
        </div>
      </div>

      {/* Tips Section */}
      <div className="space-y-1 mt-2"> {/* Reduced spacing */}
        <h4 className="text-sm font-medium text-gray-700">Education Tips:</h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Include full university name</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Mention your major/degree</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">List relevant courses only</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;