import React from "react";

export default function Task({
  task: { id: string, title: string, state: Object },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}
