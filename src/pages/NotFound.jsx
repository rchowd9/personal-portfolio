import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section-heading" style={{ textAlign: "center", paddingTop: "3rem" }}>
      <p className="section-kicker">404</p>
      <h2>Page not found</h2>
      <p className="section-description">
        The page you requested doesn’t exist or may have moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </section>
  );
}
