import { todoApi } from "@/apis/todoApi";
import TodoItem from "@/components/TodoList/TodoItem";
import PlusButton from "@/components/common/PlusButton";
import { todoType } from "@/types/todo";
import { useCallback, useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const { data: loadedTodos } = await todoApi.getTodos();
    setTodos(loadedTodos);
  };

  const handleAddTodo = async () => {
    await todoApi.createTodo({
      title: "Empty Example",
      content: "Empty Content",
    });

    await loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="relative">
      <div className="absolute right-0 -top-14">
        <PlusButton onClick={handleAddTodo} />
      </div>

      <div className="grid grid-cols-1 mt-4 gap-6">
        {todos?.length ? (
          todos.map((todo: todoType) => <TodoItem key={todo.id} data={todo} />)
        ) : (
          <div>Not Found To Do List</div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
