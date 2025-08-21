const Objective = () => {
  return (
    <div className="space-y-4 mt-2">
      <div className="space-y-3">
        <div>
          <textarea
            // No value prop - uncontrolled
            placeholder="Enter the objective for your CV"
            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            rows={3}
          />
        </div>
      </div>

      {/* Tips Section */}
      <div className="space-y-2 mt-4">
        <h4 className="text-sm font-medium text-gray-700">Tips for CV Objectives:</h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Keep it concise (2-3 sentences)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Focus on your career goals</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Highlight relevant skills</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;

      