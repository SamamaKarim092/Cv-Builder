import React, { useState } from 'react';
import { Award, Plus, X, Edit3, Save, Calendar } from 'lucide-react';

const Certifications = () => {
  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: '',
      issuer: '',
      date: '',
      credentialId: '',
      link: ''
    }
  ]);
  const [editingId, setEditingId] = useState(null);

  const addCertification = () => {
    const newCertification = {
      id: Date.now(),
      name: '',
      issuer: '',
      date: '',
      credentialId: '',
      link: ''
    };
    setCertifications([...certifications, newCertification]);
  };

  const removeCertification = (id) => {
    if (certifications.length > 1) {
      setCertifications(certifications.filter(cert => cert.id !== id));
    }
  };

  const updateCertification = (id, field, value) => {
    setCertifications(certifications.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    ));
  };

  const startEditing = (id) => {
    setEditingId(id);
  };

  const stopEditing = () => {
    setEditingId(null);
  };

  return (
    <div className="space-y-2 mt-2">
      {/* Certifications Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-700">Your Certifications:</h4>
          <button
            onClick={addCertification}
            className="flex items-center space-x-1 px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs transition-colors"
          >
            <Plus className="h-3 w-3" />
            <span>Add Certification</span>
          </button>
        </div>
        
        {certifications.map((cert, index) => (
          <div key={cert.id} className="p-2 border border-gray-200 rounded-lg bg-white space-y-2">
            {/* Certification Header */}
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-medium text-gray-800">
                Certification {index + 1}
              </h5>
              <div className="flex items-center space-x-1">
                {editingId === cert.id ? (
                  <button
                    onClick={stopEditing}
                    className="p-1 text-green-500 hover:text-green-700 hover:bg-green-50 rounded transition-colors"
                    title="Save"
                  >
                    <Save className="h-3 w-3" />
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(cert.id)}
                    className="p-1 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors"
                    title="Edit"
                  >
                    <Edit3 className="h-3 w-3" />
                  </button>
                )}
                {certifications.length > 1 && (
                  <button
                    onClick={() => removeCertification(cert.id)}
                    className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                    title="Remove certification"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Certification Fields */}
            <div className="space-y-1.5">
              <input
                type="text"
                value={cert.name}
                onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                placeholder="Certification Name (e.g., AWS Solutions Architect)"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={editingId !== null && editingId !== cert.id}
              />
              
              <input
                type="text"
                value={cert.issuer}
                onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                placeholder="Issuing Organization (e.g., Amazon Web Services)"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={editingId !== null && editingId !== cert.id}
              />
              
              <input
                type="month"
                value={cert.date}
                onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                placeholder="Issue Date"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={editingId !== null && editingId !== cert.id}
              />
              
              <input
                type="text"
                value={cert.credentialId}
                onChange={(e) => updateCertification(cert.id, 'credentialId', e.target.value)}
                placeholder="Credential ID (Optional)"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={editingId !== null && editingId !== cert.id}
              />
              
              <input
                type="url"
                value={cert.link}
                onChange={(e) => updateCertification(cert.id, 'link', e.target.value)}
                placeholder="Verification Link (Optional)"
                className="w-full p-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={editingId !== null && editingId !== cert.id}
              />
            </div>

            {/* Certification Preview */}
            {editingId !== cert.id && cert.name && (
              <div className="mt-1 p-1.5 bg-green-50 rounded border-l-2 border-green-400">
                <div className="text-xs">
                  <div className="font-medium text-gray-800">{cert.name}</div>
                  {cert.issuer && (
                    <div className="text-gray-600">
                      <span className="font-medium">Issued by:</span> {cert.issuer}
                    </div>
                  )}
                  {cert.date && (
                    <div className="text-gray-500 flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(cert.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                    </div>
                  )}
                  {cert.credentialId && (
                    <div className="text-gray-500">
                      <span className="font-medium">ID:</span> {cert.credentialId}
                    </div>
                  )}
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 underline"
                    >
                      Verify Certification
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Certification Categories */}
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-gray-700">Popular Certifications:</h4>
        <div className="grid grid-cols-2 gap-1 text-xs">
          <div className="p-1.5 bg-blue-50 rounded border">
            <div className="font-medium text-blue-800">Cloud</div>
            <div className="text-blue-600">AWS, Azure, GCP</div>
          </div>
          <div className="p-1.5 bg-green-50 rounded border">
            <div className="font-medium text-green-800">Programming</div>
            <div className="text-green-600">Oracle, Microsoft</div>
          </div>
          <div className="p-1.5 bg-purple-50 rounded border">
            <div className="font-medium text-purple-800">Security</div>
            <div className="text-purple-600">CISSP, CEH</div>
          </div>
          <div className="p-1.5 bg-orange-50 rounded border">
            <div className="font-medium text-orange-800">Project Mgmt</div>
            <div className="text-orange-600">PMP, Scrum</div>
          </div>
        </div>
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