import InputLabelForm from "@/components/common/InputLabelForm";
import { todoType } from "@/types/todo";
import { getLocaleDate } from "@/utils/date";
import { useEffect, useRef, useState } from "react";
import { classNames } from "../../utils/classNames";

const TodoItem = ({ data }: { data: todoType }) => {
  const { id, title, content, createdAt, updatedAt } = data;
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleOnEdit = () => {};
  const handleOnDelete = () => {};

  useEffect(() => {
    const handleClickOutSide = (e: globalThis.MouseEvent): void => {
      if (isOpen && !modalRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mouseup", handleClickOutSide);
    }

    return () => document.removeEventListener("mouseup", handleClickOutSide);
  });

  return (
    <div>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className="px-4 py-2 bg-gray-100 rounded-2xl hover:bg-gray-200 cursor-pointer"
      >
        <p className="text-2xl text-ellipsis overflow-hidden">{title}</p>
        <p className="text-ellipsis overflow-hidden">{content}</p>
        <p className="text-ellipsis overflow-hidden">
          {getLocaleDate(createdAt)}
        </p>
      </div>

      <div className="">
        <input type="checkbox" id={id} className="modal-toggle" />
        <div className={classNames(isOpen && "modal-open", "modal")}>
          <div ref={modalRef} className="modal-box relative rounded-2xl">
            <div
              onClick={() => setIsOpen(false)}
              className="btn btn-sm btn-circle absolute right-4 top-4"
            >
              ✕
            </div>
            <div className="flex flex-col ">
              <InputLabelForm labelText="Title" defaultValue={title} />
              <InputLabelForm labelText="Content" defaultValue={content} />
              <div className="flex">
                <InputLabelForm
                  labelText="CreatedDate"
                  defaultValue={getLocaleDate(createdAt)}
                  disabled
                  className="disabled:bg-transparent disabled:cursor-default"
                />
                <InputLabelForm
                  labelText="UpdatedDate"
                  defaultValue={getLocaleDate(updatedAt)}
                  disabled
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
    </div>
  );
};

export default TodoItem;
