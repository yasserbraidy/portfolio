import { useState } from "react";

const useAlert = () => {
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState("danger");

  const setAlert = (status: string, message: string) => {
    setStatus(status);
    setMessage(message);
    setShowAlert(true);
  };

  const resetAlert = () => {
    setMessage("");
    setShowAlert(false);
    setStatus("danger");
  };

  return { message, showAlert, status, setAlert, resetAlert };
};
export default useAlert;
