import React, { useState } from "react";
import { certificates } from "../data/certificates";

const Verify = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleVerify = () => {
    const found = certificates.find(
      (cert) => cert.id.toLowerCase() === input.toLowerCase()
    );

    if (found) {
      setResult(found);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  // 🔥 DOWNLOAD FUNCTION (100% working)
  const handleDownload = () => {
    if (!result) return;

    const link = document.createElement("a");
    link.href = result.image;
    link.download = `${result.id}-certificate.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">

      {/* HEADING */}
      <h1 className="text-3xl font-bold mb-6">
        Verify Certificate
      </h1>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Enter Certificate ID"
        className="p-3 rounded text-black w-[300px]"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* VERIFY BUTTON */}
      <button
        onClick={handleVerify}
        className="mt-4 px-6 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
      >
        Verify
      </button>

      {/* ✅ RESULT */}
      {result && (
        <div className="mt-8 text-center">

          <h2 className="text-green-400 text-xl mb-4">
            ✅ Certificate Verified
          </h2>

          {/* CERTIFICATE IMAGE */}
          <img
            src={result.image}
            alt="certificate"
            className="w-[500px] rounded shadow-lg"
          />

          {/* DETAILS */}
          <div className="mt-4 text-left">
            <p><strong>Name:</strong> {result.name}</p>
            <p><strong>Course:</strong> {result.course}</p>
            <p><strong>Date:</strong> {result.date}</p>
          </div>

          {/* 🔥 DOWNLOAD BUTTON */}
          <button
            onClick={handleDownload}
            className="mt-6 px-6 py-3 bg-green-500 rounded text-white font-semibold hover:bg-green-600 transition"
          >
            Download Certificate 📥
          </button>

          {/* VIEW FULL */}
          <div className="mt-3">
            <a
              href={result.image}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              View Full Certificate 🔍
            </a>
          </div>

        </div>
      )}

      {/* ❌ NOT FOUND */}
      {notFound && (
        <p className="mt-6 text-red-500">
          ❌ Certificate Not Found
        </p>
      )}

    </div>
  );
};

export default Verify;
