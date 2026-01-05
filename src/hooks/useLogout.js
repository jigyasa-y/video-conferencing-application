import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logout } from "../lib/api";
import toast from "react-hot-toast";

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: logoutMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["authUser"], { success: false, user: null });
      queryClient.removeQueries();
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      setTimeout(() => {
        navigate("/login", { replace: true });
        toast.success("Logged out successfully");
      }, 100);
    },
    onError: (error) => {
      console.error("Logout error:", error);
      queryClient.setQueryData(["authUser"], { success: false, user: null });
      queryClient.removeQueries();
      setTimeout(() => {
        navigate("/login", { replace: true });
        toast.error("Error logging out, but you have been signed out locally");
      }, 100);
    },
  });

  return { logoutMutation, isPending, error };
};
export default useLogout;
