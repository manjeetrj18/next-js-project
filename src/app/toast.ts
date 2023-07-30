"use client";
import { toast } from "react-toastify";
export { ToastContainer } from "react-toastify";

const toastFunction = (type: any, text: string) => {
  toast.error(text, {
    type,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default toastFunction;
