import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { ContactContext } from "./ContactContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const { modalEdit } = useContext(ContactContext);
  const token = localStorage.getItem("@token");
  const [modalPerfilEdit, setModalPerfilEdit] = useState(false);
  const [userEditId, setUserEditId] = useState(0);
  const [userUpdate, setUserUpdate] = useState({});

  const registerUser = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      toast.success("Voce cadastrou com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Email já cadastrado ou algum campo foi inserido incorretamente!");
    }
  };

  const loginUser = async (formData) => {
    try {
      const { data } = await api.post("/login", formData);
      setUser(data.token.user);
      toast.success("Usuario logado com sucesso!");
      navigate("/home");
      localStorage.setItem("@token", data.token.token);
      localStorage.setItem("@userId", data.token.user.id);
    } catch (error) {
      console.error(error);
      toast.error("Email ou senha inseridos incorretamente");
    }
  };

  const getUser = async () => {
    const token = localStorage.getItem("@token");
    const id = localStorage.getItem("@userId");
    if (token) {
      try {
        const response = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const updateUser = async (formData) => {
    const id = localStorage.getItem("@userId");

    try {
      const response = await api.patch(`/users/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getUser();
      setModalPerfilEdit(false);
      toast.success("Usuário editado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = async () => {
    const id = localStorage.getItem("@userId");

    try {
      const response = await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModalPerfilEdit(false);
      userLogout();
      toast.success("Usuário deletado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [modalEdit]);

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@userId");
    localStorage.removeItem("@token");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        registerUser,
        loginUser,
        getUser,
        userLogout,
        token,
        modalPerfilEdit,
        setModalPerfilEdit,
        removeUser,
        userEditId,
        setUserEditId,
        userUpdate,
        setUserUpdate,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
