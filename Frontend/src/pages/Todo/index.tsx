import PlusButton from "@/components/common/PlusButton";
import TodoList from "@/components/TodoList/TodoList";

const Todo = () => {
  const handleAddTodo = () => {};

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-center my-4">TODO LIST</h1>
        <PlusButton onClick={handleAddTodo} />
      </div>
      <TodoList />
    </div>
  );
};

export default Todo;
