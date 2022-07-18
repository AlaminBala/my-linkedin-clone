import React from "react";
import "./Widgets.css";
import { Info, FiberManualRecord } from "@material-ui/icons";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleleft">
          <FiberManualRecord />
        </div>
        <div className="widgets__articlerig">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("PAPA React is back", "Top news - 9999 readers")}
      {newsArticle("PAPA React is back", "Top news - 9999 readers")}
      {newsArticle("PAPA React is back", "Top news - 9999 readers")}
      {newsArticle("PAPA React is back", "Top news - 9999 readers")}
    </div>
  );
}

export default Widgets;
