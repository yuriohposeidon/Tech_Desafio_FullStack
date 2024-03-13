import { useContext } from "react";
import { ContactEditModal } from "./contactEditModal";
import { ContactNew } from "./contactNew";
import { ContactNewModal } from "./contactNewModal";
import { StyledContactSection } from "./contactSection";
import { ContactContext } from "../../../providers/ContactContext";
import { ContactList } from "./contactList";

export const ContactSection = () => {
  const { modalNew, modalEdit } = useContext(ContactContext);

  return (
    <StyledContactSection>
      <ContactNew />
      <ContactList />

      {modalNew && <ContactNewModal />}

      {modalEdit && <ContactEditModal />}
    </StyledContactSection>
  );
};
