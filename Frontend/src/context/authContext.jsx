import { createContext, useState, useEffect } from "react";
import { getToken } from "../services/authToken";
import api from "../api";
import decodeJWT from "../services/decodeJwt";

export const AuthContext = createContext({});

export const AuthContextProvide = ({ children }) => {
  //TODO: refazer essa parte e adicionar refesh token
  const [authUser, setAuthUser] = useState({
    isLoading: true,
    isUser: false,
    validToken: false,
    token: null,
    user: {
      username: null,
      picture: null,
      id: null,
      consecutive_days: 0,
    },
  });

  useEffect(() => {
    console.log("context atualizou");
    const isToken = getToken();

    if (!isToken) return setAuthUser({ ...authUser, isLoading: false });

    setAuthUser({ ...authUser, isLoading: true });

    async function getAndVerifyUser() {
      try {
        const response = await api.post("/auth/token", { token: isToken });

        if (response.status == 200 && !authUser.isUser) {
          const config = {
            headers: { Authorization: `Bearer ${isToken}` },
          };
          const { id } = decodeJWT(isToken);

          const { data } = await api.get(`/user/logged/${id}`, config);

          return setAuthUser((prev) => {
            return {
              ...prev,
              isLoading: false,
              isUser: true,
              validToken: true,
              token: isToken,
              user: {
                username: data.name,
                picture: data.picture,
                id: data.user_id,
                consecutive_days: data.consecutive_days,
              },
            };
          });
        }

        return setAuthUser((prev) => {
          return { ...prev, validToken: true };
        });
      } catch (err) {
        console.log(err);
        return setAuthUser({
          ...authUser,
          isUser: false,
          token: null,
          isLoading: false,
        });
      }
    }
    getAndVerifyUser();
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};
