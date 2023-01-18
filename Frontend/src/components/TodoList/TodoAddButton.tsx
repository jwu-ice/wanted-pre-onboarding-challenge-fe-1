import PlusButton from "@/components/common/PlusButton";
import { memo } from "react";

type TodoAddButtonType = {
  handleAddTodo: () => void;
};

const TodoAddButton = ({ handleAddTodo }: TodoAddButtonType) => {
  return (
    <div className="absolute right-0 -top-14">
      <PlusButton onClick={handleAddTodo} />
    </div>
  );
};

export default memo(TodoAddButton);
