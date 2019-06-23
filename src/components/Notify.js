import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = props => {
  toast[props.type](props.message, {
    position: toast.POSITION.BOTTOM_LEFT
  });
  return <ToastContainer />;
};

export default Notify;
