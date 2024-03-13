import { useContext } from "react";
import { ContactContext } from "../../../../../providers/ContactContext";
import { StyledContactCard } from "./contactCard";

export const ContactCard = ({ contact }) => {
  const { setModalEdit, setContactEditId, setUpdateContact } = useContext(ContactContext);

  const openModalAndSetId = () => {
    setModalEdit(true);
    setContactEditId(contact.id);
    setUpdateContact({ ...contact });
  };

  if (contact) {
    return (
      <StyledContactCard>
        <li className="card__container" onClick={() => openModalAndSetId()}>
          <span className="contact__title">{contact.fullname}</span>
          <span className="contact__title">{contact.email}</span>
          <span className="contact__title">{contact.phone}</span>
        </li>
      </StyledContactCard>
    );
  }
};
