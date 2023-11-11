import { Trash2 } from "lucide-react";
import { Column, Id } from "../types";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

function ColumnContainer(props: Props) {
  const { column, deleteColumn } = props;
  return (
    <div className="bg-columnBgColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
      {/* column title */}
      <div className="bg-mainBgColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-columnBgColor border-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-columnBgColor px-2 py-1 text-sm rounded-full">
            0
          </div>
          {column.title}
        </div>
        <button
          onClick={() => deleteColumn(column.id)}
          className="cursor-pointer text-textColor hover:text-sideColor"
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
