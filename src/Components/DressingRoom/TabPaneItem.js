import React from "react";
import Item from "./Item";

export default function TabPaneItem(props) {
  let { item, index, dataClothes } = props;
  return (
    <div
      className={`tab-pane container ${index === 0 ? "active" : "fade"}`}
      id={item.type}
    >
      <div className="container">
        <div className="row">
          {dataClothes.map((item, index) => {
            return <Item key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
