import { useContext } from "react";
import { ContactCard } from "./contactCard";
import { StyledContactList } from "./contactList";
import { ContactContext } from "../../../../providers/ContactContext";

export const ContactList = () => {
  const { contact } = useContext(ContactContext);
  return (
    <StyledContactList>
      
      {contact.length>0? contact.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      )):<p>Sem contatos cadastrados</p>}
      <ContactCard />
    </StyledContactList>
  );
};
