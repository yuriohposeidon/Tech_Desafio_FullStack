import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [newContact, setNewContact] = useState([]);
  const [modalNew, setModalNew] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [contactEditId, setContactEditId] = useState(0);
  const [updateContact, setUpdateContact] = useState({});
  const [contact, setContact] = useState([]);

  const token = localStorage.getItem("@token");

  const getAllContact = async () => {
    try {
      const response = await api.get(`/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContact(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addContact = async (FormData) => {
    try {
      const { data } = await api.post("/contacts", FormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await getAllContact();
      setModalNew(false);
      toast.success("Contato criado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const removeContact = async (contactId) => {
    try {
      const response = await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await getAllContact()
      setModalEdit(false);
      toast.success("Contato deletado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContacts = async (formData, contactId) => {
    try {
      const response = await api.patch(`/contacts/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await getAllContact();
      setModalEdit(false);
      toast.success("Contato editado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        addContact,
        removeContact,
        newContact,
        setNewContact,
        modalNew,
        setModalNew,
        modalEdit,
        setModalEdit,
        contactEditId,
        setContactEditId,
        contactList,
        updateContact,
        updateContacts,
        setUpdateContact,
        contact,
        setContact,
        getAllContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
