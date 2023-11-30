import { useState } from "react";
import { Id, Task } from "../types";
import { X } from "lucide-react";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
}

function TaskCard({ task, deleteTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      className="bg-mainBgColor p-2 h-[100px] min-h-[100px] flex items-center text-left rounded-lg shadow-lg hover:ring-2 hover:ring-inset hover:ring-sideColor cursor-grab relative"
    >
      {task.content}
      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="stroke-textColor absolute right-4 top-1/2 -translate-y-1/2 bg-columnBgColor p-2 rounded-full opacity-60 hover:opacity-100"
        >
          <X />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
