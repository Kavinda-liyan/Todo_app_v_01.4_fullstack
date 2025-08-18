import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    //remove user
    localStorage.removeItem("user");

    //dispacth
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
