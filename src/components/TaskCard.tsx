import { useState } from "react";
import { Id, Task } from "../types";
import { Trash2 } from "lucide-react";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (editMode) {
    return (
      <div className="bg-mainBgColor p-2 h-[100px] min-h-[100px] flex items-center text-left rounded-lg shadow-lg hover:ring-2 hover:ring-inset hover:ring-sideColor cursor-grab relative task">
        <textarea
          className="h-[90%] w-full resize-none border-none rounded-lg bg-transparent text-textColor focus:outline-none"
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        ></textarea>
      </div>
    );
  }

  return (
    <div
      onClick={toggleEditMode}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      className="bg-mainBgColor p-2 h-[100px] min-h-[100px] flex items-center text-left rounded-lg shadow-lg hover:ring-2 hover:ring-inset hover:ring-sideColor cursor-grab relative"
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {task.content}
      </p>
      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="stroke-textColor absolute right-4 top-1/2 -translate-y-1/2 bg-columnBgColor p-2 rounded-full opacity-60 hover:opacity-100"
        >
          <Trash2 />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
