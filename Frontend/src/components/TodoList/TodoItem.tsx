type todoType = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

type TodoProps = {
  data: todoType;
};

const TodoItem = ({ data }: TodoProps) => {
  const { id, title, content, createdAt } = data;

  return <div>1</div>;
};

export default TodoItem;
