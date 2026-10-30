import React from "react";

export default function ResumeButton() {
  return (
    <a
      href={`${import.meta.env.BASE_URL}Riasat_Chowdhury_Resume.pdf`}
      download="Riasat_Chowdhury_Resume.pdf"
      className="resume-btn"
    >
      Download Resume
    </a>
  );
}
