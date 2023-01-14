import ReactDOM from "react-dom";

const ModalPortal = ({ children, selector }) => {
  const element =
    typeof window !== "undefined" && document.querySelector(selector);
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default ModalPortal;

// portal을 통해 모달구현하기.
