import { Button } from "antd";
import { useAuthContext } from "../../context/AuthProvider";

function LogoutButton() {
  const {
    providerMethod: { handleLogout },
  } = useAuthContext();

  return (
    <Button
      type="primary"
      style={{ background: "green" }}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default LogoutButton;
