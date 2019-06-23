import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

var properties = null;

const Notify = props => {
  properties = props;
  return <ToastContainer />;
};

export const toastNotify = () => {
  toast[properties.type](properties.message, {
    position: toast.POSITION.BOTTOM_LEFT
  });
};

export default Notify;
