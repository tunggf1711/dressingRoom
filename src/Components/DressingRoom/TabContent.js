import React from "react";
import TabLinks from "./TabLinks";
import TabPane from "./TabPane";

export default function TabContent() {
  return (
    <div className="col-8">
      <TabLinks />
      <TabPane />
    </div>
  );
}
