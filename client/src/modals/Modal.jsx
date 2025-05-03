import { CgClose } from "react-icons/cg";

export default function AddRoles({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <section className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <CgClose className="close-icon" />
        </button>
        {children}
      </div>
    </section>
  );
}
