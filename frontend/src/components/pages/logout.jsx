import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();
  logout()
  //cookies.remove("user");
};

export default Logout;