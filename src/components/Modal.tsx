import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modalRoot")!;

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          [ закрыть ]
        </span>
        <h1>Упс! Что-то пошло не так!</h1>
      </div>
      <div className="modal-backdrop"></div>
    </div>,
    modalRoot
  );
};

export default Modal;
