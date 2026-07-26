import React from "react";
import resumePDF from "../assets/resume/Riasat_Chowdhury_Resume.pdf";

export default function ResumeButton() {
  return (
    <a href={resumePDF} download="Riasat_Chowdhury_Resume.pdf" className="resume-btn">
      Download Resume
    </a>
  );
}
