import TodoItem from "@/components/TodoList/TodoItem";

const TODOS_EXAMPLE = [
  {
    id: "31l",
    title: "ac",
    content: "qwrqwr",
    createdAt: "qwdqwd",
  },
  {
    id: "31klrqsdrjkl",
    title: "acqwdwqd",
    content: "qwrqwwqwqwdqwdqdr",
    createdAt: "qwdqwdqwd",
  },
];

const TodoList = () => {
  return (
    <>
      {TODOS_EXAMPLE.map((data) => (
        <TodoItem key={data.id} data={data} />
      ))}
    </>
  );
};

export default TodoList;
