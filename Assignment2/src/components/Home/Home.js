import React from "react";
import Section from "../Section/Section";

const Home = ({ items }) => {
  return (
    <Section className="">
      <div className="container text-center text-md-start mt-5 mb-5">
        <div className="row">{items}</div>
      </div>
    </Section>
  );
};

export default Home;
