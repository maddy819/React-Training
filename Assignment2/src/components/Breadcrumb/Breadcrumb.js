import React from "react";
import Section from "../Section/Section";

const Breadcrumb = ({ ...props }) => {
  return (
    <Section {...props}>
      <div
        style={{ color: "white" }}
        className="container text-center text-md-start mt-5 mb-5"
      >
        <h1>Dashboard</h1>
      </div>
    </Section>
  );
};

export default Breadcrumb;
