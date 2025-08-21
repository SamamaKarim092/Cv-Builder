const PersonalInfo = () => {
  return (
    <div className="space-y-2 mt-2">
      {/* Personal Information Section */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Personal Information:</h4>
        
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        
        {/* City and Country in same row */}
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="City"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        
        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        
        {/* Phone Number */}
        <div>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        
        {/* LinkedIn */}
        <div>
          <input
            type="url"
            placeholder="LinkedIn Profile URL"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        
        {/* GitHub */}
        <div>
          <input
            type="url"
            placeholder="GitHub Profile URL"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Tips Section */}
      <div className="space-y-1 mt-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 flex items-center">
          👤 Personal Info Tips:
        </h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Use your professional email</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Include full LinkedIn URL</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Keep phone number format consistent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;