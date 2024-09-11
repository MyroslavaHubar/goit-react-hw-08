import { FaPhoneAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import ModalContact from "../ModalContact/ModalContact";

function Contact({ name, number, id }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(deleteContact(id));
    setIsOpenModal(false);
  };

  function handleDeleteContactClick() {
    setIsOpenModal(true);
  }

  function handleDeleteContact() {
    setIsOpenModal(false);
  }
  return (
    <li className={css.contact}>
      <div className={css.contactCard}>
        <div>
          <div className={css.contactItem}>
            <FaUserLarge className={css.icon} />
            <p>{name}</p>
          </div>
          <div className={css.contactItem}>
            <FaPhoneAlt className={css.icon} />
            <p>{number}</p>
          </div>
        </div>
        <button
          type="button"
          className={css.contactBtnDelete}
          aria-label="Button delete"
          onClick={handleDeleteContactClick}
        >
          Delete
        </button>
      </div>
      <ModalContact
        isOpen={isOpenModal}
        onRequestClose={handleDeleteContact}
        onConfirm={handleConfirmDelete}
      />
    </li>
  );
}

export default Contact;
