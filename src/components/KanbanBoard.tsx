import { useState } from "react";
import { Column, Id } from "../types";
import ColumnContainer from "./ColumnContainer";
import { PlusCircle } from "lucide-react";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }

  function generateId() {
    return Math.floor(Math.random() * 10001);
  }

  return (
    <div className="m-auto flex min-h-screen w-full items-center justify-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4 ">
          {columns.map((column) => (
            <ColumnContainer
              key={column.id}
              column={column}
              deleteColumn={deleteColumn}
            />
          ))}
        </div>
        <button
          onClick={() => createNewColumn()}
          className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBgColor border-2 border-columnBgColor p-4 hover:border-sideColor flex items-center gap-2"
        >
          <PlusCircle color="#272727" />
          Add Column
        </button>
      </div>
    </div>
  );
}

export default KanbanBoard;
