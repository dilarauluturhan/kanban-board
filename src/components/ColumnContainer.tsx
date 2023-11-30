import { useState, useMemo } from "react";
import { ListPlus, Trash2 } from "lucide-react";
import { Column, Id, Task } from "../types";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "./TaskCard";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer(props: Props) {
  const {
    column,
    deleteColumn,
    updateColumn,
    createTask,
    tasks,
    deleteTask,
    updateTask,
  } = props;

  const [edit, setEdit] = useState(false);

  const tasksId = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: edit,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-columnBgColor opacity-40 border-4 border-red-700 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-columnBgColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col shadow-lg"
    >
      {/* column title */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEdit(true);
        }}
        className="bg-mainBgColor text-md h-[60px] cursor-grab rounded-lg p-3 font-bold border-columnBgColor border-4 flex items-center justify-between"
      >
        {!edit && column.title}
        {edit && (
          <input
            className="bg-columnBgColor rounded-lg outline-none px-2"
            value={column.title}
            onChange={(e) => updateColumn(column.id, e.target.value)}
            autoFocus
            onBlur={() => {
              setEdit(false);
            }}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setEdit(false);
            }}
          />
        )}

        <button
          onClick={() => deleteColumn(column.id)}
          className="cursor-pointer text-gray-700 hover:text-red-700"
        >
          <Trash2 />
        </button>
      </div>
      {/* column task container */}
      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksId}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
      {/* column footer */}
      <button
        onClick={() => {
          createTask(column.id);
        }}
        className="flex items-center gap-2 border-t-2 border-textColor rounded-lg p-4 shadow-inner hover:bg-sideColor hover:text-white active:bg-columnBgColor active:text-black"
      >
        <ListPlus />
        Add task
      </button>
    </div>
  );
}

export default ColumnContainer;
