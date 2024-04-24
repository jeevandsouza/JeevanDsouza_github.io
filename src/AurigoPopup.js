"use client"
import React, { useState } from 'react';

export default function AurigoPopup() {
  const [showPopup, setShowPopup] = useState(false);

  const points = [
    'Developed a tracker module for monitoring attendance, including the incorporation of Authentication, and Authorization using JWT, Identity, .Net Core MVC (C#), Javascript, Ajax, Entity Framework, and SQL server',
    'Contributed to building a web application to collect donations and hosted it on Azure, configuring CI/CD pipelines in Azure DevOps for code storage and QA testing',
    'Enhancing performance of REST API’s by 10% through the utilization of in-memory caching, followed by the integration of Redis for distributed systems',
    'Utilized Git/GitHub for efficient version control and collaborative development and Agile for team management'
  ];

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
        onClick={() => setShowPopup(true)}
      >
        Click for Roles and Responsibilities
      </button>
      {showPopup && (
        <div className="popup bg-white p-4 rounded-lg mt-2">
          <h2 className="text-blue-500">Points:</h2>
          <ol>
            <li>Deployed production-level code for bid management software using <b>.Net Core, REST API’s, SQL server, React and hosted it in Azure using Azure DevOps</b></li>
            <li>Engineered a highly efficient workflow management system for budget tracking and approval leading to a significant
improvement in time efficiency with asynchronous communication using<b> C#, Kafka with confluence.</b></li>
            <li>Designed <b> T-SQL stored procedures, Views, and CTEs</b> to streamline data retrieval, enabling efficient processing of
pertinent information in the backend.</li>
            <li>Led the development and refinement of fund availability module, driving a 15% increase in operational efficiency by
leveraging <b> Ocelot API gateway and microservices architecture.</b></li>
<li>Spearheaded the team in the Contract Management module of Aurigo reducing the number of coding lines by <b>5%
through implementing Jquery, AJAX, and Docker.</b></li>
<li>Generated user forms using our in-house <b>XML rendering engine</b> by integrating it with SQL server and generating
reports with <b>SSRS</b> contributed to a 2% cost reduction due to time saved.</li>
<li>Provided comprehensive mentorship to a group of four interns, equipping them with the necessary skills and knowledge
to quickly grasp and actively contribute to the current project.</li>
          </ol>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
      )}
      <style jsx>{`
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-90%, -50%);
          border: 1px solid #ccc;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
}
//{points.map((point, index) => (
 // <li key={index}>{point}</li>
//))}