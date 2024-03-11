import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isManager = false;
  let isAdmin = false;
  let status = "Employee";

  if (token) {
    const decoded = jwtDecode(token);
    const { username, roles } = decoded.UserInfo;

    isManager = roles.includes("Managers");
    isAdmin = roles.includes("Admins");
    console.log(isManager, isAdmin, "isManager, isAdmin");

    if (isManager) {
      status = "Manager";
    } else if (isAdmin) {
      status = "Admin";
    }
    console.log(status, "status");
    return { username, roles, status, isManager, isAdmin };
  }

  return { username: "", roles: [], isManager, isAdmin, status };
};
export default useAuth;
