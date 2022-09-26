import React from "react";
import TabPaneItem from "./TabPaneItem";
import data from "./../../Data/Data.json";

export default function TabPane() {
  let { navPills, tabPanes } = data;

  return (
    <div className="well">
      <div className="tab-content">
        {navPills.map((item, index) => {
          let dataClothes = tabPanes.filter(
            (itemClothes) => itemClothes.type === item.type
          );
          return (
            <TabPaneItem
              key={index}
              item={item}
              index={index}
              dataClothes={dataClothes}
            />
          );
        })}
      </div>
    </div>
  );
}
