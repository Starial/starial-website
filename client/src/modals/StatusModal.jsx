import { CgClose } from "react-icons/cg";

export default function ErrorModal({ msg, statusType, onClose, isOpen }) {
  if (!isOpen) return null;
  if (statusType === "error") {
    return (
      <div className="error-modal status-modal">
        <button onClick={onClose} className="modal-close">
          <CgClose className="close-icon" />
        </button>
        <p>{msg}</p>
      </div>
    );
  } else {
    return (
      <div className="success-modal status-modal">
        <button onClick={onClose} className="modal-close">
          <CgClose className="close-icon" />
        </button>
        <p>{msg}</p>
      </div>
    );
  }
}
