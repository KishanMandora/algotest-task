import ReactDOM from "react-dom";
import { toastPubSub } from "../../helpers/pubSub";
import { ToastContainer } from "./ToastContainer";

function toast(msg = "Default Message", type = "Info", duration = 3000) {
  toastPubSub.publish("toast", {
    id: Math.random(),
    msg,
    type,
    duration,
  });
}

function Toast() {
  return ReactDOM.createPortal(
    <ToastContainer />,
    document.getElementById("portal")
  );
}

export { Toast, toast };
