import Modal from "react-modal";
import css from "./ModalContact.module.css";

Modal.setAppElement("#root");

function ModalContact({ isOpen, onRequestClose, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modalContack}
    >
      <h2 className={css.modalTitle}>Are you sure?</h2>
      <div className={css.modalTitleBtn}>
        <button onClick={onConfirm} className={css.modalBtn}>
          Yes
        </button>
        <button onClick={onRequestClose} className={css.modalBtn}>
          No
        </button>
      </div>
    </Modal>
  );
}

export default ModalContact;
