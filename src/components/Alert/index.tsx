import React, { useState, memo, useEffect } from "react";
import { Alert } from "react-bootstrap";
import IAlert from "./interface";

function _Alert(props: IAlert) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
        if (props.onClose) props.onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [show, props.onClose]);

  // Render the alert component if show is true
  return show ? (
    <div className="bd-example">
      <Alert
        variant={`${props.type} alert-left alert-dismissible fade show mb-3`}
        role="alert"
        onClose={() => setShow(false)}
      >
        <span>{props.message}</span>
      </Alert>
    </div>
  ) : null;
}

export default memo(_Alert);
