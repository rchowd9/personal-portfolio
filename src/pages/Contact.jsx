import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      {/* Email link */}
      <p>
        Email: 
        <a href="mailto:chowdhuryriasat078@gmail.com">
            chowdhuryriasat078@gmail.com
        </a>
      </p>

      {/* Phone link */}
      <p>
        Phone: 
        <a href="tel:5165283458">516‑528‑3458</a>
      </p>

      {/* LinkedIn */}
      <p>
        LinkedIn: 
        <a href="https://www.linkedin.com/in/riasat-chowdhury-0a1232336/">
          linkedin.com/in/riasat-chowdhury-0a1232336/
        </a>
      </p>

      {/* GitHub */}
      <p>
        GitHub: 
        <a href="https://github.com/rchowd9">
          github.com/rchowd9
        </a>
      </p>
    </section>
  );
}
