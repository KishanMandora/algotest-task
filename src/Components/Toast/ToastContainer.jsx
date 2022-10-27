import { useState } from "react";
import { toastPubSub } from "../../helpers/pubSub";

function ToastContainer() {
  const [toast, setToast] = useState([]);

  toastPubSub.subscribe("toast", (data) => {
    const { id, duration } = data;
    setToast((prev) => [...prev, data]);
    setTimeout(() => {
      setToast((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  });

  const typeStyle = (type) => {
    switch (type) {
      case "success":
        return "bg-green-400";
      case "error":
        return "bg-red-400";
      case "info":
        return "bg-blue-400";
      default:
        return "";
    }
  };

  return (
    <div className="fixed bottom-8 left-4 flex flex-col gap-2">
      {Boolean(toast.length) &&
        toast.map(({ type, msg, id }) => {
          return (
            <div key={id} className={`p-3 ${typeStyle(type)}`}>
              <span> {msg} </span>
              <button
                onClick={() =>
                  setToast((prev) => prev.filter((toast) => toast.id !== id))
                }
              >
                X
              </button>
            </div>
          );
        })}
    </div>
  );
}

export { ToastContainer };
