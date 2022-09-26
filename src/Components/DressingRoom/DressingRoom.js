import React from "react";
import Banner from "./Banner";
import Model from "./Model";
import "./style.css";
import TabContent from "./TabContent";

export default function DressingRoom() {
  return (
    <div className="container-fluid">
      <Banner />
      <div className="row">
        <TabContent />
        <Model />
      </div>
    </div>
  );
}
