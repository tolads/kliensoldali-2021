import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toasts = () => {
  // toast.info("Wow so easy!");

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
    />
  );
};

export default Toasts;
