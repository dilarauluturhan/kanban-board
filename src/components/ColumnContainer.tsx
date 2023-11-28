import { Trash2 } from "lucide-react";
import { Column, Id } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

function ColumnContainer(props: Props) {
  const { column, deleteColumn } = props;

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
      className="bg-columnBgColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
    >
      {/* column title */}
      <div
        {...attributes}
        {...listeners}
        className="bg-mainBgColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-columnBgColor border-4 flex items-center justify-between"
      >
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-columnBgColor px-2 py-1 text-sm rounded-full">
            0
          </div>
          {column.title}
        </div>
        <button
          onClick={() => deleteColumn(column.id)}
          className="cursor-pointer text-gray-700 hover:text-red-700"
        >
          <Trash2 />
        </button>
      </div>
      {/* column task container */}
      <div className="flex flex-grow">Content</div>
      {/* column footer */}
      <div>Footer</div>
    </div>
  );
}

export default ColumnContainer;
