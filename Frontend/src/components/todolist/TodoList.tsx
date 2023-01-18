import { todoApi } from "@/apis/todoApi";
import TodoAddButton from "@/components/TodoList/TodoAddButton";
import TodoItem from "@/components/TodoList/TodoItem";
import { TodoType } from "@/types/todo";
import { useCallback, useEffect, useState } from "react";
import {
  TODO_TITLE_DEFAULT_MESSAGE,
  TODO_CONTENT_DEFAULT_MESSAGE,
} from "../../constants/todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const { data: loadedTodos } = await todoApi.getTodos();
    setTodos(loadedTodos);
  };

  const handleAddTodo = useCallback(async () => {
    await todoApi.createTodo({
      title: TODO_TITLE_DEFAULT_MESSAGE,
      content: TODO_CONTENT_DEFAULT_MESSAGE,
    });

    await loadTodos();
  }, []);

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="relative">
      <TodoAddButton handleAddTodo={handleAddTodo} />
      <div className="grid grid-cols-1 mt-4 gap-6">
        {todos?.length ? (
          todos.reduce(
            (prev: any[], todo: TodoType) => [
              <TodoItem key={todo.id} data={todo} />,
              ...prev,
            ],
            []
          )
        ) : (
          <div>Not Found To Do List</div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
