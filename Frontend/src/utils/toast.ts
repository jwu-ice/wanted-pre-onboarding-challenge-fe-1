import { toast } from "react-toastify";

const toastConfig = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
} as const;

type ShowToastType = "info" | "success" | "warning" | "error" | "default";

export const showToast = (type: ShowToastType, comment: string) => {
  if (type === "default") {
    toast(comment, toastConfig);
    return;
  }

  toast[type](comment, toastConfig);
};
