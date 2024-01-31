import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

function useLogout() {
  const [signOut, loading, error] = useSignOut(auth);
  const showToast = useShowToast();
  const logoutUser = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await signOut();
      logout();
      localStorage.removeItem("user-info");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { handleLogout, loading, error };
}

export default useLogout;
