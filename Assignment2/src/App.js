import React from "react";
import CardData from "../public/CardData.js";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb.js";
import Home from "./components/Home/Home.js";

const arrayDataItems = CardData.map((data, index) => {
  return (
    <Card
      className="col-sm-4"
      key={index}
      cardImage={data.image}
      title={data.title}
      description={data.description}
    />
  );
});

const App = () => {
  return (
    <>
      <Navigationbar expand="lg" bg="primary" />

      <Breadcrumb className="" />

      <Home items={arrayDataItems} />

      <Footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      />
    </>
  );
};

export default App;
