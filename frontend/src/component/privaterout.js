import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ user, children }) => {
    let navigate = useNavigate();
    if (!user) {
      return <navigate to="/"/>;
    }
    return children;
  };