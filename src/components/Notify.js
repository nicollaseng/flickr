import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = () => {
  toast.error("Sorry, its just a test :(", {
    position: toast.POSITION.BOTTOM_LEFT
  });
  return <ToastContainer />;
};

export default Notify;
