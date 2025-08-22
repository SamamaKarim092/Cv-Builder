// Resume.jsx
const Resume = ({ personalInfo, objective }) => {
  return (
    <div className="w-[210mm] h-[297mm] bg-white border border-gray-300 shadow-lg mx-auto p-6 font-sans">
      <div className="space-y-4">
        {/* Name */}
        {personalInfo.fullName && (
          <h1 className="text-3xl font-bold text-gray-800 border-b pb-2">
            {personalInfo.fullName}
          </h1>
        )}

        {/* Location */}
        {(personalInfo.city || personalInfo.country) && (
          <p className="text-sm text-gray-600">
            {personalInfo.city && <span>{personalInfo.city}</span>}
            {personalInfo.city && personalInfo.country && ", "}
            {personalInfo.country && <span>{personalInfo.country}</span>}
          </p>
        )}

        {/* Contact Info */}
        <div className="text-sm text-gray-600 space-y-1">
          {personalInfo.email && <p>Email: {personalInfo.email}</p>}
          {personalInfo.phone && <p>Phone: {personalInfo.phone}</p>}
          {personalInfo.linkedin && (
            <p>
              LinkedIn:{" "}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {new URL(personalInfo.linkedin).hostname}
              </a>
            </p>
          )}
          {personalInfo.github && (
            <p>
              GitHub:{" "}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {new URL(personalInfo.github).hostname}
              </a>
            </p>
          )}
        </div>

        {/* Objective */}
        {objective && objective.objective && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
              Objective
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              {objective.objective}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
