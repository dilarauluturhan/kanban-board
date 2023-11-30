import { Task } from "../types";

interface Props {
  task: Task;
}

function TaskCard({ task }: Props) {
  return <div className="bg-mainBgColor p-2 h-[100px] min-h-[100px] flex items-center text-left rounded-lg shadow-lg hover:ring-2 hover:ring-inset hover:ring-sideColor cursor-grab">{task.content}</div>;
}

export default TaskCard;
