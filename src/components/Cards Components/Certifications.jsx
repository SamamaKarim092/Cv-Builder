// Certifications.jsx
import { Plus, X } from 'lucide-react';

const Certifications = ({ 
  certifications, 
  onAddCertification, 
  onRemoveCertification, 
  onUpdateCertification 
}) => {
  return (
    <div className="space-y-3 mt-2">
      {/* Section Title */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-700">Certifications:</h4>
        <button
          onClick={onAddCertification}
          className="flex items-center space-x-1 px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs transition-colors"
        >
          <Plus className="h-3 w-3" />
          <span>Add</span>
        </button>
      </div>

      {/* List of Certifications */}
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div key={cert.id} className="space-y-2 p-2 border border-gray-200 rounded-lg bg-white">
            {/* Certification Name */}
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">
                Certification Name
              </label>
              <input
                type="text"
                value={cert.name}
                onChange={(e) => onUpdateCertification(cert.id, 'name', e.target.value)}
                placeholder="e.g., AWS Certified Developer"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
              />
            </div>

            {/* Verification Link */}
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">
                Verify Link (Optional)
              </label>
              <input
                type="url"
                value={cert.link}
                onChange={(e) => onUpdateCertification(cert.id, 'link', e.target.value)}
                placeholder="https://verify.example.com/cert/123"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
              />
            </div>

            {/* Remove Button */}
            {certifications.length > 1 && (
              <button
                onClick={() => onRemoveCertification(cert.id)}
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
      <div className="space-y-1 mt-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 flex items-center">
          🏆 Certification Tips:
        </h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">List relevant certifications only</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Include expiration dates if applicable</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Add verification links when possible</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;