import React from "react";

export default function TabLinksItem(props) {
  let { index, item } = props;

  return (
    <li className="nav-item">
      <a
        className={`nav-link btn-default ${index === 0 ? "active" : ""}`}
        data-toggle="pill"
        href={`#${item.type}`}
      >
        {item.showName}
      </a>
    </li>
  );
}
