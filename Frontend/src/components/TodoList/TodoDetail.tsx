import InputLabelForm from "@/components/common/InputLabelForm";
import { getLocaleDate } from "@/utils/date";
import { useRef, useEffect, useState, createRef } from "react";
import { todoApi } from "@/apis/todoApi";
import { useLocation, useNavigate } from "react-router-dom";
import {
  TODO_LOADED_DEFAULT_MESSAGE,
  TODO_TITLE_DEFAULT_MESSAGE,
} from "@/constants/todo";
import { TODO_CONTENT_DEFAULT_MESSAGE } from "../../constants/todo";
import { toast } from "react-toastify";
import { showToast } from "@/utils/toast";

const inputTitleRef = createRef<HTMLInputElement>();

const TodoDetail = () => {
  const [title, setTitle] = useState(TODO_LOADED_DEFAULT_MESSAGE);
  const [content, setContent] = useState(TODO_LOADED_DEFAULT_MESSAGE);
  const [creaetedAt, setCreaetedAt] = useState(TODO_LOADED_DEFAULT_MESSAGE);
  const [updatedAt, setUpdatedAt] = useState(TODO_LOADED_DEFAULT_MESSAGE);

  const modalRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const {
    state: { todoId },
  } = useLocation();

  const handleOnEdit = async () => {
    const { data } = await todoApi.updateTodo({
      id: todoId,
      title: title,
      content: content,
    });

    setTitle(data?.title);
    setContent(data?.content);
    setCreaetedAt(getLocaleDate(data?.createdAt));
    setUpdatedAt(getLocaleDate(data?.updatedAt));

    toast.success("🐣 수정되었습니다!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    navigate("/");
  };

  const handleOnDelete = async () => {
    const canDelete = confirm("정말 지우시겠습니까?");
    if (canDelete) {
      todoApi.deleteTodo({ id: todoId });

      navigate("/");

      showToast("success", "🐣 삭제되었습니다.");
    }
  };

  const handleOnGetTodo = async () => {
    const { data } = await todoApi.getTodoById(todoId);

    setTitle(data?.title === TODO_TITLE_DEFAULT_MESSAGE ? "" : data?.title);
    setContent(
      data?.content === TODO_CONTENT_DEFAULT_MESSAGE ? "" : data?.content
    );
    setCreaetedAt(getLocaleDate(data?.createdAt));
    setUpdatedAt(getLocaleDate(data?.updatedAt));
  };

  useEffect(() => {
    handleOnGetTodo();
    inputTitleRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleClickOutSide = (e: globalThis.MouseEvent): void => {
      if (!modalRef.current?.contains(e.target as Node)) {
        navigate("/");
      }
    };

    document.addEventListener("mouseup", handleClickOutSide);

    return () => document.removeEventListener("mouseup", handleClickOutSide);
  });

  return (
    <div className="">
      <input type="checkbox" id={todoId} className="modal-toggle" />
      <div className="modal-open modal">
        <div ref={modalRef} className="modal-box relative rounded-2xl">
          <div
            onClick={() => navigate("/")}
            className="btn btn-sm btn-circle absolute right-4 top-4"
          >
            ✕
          </div>
          <div className="flex flex-col">
            <InputLabelForm
              labelText="Title"
              value={title}
              ref={inputTitleRef}
              placeholder={TODO_TITLE_DEFAULT_MESSAGE}
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputLabelForm
              labelText="Content"
              value={content}
              placeholder={TODO_CONTENT_DEFAULT_MESSAGE}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex">
              <InputLabelForm
                labelText="CreatedDate"
                value={creaetedAt}
                disabled
                readOnly
                className="disabled:bg-transparent disabled:cursor-default"
              />
              <InputLabelForm
                labelText="UpdatedDate"
                value={updatedAt}
                disabled
                readOnly
                className="disabled:bg-transparent disabled:cursor-default"
              />
            </div>
            <div className="flex justify-end gap-4 mt-10 ">
              <button
                onClick={handleOnEdit}
                className="flex-1 btn btn-outline "
              >
                Edit
              </button>
              <button
                onClick={handleOnDelete}
                className="flex-1 btn btn-outline btn-error "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
