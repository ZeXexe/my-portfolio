import React from 'react';

const MyResume = () => {
  return (
    <div className="bg-white text-purple-900 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">My Resume</h3>

      {/* Objective Section */}
      <section className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Objective</h4>
        <p>
          Seeking an entry-level IT position where I can apply my leadership, problem-solving, and teamwork skills to help solve technical issues within an organization.
        </p>
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Education</h4>
        <div className="mb-4">
          <strong>B.S. Information Technology | Cybersecurity</strong> <br />
          Kean University, Union, NJ <br />
          <span>Expected Graduation: 2025 | GPA: 3.3, Dean’s List</span>
        </div>
        <div>
          <strong>A.S. Computer Information Systems & Technology</strong> <br />
          Union County College, Cranford, NJ <br />
          <span>Graduated: January 2022 | GPA: 3.85, High Honors, Phi Theta Kappa Honor Society</span>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Work Experience</h4>
        <div className="mb-4">
          <strong>Maplewood Library</strong> <br />
          IT Assistant <br />
          <span>October 2023 - July 2024</span>
          <ul className="list-disc pl-5 mt-2">
            <li>Provided one-on-one assistance with library patrons, including troubleshooting with their devices.</li>
            <li>Maintence of public computers at two different branch locations.</li>
          </ul>
        </div>
        <div className="mb-4">
          <strong>Grill Master BBQ</strong> <br />
          Runner/Busser <br />
          <span>October 2018 - March 2020</span>
          <ul className="list-disc pl-5 mt-2">
            <li>Communicated in a fast-paced environment to meet customer needs regarding food and sanitation.</li>
            <li>Cleaned and set up tables, delivered food for dine-in or take-out, and managed kitchen space efficiently.</li>
          </ul>
        </div>
      </section>

      {/* Traits & Skills Section */}
      <section className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Traits & Skills</h4>
        <ul className="list-disc pl-5">
          <li>Quickly adapts to new environments, demonstrating flexibility in various positions.</li>
          <li>Intermediate computer skills: built PCs, replaced parts, and troubleshooted hardware failures.</li>
          <li>Understands the importance of computer upkeep and maintenance.</li>
        </ul>
      </section>

      {/* Additional Experience Section */}
      <section>
        <h4 className="text-xl font-semibold mb-2">Additional Experience</h4>
        <div>
          <strong>World of Warcraft: Team Leader</strong> <br />
          <span>2009-2011 / 2015-2016</span>
          <ul className="list-disc pl-5 mt-2">
            <li>Led teams of 20-30 players in strategic challenges, achieving high leaderboard rankings.</li>
            <li>Effectively managed orders and maintained morale to ensure positive team relationships.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MyResume;
