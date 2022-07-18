import React from "react";

function RecentItem({ topic }) {
  return (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
}

export default RecentItem;
