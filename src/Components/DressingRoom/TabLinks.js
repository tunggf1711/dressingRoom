import React from "react";
import TabLinksItem from "./TabLinksItem";
import data from "./../../Data/Data.json";

let { navPills } = data;

export default function TabLinks() {
  return (
    <div>
      <ul className="nav nav-pills">
        {navPills.map((item, index) => {
          return <TabLinksItem key={index} item={item} index={index} />;
        })}
      </ul>
    </div>
  );
}
