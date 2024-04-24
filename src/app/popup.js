"use client"
import React, { useState } from 'react';

export default function Popup() {
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
            <li>Developed a tracker module for monitoring attendance, including the incorporation of Authentication, and Authorization using <b>JWT, Identity, .Net Core MVC (C#), Javascript, Ajax, Entity Framework, and SQL server</b></li>
            <li>Contributed to building a web application to collect donations and hosted it on <b>Azure</b>,<b> configuring CI/CD pipelines in Azure DevOps</b> for code storage and QA testing</li>
            <li>Enhancing performance of REST API’s by <b>10%</b> through the utilization of <b>in-memory caching</b>, followed by the integration of <b>Redis</b> for distributed systems</li>
            <li>Utilized <b>Git/GitHub</b> for efficient version control and collaborative development and <b>Agile</b> for team management</li>
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
          transform: translate(-1%, -50%);
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