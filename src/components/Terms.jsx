import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-primary text-white px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">
        Terms & Conditions
      </h1>

      <p className="mb-6 text-gray-300 max-w-[800px]">
        These Terms and Conditions govern the use of services provided by ShreeTech Labs,
        including software development services and participation in project-based programs.
        By accessing or using our services, you agree to comply with these terms.
      </p>

      {/* ================= COMPANY TERMS ================= */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        1. Terms for Companies / Clients
      </h2>

      <ul className="list-disc ml-6 space-y-3 text-gray-300">

        <li>
          <strong>Service Engagement:</strong> Clients must clearly define project requirements before initiation.
        </li>

        <li>
          <strong>Payments:</strong> Payments must be made as per agreed timelines. Delays may result in service suspension.
        </li>

        <li>
          <strong>Project Scope:</strong> Any additional requirements beyond the agreed scope may incur extra cost and time.
        </li>

        <li>
          <strong>Communication:</strong> Clients must provide timely feedback and approvals to avoid delays.
        </li>

        <li>
          <strong>Confidentiality:</strong> All client data and project details will remain confidential.
        </li>

        <li>
          <strong>Intellectual Property:</strong> Ownership of deliverables is transferred only after full payment.
        </li>

        <li>
          <strong>Liability:</strong> ShreeTech Labs is not responsible for indirect damages or misuse after delivery.
        </li>

        <li>
          <strong>Termination:</strong> Either party may terminate the agreement with prior notice.
        </li>

      </ul>

      {/* ================= INTERN TERMS ================= */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        2. Terms for Interns / Participants
      </h2>

      <ul className="list-disc ml-6 space-y-3 text-gray-300">

        <li>
          <strong>Participation:</strong> Individuals must actively engage in assigned tasks and projects.
        </li>

        <li>
          <strong>Code of Conduct:</strong> Professional behavior is expected at all times.
        </li>

        <li>
          <strong>Learning Purpose:</strong> Programs are designed for practical exposure and do not guarantee employment.
        </li>

        <li>
          <strong>Work Ownership:</strong> Work created during projects may be used by ShreeTech Labs for business or portfolio use.
        </li>

        <li>
          <strong>Confidentiality:</strong> Participants must not share client or internal project data.
        </li>

        <li>
          <strong>Evaluation:</strong> Performance is assessed based on participation and task completion.
        </li>

        <li>
          <strong>Certification:</strong> Certificates are issued only upon successful completion.
        </li>

        <li>
          <strong>Termination:</strong> Participation may be terminated in case of misconduct or inactivity.
        </li>

      </ul>

      {/* ================= GENERAL TERMS ================= */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        3. General Terms
      </h2>

      <ul className="list-disc ml-6 space-y-3 text-gray-300">

        <li>
          Users must provide accurate information when interacting with the platform.
        </li>

        <li>
          Any misuse of services, data, or content is strictly prohibited.
        </li>

        <li>
          Payments (if applicable) are non-refundable unless otherwise stated.
        </li>

      </ul>

      {/* ================= CONTACT ================= */}
      <h2 className="text-xl font-semibold mt-10 mb-2">
        Contact
      </h2>

      <p className="text-gray-300">
        For any queries, reach out to:
        <br />
        📧 shirishkanoje9@gmail.com
      </p>

      <p className="mt-10 text-gray-500 text-sm">
        © 2026 ShreeTech Labs. All rights reserved.
      </p>

    </div>
  );
};

export default Terms;