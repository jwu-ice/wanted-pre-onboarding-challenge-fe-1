import { TodoType } from "@/types/todo";
import { getLocaleDate } from "@/utils/date";
import { useNavigate } from "react-router-dom";
import { classNames } from "@/utils/classNames";
import {
  TODO_CONTENT_DEFAULT_MESSAGE,
  TODO_TITLE_DEFAULT_MESSAGE,
} from "@/constants/todo";

const TodoItem = ({ data }: { data: TodoType }) => {
  const { id, title, content, createdAt } = data;
  const navigate = useNavigate();

  const handleOpenModal = () => {
    navigate(`/todo/${id}`, {
      state: { todoId: id },
    });
  };

  return (
    <div>
      <div
        onClick={handleOpenModal}
        className="px-4 py-2 bg-gray-100 rounded-2xl hover:bg-gray-200 cursor-pointer"
      >
        <p
          className={classNames(
            title === TODO_TITLE_DEFAULT_MESSAGE && "opacity-50",
            "text-2xl text-ellipsis overflow-hidden"
          )}
        >
          {title}
        </p>
        <p
          className={classNames(
            content === TODO_CONTENT_DEFAULT_MESSAGE && "opacity-50",
            "text-ellipsis overflow-hidden"
          )}
        >
          {content}
        </p>
        <p className="text-ellipsis overflow-hidden">
          {getLocaleDate(createdAt)}
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
