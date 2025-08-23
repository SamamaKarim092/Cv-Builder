// Resume.jsx
const Resume = ({ personalInfo, objective, education, skills, projects, certifications }) => {
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
        {objective?.objective && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
              Objective
            </h2>
            <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">
              {objective.objective}
            </p>
          </div>
        )}

        {/* Education */}
        {(education?.university ||
          education?.technology ||
          education?.cgpa) && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
              Education
            </h2>
            <div className="text-sm text-gray-700 mt-1">
              {education.university && (
                <p>
                  <strong>Degree:</strong> {education.university}
                </p>
              )}
              {education.technology && (
                <p>
                  <strong>Field:</strong> {education.technology}
                </p>
              )}
              {education.cgpa && (
                <p>
                  <strong>CGPA:</strong> {education.cgpa}
                </p>
              )}
              {education.coursework && (
                <p>
                  <strong>Coursework:</strong>
                  <span className="whitespace-pre-line block mt-1">
                    {education.coursework}
                  </span>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills &&
          skills.some(
            (item) => item.skill.trim() !== "" || item.type.trim() !== ""
          ) && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
                Skills
              </h2>

              <div className="space-y-2 mt-2">
                {skills
                  .filter(
                    (item) =>
                      item.skill.trim() !== "" || item.type.trim() !== ""
                  )
                  .map((item, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      {item.type && (
                        <strong className="text-gray-800 mr-1.5">
                          {item.type}:
                        </strong>
                      )}
                      {item.skill || (
                        <em className="text-gray-500">[No skill entered]</em>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

        {/* Projects */}
        {projects &&
          projects.some(
            (p) => p.name || p.description.some((d) => d.trim())
          ) && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
                Projects
              </h2>

              <div className="space-y-4 mt-2">
                {projects
                  .filter((p) => p.name || p.description.some((d) => d.trim()))
                  .map((project, index) => (
                    <div key={project.id || index} className="space-y-1">
                      {/* Project Name and Type */}
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-base font-medium text-gray-800">
                          {project.name || (
                            <em className="text-gray-500">Untitled Project</em>
                          )}
                        </h3>
                        {project.type && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded font-medium">
                            {project.type}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      {(project.liveLink || project.codeLink) && (
                        <div className="flex flex-wrap gap-3 text-sm">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline flex items-center gap-1"
                            >
                              🔗 Live Preview
                            </a>
                          )}
                          {project.codeLink && (
                            <a
                              href={project.codeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:underline flex items-center gap-1"
                            >
                              💻 Code
                            </a>
                          )}
                        </div>
                      )}

                      {/* Description */}
                      {project.description.some((d) => d.trim()) && (
                        <ul className="list-disc list-inside space-y-0.5 text-sm text-gray-700 mt-1">
                          {project.description
                            .filter((d) => d.trim())
                            .map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

        {/* Certifications */}
        {certifications && certifications.some((c) => c.name) && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
              Certifications
            </h2>

            <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-gray-700">
              {certifications
                .filter((c) => c.name.trim())
                .map((cert, index) => (
                  <li key={index}>
                    {cert.name}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-600 hover:underline text-xs"
                      >
                        (Verify)
                      </a>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
